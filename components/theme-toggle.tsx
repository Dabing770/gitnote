"use client";

import { useEffect, useState } from "react";
import { Laptop, Moon, Sun } from "lucide-react";

type Theme = "light" | "dark" | "system";
const themes: { value: Theme; label: string; icon: typeof Sun }[] = [
  { value: "light", label: "Light", icon: Sun },
  { value: "dark", label: "Dark", icon: Moon },
  { value: "system", label: "System", icon: Laptop },
];

function applyTheme(theme: Theme) {
  const dark =
    theme === "dark" ||
    (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);
  document.documentElement.classList.toggle("dark", dark);
  document.documentElement.dataset.theme = theme;
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("system");

  useEffect(() => {
    const saved = localStorage.getItem("study-notes-theme");
    const initial: Theme = saved === "light" || saved === "dark" ? saved : "system";
    // localStorage is intentionally read after hydration to keep the server output deterministic.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTheme(initial);
    applyTheme(initial);

    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const listener = () => initial === "system" && applyTheme("system");
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, []);

  function selectTheme(nextTheme: Theme) {
    setTheme(nextTheme);
    localStorage.setItem("study-notes-theme", nextTheme);
    applyTheme(nextTheme);
  }

  return (
    <div className="theme-switch" data-active={theme} role="radiogroup" aria-label="Color theme">
      <span className="theme-switch-thumb" aria-hidden="true" />
      {themes.map((item) => {
        const Icon = item.icon;
        const checked = theme === item.value;
        return (
          <button
            key={item.value}
            type="button"
            role="radio"
            aria-checked={checked}
            aria-label={`${item.label} theme`}
            title={item.label}
            onClick={() => selectTheme(item.value)}
          >
            <Icon aria-hidden="true" size={14} />
          </button>
        );
      })}
    </div>
  );
}
