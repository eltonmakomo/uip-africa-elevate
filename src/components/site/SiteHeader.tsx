import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";

const nav = [
  { label: "About", to: "/about" },
  { label: "Expertise", to: "/expertise" },
  { label: "Disciplines", to: "/disciplines" },
  { label: "Markets", to: "/markets" },
  { label: "Services", to: "/services" },
  { label: "Projects", to: "/projects" },
  { label: "People", to: "/people" },
  { label: "Insights", to: "/insights" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 glass-header text-foreground transition-all duration-300 ${
        scrolled ? "border-b border-border shadow-sm" : "border-b border-border/50"
      }`}
    >
      <div className="shell flex h-20 items-center justify-between gap-6">
        <Link to="/" className="flex items-center" aria-label="UIP Africa Home">
          <img
            src="/uip-logo.png"
            alt="UIP Africa - Urban Infrastructure Projects Africa"
            className="h-10 sm:h-12 w-auto object-contain"
          />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeProps={{ className: "text-foreground" }}
              className="link-underline text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="hidden items-center gap-2 bg-primary px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-primary-foreground transition-colors hover:bg-accent sm:inline-flex"
          >
            Talk to an engineer
          </Link>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-11 w-11 items-center justify-center border border-border bg-background/90 lg:hidden"
          >
            <span className="relative block h-3 w-5">
              <span
                className={`absolute left-0 block h-px w-5 bg-current transition-transform duration-300 ${open ? "top-1.5 rotate-45" : "top-0"}`}
              />
              <span
                className={`absolute left-0 block h-px w-5 bg-current transition-transform duration-300 ${open ? "top-1.5 -rotate-45" : "top-3"}`}
              />
            </span>
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-border/70 glass-header shadow-lg lg:hidden">
          <nav className="shell flex flex-col py-4">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="border-b border-border/50 py-4 font-display text-2xl transition-colors hover:text-accent"
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-5 bg-primary px-5 py-4 text-center text-xs font-semibold uppercase tracking-[0.16em] text-primary-foreground transition-colors hover:bg-accent"
            >
              Talk to an engineer
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
