"use client";

import { useLang } from "@/lib/lang-context";

export function Footer() {
  const { t } = useLang();

  const footerLinks = [
    { label: t.footer.privacy, href: "#" },
    { label: t.footer.terms, href: "#" },
    { label: "LinkedIn", href: "#" },
    { label: "Instagram", href: "#" },
    { label: "Facebook", href: "#" },
  ];

  return (
    <footer className="bg-[#0E0E0E] w-full border-t border-white/5">
      <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-8 py-12 w-full max-w-screen-2xl mx-auto">
        {/* Brand */}
        <div className="mb-8 md:mb-0 flex flex-col items-center md:items-start gap-4">
          <img
            src="/cenit-logo.png"
            alt="Cenit Digital"
            className="h-8 w-auto opacity-90"
          />
          <p className="text-white/40 text-[10px] font-[family-name:var(--font-space-grotesk)] uppercase tracking-[0.1rem]">
            {t.footer.copyright}
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-8 justify-center">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-white/40 text-[10px] uppercase tracking-[0.1rem] font-[family-name:var(--font-space-grotesk)] hover:text-primary transition-colors link-underline"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
