"use client";

import { useLang } from "@/lib/lang-context";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Icon } from "@/components/icon";
import { ScrollReveal } from "@/components/scroll-reveal";

export function Contact() {
  const { t } = useLang();
  const c = t.contact;

  const benefits = [
    { icon: "architecture", label: c.benefits.roadmap },
    { icon: "security", label: c.benefits.security },
    { icon: "verified_user", label: c.benefits.stability },
  ];

  return (
    <section className="py-24 px-4 md:px-8" id="contact">
      <ScrollReveal>
        <div className="max-w-5xl mx-auto bg-surface-container-high rounded-xl p-8 md:p-12 relative overflow-hidden border border-primary/20 shadow-[0_0_50px_rgba(109,67,198,0.15)]">
          {/* Decorative blobs */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 -mr-32 -mt-32 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 -ml-32 -mb-32 rounded-full blur-3xl" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left — copy */}
            <div>
              <h2 className="text-4xl font-[family-name:var(--font-space-grotesk)] font-bold text-white mb-6">
                {c.title}
              </h2>
              <p className="text-on-surface-variant text-lg mb-8 leading-relaxed">
                {c.subtitle}
              </p>
              <div className="space-y-6">
                {benefits.map((b) => (
                  <div key={b.icon} className="flex items-center gap-4 group">
                    <Icon name={b.icon} className="text-primary icon-pulse" />
                    <span className="text-sm font-[family-name:var(--font-space-grotesk)] text-white uppercase tracking-wider group-hover:text-primary transition-colors">
                      {b.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — form */}
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-[family-name:var(--font-space-grotesk)] text-primary uppercase tracking-widest mb-2">
                    {c.form.fullName}
                  </label>
                  <Input
                    placeholder={c.form.fullNamePlaceholder}
                    className="bg-surface-container-lowest border-outline-variant/30 text-white placeholder:text-on-surface-variant/50 focus:border-primary focus:ring-primary transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-[family-name:var(--font-space-grotesk)] text-primary uppercase tracking-widest mb-2">
                    {c.form.email}
                  </label>
                  <Input
                    type="email"
                    placeholder={c.form.emailPlaceholder}
                    className="bg-surface-container-lowest border-outline-variant/30 text-white placeholder:text-on-surface-variant/50 focus:border-primary focus:ring-primary transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-[family-name:var(--font-space-grotesk)] text-primary uppercase tracking-widest mb-2">
                  {c.form.company}
                </label>
                <Input
                  placeholder={c.form.companyPlaceholder}
                  className="bg-surface-container-lowest border-outline-variant/30 text-white placeholder:text-on-surface-variant/50 focus:border-primary focus:ring-primary transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-[family-name:var(--font-space-grotesk)] text-primary uppercase tracking-widest mb-2">
                  {c.form.details}
                </label>
                <Textarea
                  placeholder={c.form.detailsPlaceholder}
                  className="bg-surface-container-lowest border-outline-variant/30 text-white placeholder:text-on-surface-variant/50 focus:border-primary focus:ring-primary h-32 resize-none transition-colors"
                />
              </div>
              <Button className="w-full bg-primary text-on-primary py-6 font-[family-name:var(--font-space-grotesk)] font-bold text-lg hover:shadow-[0_0_20px_rgba(209,188,255,0.4)] transition-all flex items-center justify-center gap-2 hover:bg-primary/90 btn-press btn-shimmer">
                {c.form.submit} <Icon name="send" />
              </Button>
              <p className="text-[10px] text-center text-on-surface-variant font-[family-name:var(--font-space-grotesk)] uppercase tracking-widest mt-4">
                {c.form.note}
              </p>
            </form>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
