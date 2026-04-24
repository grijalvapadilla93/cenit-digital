"use client";
import { useState } from "react";
import { useLang } from "@/lib/lang-context";
import { Button } from "@/components/ui/button";

const WHATSAPP_LINK = "https://wa.me/50200000000?text=Hola%20Cenit%20Digital,%20quiero%20mi%20diagnóstico%20gratis";

export function Navbar() {
  const { t, lang, toggleLang } = useLang();
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-[#131313]/60 backdrop-blur-xl">
        <div className="flex justify-between items-center px-4 md:px-8 py-4 max-w-screen-2xl mx-auto">
          <a href="/" className="flex items-center gap-3">
            <img src="/cenit-logo.png" alt="Cenit Digital" className="h-7 w-auto" />
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex gap-8 items-center">
            <a href="/casos" className="text-white/70 hover:text-white transition-colors font-[family-name:var(--font-space-grotesk)] tracking-tight link-underline">
              {t.nav.portfolio}
            </a>
            <button onClick={() => scrollTo("process")} className="text-white/70 hover:text-white transition-colors font-[family-name:var(--font-space-grotesk)] tracking-tight link-underline bg-transparent border-none cursor-pointer">
              {t.nav.process}
            </button>
            <button onClick={() => scrollTo("pricing")} className="text-white/70 hover:text-white transition-colors font-[family-name:var(--font-space-grotesk)] tracking-tight link-underline bg-transparent border-none cursor-pointer">
              {t.nav.pricing}
            </button>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={toggleLang}
              className="px-3 py-1.5 rounded-full border border-white/20 text-xs font-[family-name:var(--font-space-grotesk)] font-bold uppercase tracking-widest text-white/70 hover:text-white hover:border-purple-400/50 transition-all btn-press"
            >
              {lang === "en" ? "ES" : "EN"}
            </button>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <Button className="bg-primary text-on-primary px-6 py-2 font-[family-name:var(--font-space-grotesk)] font-bold hover:bg-primary/90 btn-press transition-all">
                {t.nav.consultation}
              </Button>
            </a>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 cursor-pointer bg-transparent border-none p-2"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            <span className={`block w-6 h-[2px] bg-purple-400 transition-all duration-300 ${open ? "rotate-45 translate-y-[5.5px]" : ""}`} />
            <span className={`block w-6 h-[2px] bg-purple-400 transition-all duration-300 ${open ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-[2px] bg-purple-400 transition-all duration-300 ${open ? "-rotate-45 -translate-y-[5.5px]" : ""}`} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`fixed inset-0 z-40 bg-[#0a0a0a]/95 backdrop-blur-xl flex flex-col items-center justify-center gap-6 transition-opacity duration-300 md:hidden ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
        <a href="/" onClick={() => setOpen(false)} className="text-2xl font-bold text-white hover:text-purple-400 transition-colors font-[family-name:var(--font-space-grotesk)]" style={{ transform: open ? "translateY(0)" : "translateY(20px)", opacity: open ? 1 : 0, transition: "all 0.4s cubic-bezier(0.22, 1, 0.36, 1) 0ms" }}>
          {t.nav.home}
        </a>
        <a href="/casos" onClick={() => setOpen(false)} className="text-2xl font-bold text-white hover:text-purple-400 transition-colors font-[family-name:var(--font-space-grotesk)]" style={{ transform: open ? "translateY(0)" : "translateY(20px)", opacity: open ? 1 : 0, transition: "all 0.4s cubic-bezier(0.22, 1, 0.36, 1) 100ms" }}>
          {t.nav.portfolio}
        </a>
        <button onClick={() => scrollTo("process")} className="text-2xl font-bold text-white hover:text-purple-400 transition-colors font-[family-name:var(--font-space-grotesk)] bg-transparent border-none" style={{ transform: open ? "translateY(0)" : "translateY(20px)", opacity: open ? 1 : 0, transition: "all 0.4s cubic-bezier(0.22, 1, 0.36, 1) 200ms" }}>
          {t.nav.process}
        </button>
        <button onClick={() => scrollTo("pricing")} className="text-2xl font-bold text-white hover:text-purple-400 transition-colors font-[family-name:var(--font-space-grotesk)] bg-transparent border-none" style={{ transform: open ? "translateY(0)" : "translateY(20px)", opacity: open ? 1 : 0, transition: "all 0.4s cubic-bezier(0.22, 1, 0.36, 1) 300ms" }}>
          {t.nav.pricing}
        </button>

        <div className="flex items-center gap-4 mt-8">
          <button onClick={toggleLang} className="px-4 py-2 rounded-full border border-white/20 text-sm font-[family-name:var(--font-space-grotesk)] font-bold uppercase tracking-widest text-white/70 hover:text-white transition-all btn-press">
            {lang === "en" ? "ES" : "EN"}
          </button>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
            <Button className="bg-primary text-on-primary px-8 py-3 font-[family-name:var(--font-space-grotesk)] font-bold hover:bg-primary/90 btn-press transition-all">
              {t.nav.consultation}
            </Button>
          </a>
        </div>
      </div>
    </>
  );
}
