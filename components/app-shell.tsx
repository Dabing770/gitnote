"use client";

import { useEffect, useState, type ReactNode } from "react";
import { Menu, X } from "lucide-react";
import type { NavigationNode, NoteSummary } from "@/types/notes";
import { Sidebar } from "@/components/sidebar";

export function AppShell({
  nodes,
  notes,
  children,
}: {
  nodes: NavigationNode[];
  notes: NoteSummary[];
  children: ReactNode;
}) {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <div className="app-shell">
      <aside className="desktop-sidebar">
        <Sidebar nodes={nodes} notes={notes} />
      </aside>
      <header className="mobile-header">
        <button type="button" onClick={() => setMobileOpen(true)} aria-label="Open navigation">
          <Menu size={20} />
        </button>
        <strong>Study Notes</strong>
      </header>
      {mobileOpen && (
        <div className="mobile-drawer-backdrop" onMouseDown={() => setMobileOpen(false)}>
          <aside className="mobile-drawer" onMouseDown={(event) => event.stopPropagation()}>
            <button
              className="drawer-close"
              type="button"
              onClick={() => setMobileOpen(false)}
              aria-label="Close navigation"
            >
              <X size={20} />
            </button>
            <Sidebar nodes={nodes} notes={notes} onNavigate={() => setMobileOpen(false)} />
          </aside>
        </div>
      )}
      <main className="main-content">{children}</main>
    </div>
  );
}
