import { useEffect, useState } from "react";
import { Menu, X, Globe, Phone } from "lucide-react";
import { useLang } from "../i18n";
import type { PageKey } from "../App";

interface NavbarProps {
  page: PageKey;
  navigate: (p: PageKey) => void;
}

const links: { key: PageKey; labelKey: "home" | "products" | "services" | "videos" | "testimonials" }[] = [
  { key: "home", labelKey: "home" },
  { key: "products", labelKey: "products" },
  { key: "services", labelKey: "services" },
  { key: "videos", labelKey: "videos" },
  { key: "testimonials", labelKey: "testimonials" },
];

export default function Navbar({ page, navigate }: NavbarProps) {
  const { lang, setLang, t } = useLang();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (p: PageKey) => {
    setOpen(false);
    navigate(p);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* top strip */}
      <div className="hidden md:block bg-navy-950">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-8 text-[11px] tracking-wide text-steel-300">
          <span className="flex items-center gap-1.5">
            <Globe className="w-3 h-3 text-signal-500" />
            {t.common.offices} — {t.common.bilingual}
          </span>
          <a href="tel:16473720005" className="flex items-center gap-1.5 hover:text-white transition-colors">
            <Phone className="w-3 h-3 text-signal-500" />
            647-372-0005
          </a>
        </div>
      </div>

      {/* main bar — white, on brand with the logo */}
      <div
        className={`bg-white/95 backdrop-blur-md transition-shadow duration-300 ${
          scrolled || open ? "shadow-lg shadow-black/10" : "shadow-sm shadow-black/5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 sm:h-[72px]">
            {/* Logo */}
            <button onClick={() => go("home")} className="shrink-0" aria-label="D.T Flow Wrap Machines — home">
              <img
                src="/images/logo.png"
                alt="D.T Flow Wrap Machines — Pack anything beautifully"
                className="h-10 sm:h-12 w-auto"
              />
            </button>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {links.map((l) => (
                <button
                  key={l.key}
                  onClick={() => go(l.key)}
                  className={`px-3.5 py-2 text-sm font-medium rounded-md transition-colors ${
                    page === l.key
                      ? "text-signal-600 bg-signal-500/10"
                      : "text-navy-800 hover:text-signal-600 hover:bg-signal-500/5"
                  }`}
                >
                  {t.nav[l.labelKey]}
                </button>
              ))}
            </nav>

            <div className="flex items-center gap-2 sm:gap-3">
              {/* Language toggle */}
              <div
                className="flex items-center rounded-md border border-steel-300 overflow-hidden text-xs font-semibold"
                role="group"
                aria-label="Language / Langue"
              >
                <button
                  onClick={() => setLang("en")}
                  className={`px-2.5 py-1.5 transition-colors ${
                    lang === "en" ? "bg-signal-500 text-white" : "text-navy-800 hover:bg-cloud"
                  }`}
                >
                  EN
                </button>
                <button
                  onClick={() => setLang("fr")}
                  className={`px-2.5 py-1.5 transition-colors ${
                    lang === "fr" ? "bg-signal-500 text-white" : "text-navy-800 hover:bg-cloud"
                  }`}
                >
                  FR
                </button>
              </div>

              <button
                onClick={() => go("quote")}
                className="hidden sm:inline-flex items-center px-5 py-2.5 rounded-md bg-signal-500 text-white text-sm font-bold hover:bg-signal-600 transition-colors shadow-lg shadow-signal-500/30"
              >
                {t.nav.quote}
              </button>

              <button
                className="lg:hidden text-navy-900 p-2"
                onClick={() => setOpen(!open)}
                aria-label="Toggle menu"
              >
                {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="lg:hidden border-t border-steel-300/60 bg-white">
            <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
              {links.map((l) => (
                <button
                  key={l.key}
                  onClick={() => go(l.key)}
                  className={`text-left px-4 py-3 rounded-md text-base font-medium transition-colors ${
                    page === l.key
                      ? "text-signal-600 bg-signal-500/10"
                      : "text-navy-800 hover:bg-cloud"
                  }`}
                >
                  {t.nav[l.labelKey]}
                </button>
              ))}
              <button
                onClick={() => go("quote")}
                className="mt-2 px-4 py-3 rounded-md bg-signal-500 text-white font-bold text-left"
              >
                {t.nav.quote}
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
