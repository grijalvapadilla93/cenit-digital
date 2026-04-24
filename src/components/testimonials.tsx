"use client";

import { useLang } from "@/lib/lang-context";
import { Icon } from "@/components/icon";
import { ScrollReveal } from "@/components/scroll-reveal";

export function Testimonials() {
  const { t } = useLang();

  return (
    <section className="py-24 px-4 md:px-8 bg-background relative overflow-hidden">
      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left sticky panel */}
        <ScrollReveal>
          <div className="lg:sticky lg:top-32 self-start">
            <h2 className="text-4xl md:text-6xl font-[family-name:var(--font-space-grotesk)] font-bold text-white leading-[1.1] tracking-tighter">
              {t.testimonials.headline}
            </h2>
            <div className="mt-8 h-1 w-24 bg-primary" />
            <p className="mt-8 text-on-surface-variant text-lg max-w-md">
              {t.testimonials.subtitle}
            </p>
            <div className="mt-12 flex items-center gap-4 text-primary font-[family-name:var(--font-space-grotesk)] text-sm uppercase tracking-widest">
              <Icon name="arrow_downward" />
              {t.testimonials.trusted || "Clientes reales"}
            </div>
          </div>
        </ScrollReveal>

        {/* Right testimonials */}
        <div className="space-y-6 flex flex-col items-center">
          {t.testimonials.items.map((testimonial, i) => (
            <ScrollReveal key={testimonial.company} stagger={(i + 1) as 1 | 2 | 3}>
              <div className="bg-surface-container-low p-8 rounded-xl border border-outline-variant/10 relative group hover:border-primary/30 transition-all duration-500 card-lift cursor-default w-full max-w-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
                <div className="relative z-10">
                  <div className="mb-8">
                    <span className="text-xs font-[family-name:var(--font-space-grotesk)] text-primary uppercase tracking-[0.3em]">
                      {testimonial.company}
                    </span>
                  </div>
                  <blockquote className="text-xl md:text-2xl text-white leading-relaxed mb-8 italic">
                    {testimonial.quote}
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center border border-outline-variant/20">
                      <Icon name="person" className="text-primary text-xl" />
                    </div>
                    <div>
                      <p className="text-white font-[family-name:var(--font-space-grotesk)] font-bold text-sm">
                        {testimonial.name}
                      </p>
                      <p className="text-xs text-on-surface-variant uppercase tracking-tighter">
                        {testimonial.role}
                      </p>
                    </div>
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
