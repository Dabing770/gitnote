<#
.SYNOPSIS
  删除误拷进 content/ 的浏览器 profile 缓存目录。

.DESCRIPTION
  这些目录（edge-profile 等）是 Edge 浏览器的组件缓存，路径极深且含中文，
  Remove-Item 常因 Windows MAX_PATH 限制失败。此脚本先用 robocopy 把目标
  目录镜像成空目录（robocopy 支持长路径），再删除空壳，最后从 git 索引中移除。

.EXAMPLE
  pwsh -File scripts/clean-junk.ps1            # 预览将要删除的内容
  pwsh -File scripts/clean-junk.ps1 -Confirm   # 实际执行删除
#>

param(
    [switch]$Confirm
)

$ErrorActionPreference = 'Stop'
$repoRoot = Split-Path -Parent $PSScriptRoot

# 需要清理的垃圾目录名（相对 content/ 下任意深度匹配）
$junkDirNames = @(
    'edge-profile',
    'chrome-profile'
)

$contentRoot = Join-Path $repoRoot 'content'
if (-not (Test-Path -LiteralPath $contentRoot)) {
    Write-Error "找不到 content/ 目录：$contentRoot"
}

$targets = @()
foreach ($name in $junkDirNames) {
    $targets += Get-ChildItem -LiteralPath $contentRoot -Directory -Recurse -Filter $name -ErrorAction SilentlyContinue
}

if ($targets.Count -eq 0) {
    Write-Host 'content/ 下没有发现浏览器 profile 垃圾目录，无需清理。' -ForegroundColor Green
    exit 0
}

$emptyDir = Join-Path ([System.IO.Path]::GetTempPath()) ("empty-" + [guid]::NewGuid().ToString('N'))

foreach ($target in $targets) {
    $path = $target.FullName
    $fileCount = (Get-ChildItem -LiteralPath $path -Recurse -File -ErrorAction SilentlyContinue | Measure-Object).Count
    $sizeMb = [math]::Round(
        ((Get-ChildItem -LiteralPath $path -Recurse -File -ErrorAction SilentlyContinue |
            Measure-Object -Property Length -Sum).Sum / 1MB), 2)

    $relative = $path.Substring($repoRoot.Length + 1)
    Write-Host ("{0}  —  {1} 个文件, {2} MB" -f $relative, $fileCount, $sizeMb) -ForegroundColor Yellow

    if (-not $Confirm) { continue }

    New-Item -ItemType Directory -Path $emptyDir -Force | Out-Null
    # robocopy /MIR 用空目录镜像目标，可绕过长路径限制清空内容
    & robocopy $emptyDir $path /MIR /NFL /NDL /NJH /NJS /NC /NS /NP | Out-Null
    Remove-Item -LiteralPath $path -Recurse -Force -ErrorAction SilentlyContinue
    Remove-Item -LiteralPath $emptyDir -Recurse -Force -ErrorAction SilentlyContinue

    if (Test-Path -LiteralPath $path) {
        Write-Warning "未能完全删除：$relative"
    } else {
        Write-Host "  已删除" -ForegroundColor Green
        # 若这些文件已被 git 跟踪，同步从索引中移除（.gitignore 不会自动 untrack）
        Push-Location $repoRoot
        & git rm -r --cached --quiet -- $relative 2>$null
        Pop-Location
    }
}

if (-not $Confirm) {
    Write-Host ''
    Write-Host '以上为预览。确认无误后运行：' -ForegroundColor Cyan
    Write-Host '  pwsh -File scripts/clean-junk.ps1 -Confirm' -ForegroundColor Cyan
}
