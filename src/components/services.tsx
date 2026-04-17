"use client";

import { useLang } from "@/lib/lang-context";
import { Icon } from "@/components/icon";
import { ScrollReveal } from "@/components/scroll-reveal";

export function Services() {
  const { t } = useLang();
  const s = t.services;

  return (
    <section className="py-24 px-4 md:px-8 bg-surface-container-lowest">
      <div className="max-w-screen-2xl mx-auto">
        <ScrollReveal>
          <div className="mb-16">
            <span className="text-primary font-[family-name:var(--font-space-grotesk)] text-sm uppercase tracking-[0.2em] block mb-4">
              {s.badge}
            </span>
            <h2 className="text-4xl font-[family-name:var(--font-space-grotesk)] font-bold text-white">
              {s.title}
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Row 1: Automations (2-col) + Dashboard (1-col) */}
          <ScrollReveal className="md:col-span-2" stagger={1}>
            <div className="bg-surface-container-low p-8 rounded-lg group hover:bg-surface-container-high transition-colors card-lift cursor-default">
              <div className="flex justify-between items-start mb-12">
                <Icon name="settings_suggest" className="text-4xl text-primary icon-pulse" />
                <span className="text-xs font-[family-name:var(--font-space-grotesk)] text-outline uppercase tracking-widest">
                  {s.items.automations.label}
                </span>
              </div>
              <h3 className="text-2xl font-[family-name:var(--font-space-grotesk)] font-bold text-white mb-4">
                {s.items.automations.title}
              </h3>
              <p className="text-on-surface-variant max-w-md leading-relaxed">
                {s.items.automations.description}
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal stagger={2}>
            <div className="bg-surface-container-low p-8 rounded-lg group hover:bg-surface-container-high transition-colors card-lift cursor-default h-full">
              <div className="flex justify-between items-start mb-12">
                <Icon name="dashboard" className="text-4xl text-primary icon-pulse" />
                <span className="text-xs font-[family-name:var(--font-space-grotesk)] text-outline uppercase tracking-widest">
                  {s.items.dashboards.label}
                </span>
              </div>
              <h3 className="text-2xl font-[family-name:var(--font-space-grotesk)] font-bold text-white mb-4">
                {s.items.dashboards.title}
              </h3>
              <p className="text-on-surface-variant leading-relaxed">
                {s.items.dashboards.description}
              </p>
            </div>
          </ScrollReveal>

          {/* Row 2: CRM (1-col) + Web+AI (2-col) */}
          <ScrollReveal stagger={1}>
            <div className="bg-surface-container-low p-8 rounded-lg group hover:bg-surface-container-high transition-colors card-lift cursor-default h-full">
              <div className="flex justify-between items-start mb-12">
                <Icon name="diversity_3" className="text-4xl text-primary icon-pulse" />
                <span className="text-xs font-[family-name:var(--font-space-grotesk)] text-outline uppercase tracking-widest">
                  {s.items.crm.label}
                </span>
              </div>
              <h3 className="text-2xl font-[family-name:var(--font-space-grotesk)] font-bold text-white mb-4">
                {s.items.crm.title}
              </h3>
              <p className="text-on-surface-variant leading-relaxed">
                {s.items.crm.description}
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal className="md:col-span-2" stagger={2}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-surface-container-low p-8 rounded-lg group hover:bg-surface-container-high transition-colors card-lift cursor-default">
                <div className="flex justify-between items-start mb-12">
                  <Icon name="code_blocks" className="text-4xl text-primary icon-pulse" />
                </div>
                <h3 className="text-xl font-[family-name:var(--font-space-grotesk)] font-bold text-white mb-3">
                  {s.items.web.title}
                </h3>
                <p className="text-sm text-on-surface-variant">
                  {s.items.web.description}
                </p>
              </div>
              <div className="bg-surface-container-low p-8 rounded-lg group hover:bg-surface-container-high transition-colors card-lift cursor-default">
                <div className="flex justify-between items-start mb-12">
                  <Icon name="smart_toy" className="text-4xl text-primary icon-pulse" />
                </div>
                <h3 className="text-xl font-[family-name:var(--font-space-grotesk)] font-bold text-white mb-3">
                  {s.items.ai.title}
                </h3>
                <p className="text-sm text-on-surface-variant">
                  {s.items.ai.description}
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
