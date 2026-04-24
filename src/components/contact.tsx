"use client";

import { useLang } from "@/lib/lang-context";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/scroll-reveal";

const WHATSAPP_LINK = "https://wa.me/50200000000?text=Hola%20Cenit%20Digital,%20quiero%20mi%20diagnóstico%20gratis";

export function Contact() {
  const { t } = useLang();
  const c = t.contact;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement)?.value || "";
    const business = (form.elements.namedItem("business") as HTMLInputElement)?.value || "";
    const phone = (form.elements.namedItem("phone") as HTMLInputElement)?.value || "";
    const msg = `Hola Cenit Digital, soy ${name} de ${business}. Mi WhatsApp es ${phone}. Quiero mi diagnóstico gratis.`;
    const url = `https://wa.me/50200000000?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
  };

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
              <span className="text-primary font-[family-name:var(--font-space-grotesk)] text-sm uppercase tracking-[0.2em] block mb-4">
                {c.badge}
              </span>
              <h2 className="text-4xl font-[family-name:var(--font-space-grotesk)] font-bold text-white mb-6">
                {c.title}
              </h2>
              <p className="text-on-surface-variant text-lg mb-8 leading-relaxed">
                {c.subtitle}
              </p>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mb-4"
              >
                <Button className="bg-green-600 text-white px-8 py-6 font-[family-name:var(--font-space-grotesk)] font-bold text-lg hover:bg-green-700 btn-press btn-shimmer flex items-center gap-3">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  {c.cta}
                </Button>
              </a>
              <p className="text-xs text-on-surface-variant font-[family-name:var(--font-space-grotesk)] uppercase tracking-widest">
                {c.ctaNote}
              </p>
            </div>

            {/* Right — form */}
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-xs font-[family-name:var(--font-space-grotesk)] text-primary uppercase tracking-widest mb-2">
                  {c.form.name}
                </label>
                <input
                  name="name"
                  required
                  placeholder={c.form.namePlaceholder}
                  className="w-full bg-surface-container-lowest border border-outline-variant/30 text-white placeholder:text-on-surface-variant/50 focus:border-primary focus:ring-1 focus:ring-primary rounded-md px-4 py-3 transition-colors outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-[family-name:var(--font-space-grotesk)] text-primary uppercase tracking-widest mb-2">
                  {c.form.business}
                </label>
                <input
                  name="business"
                  required
                  placeholder={c.form.businessPlaceholder}
                  className="w-full bg-surface-container-lowest border border-outline-variant/30 text-white placeholder:text-on-surface-variant/50 focus:border-primary focus:ring-1 focus:ring-primary rounded-md px-4 py-3 transition-colors outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-[family-name:var(--font-space-grotesk)] text-primary uppercase tracking-widest mb-2">
                  {c.form.phone}
                </label>
                <input
                  name="phone"
                  required
                  placeholder={c.form.phonePlaceholder}
                  className="w-full bg-surface-container-lowest border border-outline-variant/30 text-white placeholder:text-on-surface-variant/50 focus:border-primary focus:ring-1 focus:ring-primary rounded-md px-4 py-3 transition-colors outline-none"
                />
              </div>
              <Button type="submit" className="w-full bg-primary text-on-primary py-6 font-[family-name:var(--font-space-grotesk)] font-bold text-lg hover:shadow-[0_0_20px_rgba(209,188,255,0.4)] transition-all flex items-center justify-center gap-2 hover:bg-primary/90 btn-press btn-shimmer">
                {c.form.submit}
              </Button>
            </form>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
