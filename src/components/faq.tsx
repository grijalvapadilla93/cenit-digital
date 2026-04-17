"use client";

import { useState } from "react";
import { useLang } from "@/lib/lang-context";
import { Icon } from "@/components/icon";
import { ScrollReveal } from "@/components/scroll-reveal";

export function Faq() {
  const { t } = useLang();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 px-4 md:px-8 bg-surface-container-lowest">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-primary font-[family-name:var(--font-space-grotesk)] text-sm uppercase tracking-[0.2em] block mb-4">
              {t.faq.badge}
            </span>
            <h2 className="text-4xl font-[family-name:var(--font-space-grotesk)] font-bold text-white">
              {t.faq.title}
            </h2>
          </div>
        </ScrollReveal>

        <div className="space-y-4">
          {t.faq.items.map((faq, i) => (
            <ScrollReveal key={i} stagger={(i + 1) as 1 | 2 | 3 | 4}>
              <div
                className={`accordion-item bg-surface-container-low border border-outline-variant/10 rounded-lg overflow-hidden card-lift cursor-default ${openIndex === i ? "active" : ""}`}
              >
                <button
                  className="w-full px-4 md:px-8 py-6 flex justify-between items-center text-left transition-colors hover:bg-surface-container-high"
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                >
                  <span className="text-lg font-[family-name:var(--font-space-grotesk)] font-medium text-white">
                    {faq.question}
                  </span>
                  <Icon
                    name="expand_more"
                    className="accordion-icon transition-transform text-primary"
                  />
                </button>
                <div className="accordion-content">
                  <div className="px-4 md:px-8 pb-6 text-on-surface-variant leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
