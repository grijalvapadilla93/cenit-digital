"use client";

import { useLang } from "@/lib/lang-context";
import { ScrollReveal } from "@/components/scroll-reveal";

export function Stats() {
  const { t } = useLang();

  return (
    <section className="py-20 px-4 md:px-8 bg-surface-container-lowest">
      <div className="max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {t.stats.items.map((stat, i) => (
            <ScrollReveal key={stat.label} stagger={(i + 1) as 1 | 2 | 3 | 4}>
              <div className="stat-number revealed" style={{ animationDelay: `${i * 0.12}s` }}>
                <div className="text-4xl md:text-5xl font-[family-name:var(--font-space-grotesk)] font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-xs font-[family-name:var(--font-space-grotesk)] text-outline uppercase tracking-widest">
                  {stat.label}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
