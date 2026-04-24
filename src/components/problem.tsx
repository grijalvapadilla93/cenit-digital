"use client";

import { useLang } from "@/lib/lang-context";
import { ScrollReveal } from "@/components/scroll-reveal";

export function Problem() {
  const { t } = useLang();
  const p = t.problem;

  return (
    <section className="py-24 px-4 md:px-8 bg-surface-container-lowest">
      <div className="max-w-screen-2xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-primary font-[family-name:var(--font-space-grotesk)] text-sm uppercase tracking-[0.2em] block mb-4">
              {p.badge}
            </span>
            <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-space-grotesk)] font-bold text-white max-w-3xl mx-auto">
              {p.title}
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {p.cards.map((card, i) => (
            <ScrollReveal key={i} stagger={(i + 1) as 1 | 2 | 3}>
              <div className="bg-surface-container-low p-8 rounded-lg border border-outline-variant/10 card-lift cursor-default text-center">
                <div className="text-5xl mb-4">{card.icon}</div>
                <div className="text-5xl font-[family-name:var(--font-space-grotesk)] font-bold text-primary mb-2">
                  {card.stat}
                </div>
                <div className="text-sm font-[family-name:var(--font-space-grotesk)] text-white uppercase tracking-widest mb-4">
                  {card.label}
                </div>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
