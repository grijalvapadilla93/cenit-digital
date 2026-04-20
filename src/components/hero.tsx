"use client";

import { useLang } from "@/lib/lang-context";
import { Button } from "@/components/ui/button";

export function Hero() {
  const { t } = useLang();

  return (
    <section className="relative min-h-[921px] flex items-center px-4 md:px-8 overflow-hidden circuit-bg">
      <div className="max-w-screen-2xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Content */}
        <div className="lg:col-span-7 space-y-8">
          <div className="inline-block px-3 py-1 bg-surface-container-high rounded-full hero-fade-up" style={{ animationDelay: "0.1s" }}>
            <span className="text-primary font-[family-name:var(--font-space-grotesk)] text-xs uppercase tracking-widest">
              {t.hero.badge}
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-[family-name:var(--font-space-grotesk)] font-bold leading-tight tracking-tighter text-white hero-fade-up" style={{ animationDelay: "0.2s" }}>
            {t.hero.headlinePrefix}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-container">
              {t.hero.headlineGradient}
            </span>
          </h1>

          <p className="text-lg md:text-xl text-on-surface-variant max-w-2xl leading-relaxed hero-fade-up" style={{ animationDelay: "0.3s" }}>
            {t.hero.subtitle}
          </p>

          <div className="flex flex-wrap gap-4 pt-4 hero-fade-up" style={{ animationDelay: "0.4s" }}>
            <Button className="bg-primary text-on-primary px-4 md:px-8 py-6 font-[family-name:var(--font-space-grotesk)] font-bold text-lg hover:shadow-[0_0_20px_rgba(209,188,255,0.4)] transition-all hover:bg-primary/90 btn-press btn-shimmer">
              {t.hero.ctaPrimary}
            </Button>
            <a href="/casos">
              <Button
                variant="outline"
                className="border border-outline px-4 md:px-8 py-6 font-[family-name:var(--font-space-grotesk)] font-bold text-lg text-white hover:bg-surface-container-high transition-colors btn-press"
              >
                {t.hero.ctaSecondary}
              </Button>
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-6 pt-8 hero-fade-up" style={{ animationDelay: "0.5s" }}>
            {[
              "✓ Sitio web listo en 7 días",
              "✓ Automatización desde Q2,500",
              "✓ Soporte mientras lo necesites",
              "✓ Sin conocimientos técnicos",
            ].map((badge) => (
              <span
                key={badge}
                className="text-sm font-[family-name:var(--font-space-grotesk)] text-on-surface-variant"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>

        {/* Right — Floating 3D Logo */}
        <div className="lg:col-span-5 relative hidden lg:flex justify-center items-center hero-fade-up" style={{ animationDelay: "0.6s" }}>
          <div className="absolute w-80 h-80 bg-primary/10 rounded-full blur-[120px]" />
          <div className="logo-float-3d">
            <img
              src="/cenit-logo.png"
              alt="Cenit Digital"
              className="w-72 h-auto drop-shadow-[0_0_40px_rgba(109,67,198,0.3)]"
            />
          </div>
        </div>
      </div>

      {/* Hero animations */}
      <style>{`
        @keyframes heroFadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .hero-fade-up {
          opacity: 0;
          animation: heroFadeUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        @keyframes logoFloat3D {
          0%   { transform: perspective(800px) rotateY(-8deg) rotateX(5deg) translateY(0px); }
          25%  { transform: perspective(800px) rotateY(4deg)  rotateX(-3deg) translateY(-12px); }
          50%  { transform: perspective(800px) rotateY(8deg)  rotateX(-5deg) translateY(-6px); }
          75%  { transform: perspective(800px) rotateY(-4deg) rotateX(3deg) translateY(-14px); }
          100% { transform: perspective(800px) rotateY(-8deg) rotateX(5deg) translateY(0px); }
        }
        .logo-float-3d {
          animation: logoFloat3D 6s ease-in-out infinite;
          transform-style: preserve-3d;
        }
      `}</style>
    </section>
  );
}
