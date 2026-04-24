"use client";

import { useLang } from "@/lib/lang-context";

const WHATSAPP_LINK = "https://wa.me/50200000000?text=Hola%20Cenit%20Digital";

export function Footer() {
  const { t } = useLang();

  return (
    <footer className="bg-[#0E0E0E] w-full border-t border-white/5">
      <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-8 py-12 w-full max-w-screen-2xl mx-auto">
        {/* Brand */}
        <div className="mb-8 md:mb-0 flex flex-col items-center md:items-start gap-4">
          <img src="/cenit-logo.png" alt="Cenit Digital" className="h-8 w-auto opacity-90" />
          <p className="text-white/40 text-[10px] font-[family-name:var(--font-space-grotesk)] uppercase tracking-[0.1rem]">
            {t.footer.copyright}
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-8 justify-center">
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-white/40 text-[10px] uppercase tracking-[0.1rem] font-[family-name:var(--font-space-grotesk)] hover:text-primary transition-colors link-underline">
            WhatsApp
          </a>
          <a href="/casos" className="text-white/40 text-[10px] uppercase tracking-[0.1rem] font-[family-name:var(--font-space-grotesk)] hover:text-primary transition-colors link-underline">
            {t.nav.portfolio}
          </a>
          <span className="text-white/40 text-[10px] uppercase tracking-[0.1rem] font-[family-name:var(--font-space-grotesk)]">
            {t.footer.privacy}
          </span>
          <span className="text-white/40 text-[10px] uppercase tracking-[0.1rem] font-[family-name:var(--font-space-grotesk)]">
            {t.footer.terms}
          </span>
        </div>
      </div>
    </footer>
  );
}
