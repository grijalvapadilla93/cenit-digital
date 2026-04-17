"use client";

import { useLang } from "@/lib/lang-context";
import { ScrollReveal } from "@/components/scroll-reveal";

export function Process() {
  const { t } = useLang();

  return (
    <section className="py-24 px-4 md:px-8 bg-surface-dim relative overflow-hidden">
      <div className="max-w-screen-2xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-20">
            <span className="text-primary font-[family-name:var(--font-space-grotesk)] text-sm uppercase tracking-[0.2em] block mb-4">
              {t.process.badge}
            </span>
            <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-space-grotesk)] font-bold text-white">
              {t.process.title}
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-0 border border-outline-variant/15 rounded-xl overflow-hidden">
          {t.process.steps.map((step, i) => (
            <ScrollReveal key={step.number} stagger={(i + 1) as 1 | 2 | 3 | 4}>
              <div
                className={`p-8 hover:bg-surface-container-low transition-colors cursor-default ${
                  i < 3
                    ? "border-r border-b md:border-b-0 border-outline-variant/15"
                    : ""
                }`}
              >
                <span className="text-4xl font-[family-name:var(--font-space-grotesk)] font-black text-primary/20 mb-6 block">
                  {step.number}
                </span>
                <h4 className="text-xl font-[family-name:var(--font-space-grotesk)] font-bold text-white mb-4">
                  {step.title}
                </h4>
                <p className="text-on-surface-variant text-sm">{step.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
