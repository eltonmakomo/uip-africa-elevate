import { useEffect, useState } from "react";

const nav = [
  { label: "About", href: "#about" },
  { label: "Disciplines", href: "#disciplines" },
  { label: "Markets", href: "#markets" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Insights", href: "#insights" },
];

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
      className={`fixed inset-x-0 top-0 z-50 text-foreground transition-all duration-500 ${
        scrolled
          ? "border-b border-border bg-background/90 backdrop-blur-xl"
          : "border-b border-transparent bg-background"
      }`}
    >
      <div className="shell flex h-20 items-center justify-between gap-6">
        <a href="#top" className="flex items-center gap-3">
          <img src="/images/uip-mark.png" alt="UIP Africa" className="h-9 w-auto" />
          <span className="hidden text-sm font-semibold tracking-tight sm:block">
            UIP Africa
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="link-underline text-sm font-medium text-foreground/75 hover:text-foreground"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden items-center gap-2 bg-primary px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-primary-foreground transition-colors hover:bg-accent sm:inline-flex"
          >
            Talk to an engineer
          </a>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-11 w-11 items-center justify-center border border-border lg:hidden"
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
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="shell flex flex-col py-4">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="border-b border-border/60 py-4 font-display text-2xl"
              >
                {n.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-5 bg-primary px-5 py-4 text-center text-xs font-semibold uppercase tracking-[0.16em] text-primary-foreground"
            >
              Talk to an engineer
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
