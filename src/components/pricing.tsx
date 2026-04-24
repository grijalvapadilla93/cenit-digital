"use client";

import { useLang } from "@/lib/lang-context";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Button } from "@/components/ui/button";

const WHATSAPP_LINK = "https://wa.me/50200000000?text=Hola%20Cenit%20Digital,%20quiero%20mi%20diagnóstico%20gratis";

export function Pricing() {
  const { t } = useLang();
  const p = t.pricing;

  return (
    <section className="py-24 px-4 md:px-8 bg-surface-container-lowest" id="pricing">
      <div className="max-w-screen-2xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-6">
            <span className="text-primary font-[family-name:var(--font-space-grotesk)] text-sm uppercase tracking-[0.2em] block mb-4">
              {p.badge}
            </span>
            <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-space-grotesk)] font-bold text-white max-w-3xl mx-auto">
              {p.title}
            </h2>
            <p className="text-on-surface-variant text-lg mt-4 max-w-xl mx-auto">
              {p.subtitle}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {p.tiers.map((tier, i) => (
            <ScrollReveal key={tier.name} stagger={(i + 1) as 1 | 2 | 3}>
              <div
                className={`relative rounded-xl p-8 flex flex-col h-full ${
                  tier.popular
                    ? "bg-primary/10 border-2 border-primary"
                    : "bg-surface-container-low border border-outline-variant/10"
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-on-primary text-[10px] font-[family-name:var(--font-space-grotesk)] uppercase tracking-widest px-4 py-1 rounded-full font-bold">
                    Más popular
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="text-xl font-[family-name:var(--font-space-grotesk)] font-bold text-white mb-2">
                    {tier.name}
                  </h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-[family-name:var(--font-space-grotesk)] font-bold text-primary">
                      {tier.price}
                    </span>
                  </div>
                  <p className="text-sm text-on-surface-variant mt-2">{tier.desc}</p>
                </div>

                <ul className="space-y-3 mb-8 flex-grow">
                  {tier.features.map((feat, fi) => (
                    <li key={fi} className="flex items-start gap-3 text-sm text-on-surface-variant">
                      <span className="text-primary mt-0.5 shrink-0">✓</span>
                      {feat}
                    </li>
                  ))}
                </ul>

                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="block">
                  <Button
                    className={`w-full py-5 font-[family-name:var(--font-space-grotesk)] font-bold uppercase tracking-widest text-xs btn-press ${
                      tier.popular
                        ? "bg-primary text-on-primary hover:bg-primary/90 btn-shimmer"
                        : "border border-outline text-white hover:bg-surface-container-high"
                    }`}
                  >
                    {tier.cta}
                  </Button>
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <p className="text-center text-xs text-on-surface-variant mt-8 font-[family-name:var(--font-space-grotesk)] uppercase tracking-widest">
          {p.note}
        </p>
      </div>
    </section>
  );
}
