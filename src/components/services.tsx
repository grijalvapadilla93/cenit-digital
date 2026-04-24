"use client";

import { useLang } from "@/lib/lang-context";
import { Icon } from "@/components/icon";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Button } from "@/components/ui/button";

const WHATSAPP_LINK = "https://wa.me/50200000000?text=Hola%20Cenit%20Digital,%20quiero%20mi%20diagnóstico%20gratis";

export function Services() {
  const { t } = useLang();
  const s = t.services;

  const services = [
    { key: "web" as const, icon: "web" },
    { key: "ai" as const, icon: "smart_toy" },
    { key: "automation" as const, icon: "settings_suggest" },
    { key: "dashboards" as const, icon: "dashboard" },
    { key: "custom" as const, icon: "code_blocks" },
  ];

  return (
    <section className="py-24 px-4 md:px-8 bg-surface-dim relative overflow-hidden">
      <div className="max-w-screen-2xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-primary font-[family-name:var(--font-space-grotesk)] text-sm uppercase tracking-[0.2em] block mb-4">
              {s.badge}
            </span>
            <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-space-grotesk)] font-bold text-white max-w-3xl mx-auto">
              {s.title}
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((svc, i) => {
            const item = s.items[svc.key];
            return (
              <ScrollReveal key={svc.key} stagger={(i + 1) as 1 | 2 | 3 | 4 | 5}>
                <div className="bg-surface-container-low p-8 rounded-lg border border-outline-variant/10 card-lift cursor-default h-full flex flex-col">
                  <div className="flex justify-between items-start mb-8">
                    <Icon name={svc.icon} className="text-4xl text-primary icon-pulse" />
                    <span className="text-[10px] font-[family-name:var(--font-space-grotesk)] text-primary uppercase tracking-[0.2em] border border-primary/30 px-3 py-1 rounded-full">
                      {item.tag}
                    </span>
                  </div>
                  <h3 className="text-2xl font-[family-name:var(--font-space-grotesk)] font-bold text-white mb-4">
                    {item.title}
                  </h3>
                  <p className="text-on-surface-variant leading-relaxed mb-6 flex-grow">
                    {item.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {item.features.map((feat, fi) => (
                      <li key={fi} className="flex items-start gap-3 text-sm text-on-surface-variant">
                        <span className="text-primary mt-0.5">✓</span>
                        {feat}
                      </li>
                    ))}
                  </ul>
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="block">
                    <Button className="w-full bg-primary text-on-primary py-5 font-[family-name:var(--font-space-grotesk)] font-bold uppercase tracking-widest text-xs hover:bg-primary/90 btn-press btn-shimmer">
                      Quiero esto →
                    </Button>
                  </a>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
