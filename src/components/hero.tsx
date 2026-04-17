"use client";

import { useLang } from "@/lib/lang-context";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/icon";

export function Hero() {
  const { t } = useLang();

  const heroCards = [
    { icon: "terminal", label: t.hero.cards.customLogic },
    { icon: "hub", label: t.hero.cards.uniqueFlows },
    { icon: "monitoring", label: t.hero.cards.nicheInsights },
    { icon: "token", label: t.hero.cards.privateTech },
  ];

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
            </span>{" "}
            {t.hero.headlineSuffix}
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
        </div>

        {/* Right Content — Icon Grid */}
        <div className="lg:col-span-5 relative hidden lg:block">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-[100px]" />
          <div className="relative z-10 p-8 bg-surface-container-low border border-outline-variant/15 rounded-xl shadow-2xl hero-fade-up" style={{ animationDelay: "0.5s" }}>
            <div className="grid grid-cols-2 gap-4">
              {heroCards.map((card) => (
                <div
                  key={card.icon}
                  className="h-32 bg-surface-container-high rounded-lg flex flex-col justify-center items-center p-4 border border-outline-variant/10 hover:border-primary/30 transition-all card-lift cursor-default"
                >
                  <Icon name={card.icon} className="text-primary text-3xl mb-2 icon-pulse" />
                  <span className="font-[family-name:var(--font-space-grotesk)] text-xs text-on-surface-variant uppercase tracking-tighter">
                    {card.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Hero entrance animations */}
      <style>{`
        @keyframes heroFadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .hero-fade-up {
          opacity: 0;
          animation: heroFadeUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
      `}</style>
    </section>
  );
}
