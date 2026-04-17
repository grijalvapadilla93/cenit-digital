"use client";

import { useState } from "react";
import { useLang } from "@/lib/lang-context";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/icon";
import Image from "next/image";

export default function CasosPage() {
  const { t } = useLang();
  const c = t.casos;
  const [activeFilter, setActiveFilter] = useState(0);

  const filters = [
    c.filters.all,
    c.filters.web,
    c.filters.automation,
    c.filters.dashboards,
    c.filters.ai,
  ];

  // Real portfolio projects
  const portfolioProjects = [
    {
      id: 1,
      title: "Alejandro Requena",
      subtitle: "Portfolio Artístico",
      category: "Web · Portafolio · Guatemala",
      description: "Portfolio profesional para artista visual de Jalapa. Incluye galería de obras, información sobre la academia Art Requena, testimonios y contacto. Diseño elegante con efectos de parallax y animaciones sutiles.",
      metric: "Sitio completo",
      progress: 100,
      gradient: "from-amber-900/60 via-orange-900/40 to-yellow-900/60",
      tag: "Portafolio",
      url: "https://alejandro-requena.vercel.app/",
      images: [
        "/casos/alejandro-requena/hero.png",
        "/casos/alejandro-requena/hero.png",
        "/casos/alejandro-requena/hero.png",
        "/casos/alejandro-requena/hero.png"
      ]
    },
    {
      id: 2,
      title: "Al Carbón",
      subtitle: "Restaurante Premium",
      category: "Web · Restaurante · Guatemala",
      description: "Sitio web para restaurante de cortes premium. Incluye menú digital interactivo, sistema de reservaciones, galería de fotos, eventos especiales y botón de WhatsApp para pedidos. Diseño oscuro y elegante.",
      metric: "Menú + Reservas",
      progress: 100,
      gradient: "from-red-900/60 via-rose-900/40 to-pink-900/60",
      tag: "Restaurante",
      url: "https://al-carbon.vercel.app/",
      images: [
        "/casos/al-carbon/hero.png",
        "/casos/al-carbon/hero.png",
        "/casos/al-carbon/hero.png",
        "/casos/al-carbon/hero.png"
      ]
    },
    {
      id: 3,
      title: "Yeguada 10",
      subtitle: "Restaurante & Academia Ecuestre",
      category: "Web · Restaurante · Ecuestre · Guatemala",
      description: "Sitio web para complejo que incluye restaurante, bar y academia ecuestre. Muestra eventos, caballos, academia, galería de fotos y sistema de contacto. Diseño premium con animaciones de scroll.",
      metric: "Sitio completo",
      progress: 100,
      gradient: "from-yellow-900/60 via-amber-900/40 to-orange-900/60",
      tag: "Restaurante & Ecuestre",
      url: "https://yeguada10.vercel.app/",
      images: [
        "/casos/yeguada10/hero.png",
        "/casos/yeguada10/hero.png",
        "/casos/yeguada10/hero.png",
        "/casos/yeguada10/hero.png"
      ]
    }
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden px-8 py-20 lg:py-32 circuit-bg">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col items-start gap-4 page-enter" style={{ animationDelay: "0.1s" }}>
            <span className="font-[family-name:var(--font-space-grotesk)] text-primary text-xs uppercase tracking-[0.2rem] border-l-2 border-primary pl-4">
              {c.badge}
            </span>
            <h1 className="font-[family-name:var(--font-space-grotesk)] text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-none max-w-4xl">
              {c.headlinePrefix}{" "}
              <span className="text-outline/50">{c.headlineGradient}</span>
            </h1>
            <p className="mt-8 text-on-surface-variant text-lg md:text-xl max-w-2xl font-light leading-relaxed">
              {c.subtitle}
            </p>
          </div>
        </div>
        <div className="absolute right-0 top-0 w-1/3 h-full opacity-10 pointer-events-none border-l border-outline-variant/15" />
      </section>

      {/* Filter Bar */}
      <section className="bg-surface border-y border-outline-variant/15">
        <div className="max-w-[1440px] mx-auto px-8 py-6 flex flex-wrap items-center gap-4">
          {filters.map((label, i) => (
            <button
              key={label}
              onClick={() => setActiveFilter(i)}
              className={`px-6 py-2 font-[family-name:var(--font-space-grotesk)] text-xs uppercase tracking-widest transition-all btn-press ${
                activeFilter === i
                  ? "bg-primary text-on-primary"
                  : "bg-surface-container-high text-on-surface-variant hover:text-primary"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="px-8 py-20 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {portfolioProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative flex flex-col gap-6 bg-surface-container-low p-8 transition-all hover:bg-surface-container-high ring-1 ring-outline-variant/10 hover:ring-primary/20 card-lift cursor-default page-enter ${
                index === 0 ? "md:col-span-2" : ""
              }`}
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
            <div className={`relative aspect-[16/10] overflow-hidden rounded-sm`}>
                <div className="relative overflow-hidden rounded-sm h-full">
                  <img
                    src={project.images[0]}
                    alt={`${project.title} preview`}
                    className="w-full h-full object-cover transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low/80 to-transparent" />
                </div>
                <div className="absolute top-4 left-4 bg-primary px-3 py-1 text-on-primary font-[family-name:var(--font-space-grotesk)] text-[10px] uppercase font-bold tracking-tighter">
                  {project.tag}
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-start">
                  <h3 className="font-[family-name:var(--font-space-grotesk)] text-3xl font-bold tracking-tight text-white">
                    {project.title}
                  </h3>
                  <span className="font-[family-name:var(--font-space-grotesk)] text-primary text-xl font-bold">
                    {project.metric}
                  </span>
                </div>
                <div className="font-[family-name:var(--font-space-grotesk)] text-primary text-xs uppercase tracking-[0.2rem]">
                  {project.category}
                </div>
                <p className="text-on-surface-variant text-sm font-light leading-relaxed">
                  {project.description}
                </p>
                <div className="mt-4 pt-6 border-t border-outline-variant/10 flex justify-between items-center">
                  <div className="flex gap-4">
                    {["web", "palette", "smartphone"].map((icon) => (
                      <Icon key={icon} name={icon} className="text-outline text-lg icon-pulse" />
                    ))}
                  </div>
                  <a 
                    href={project.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary font-[family-name:var(--font-space-grotesk)] text-xs uppercase tracking-widest border-b border-primary pb-1 group-hover:pr-4 transition-all link-underline cursor-pointer"
                  >
                    Ver sitio →
                  </a>
                </div>
              </div>
              {/* Decorative */}
              <div className="absolute -right-12 top-1/2 -rotate-90 font-[family-name:var(--font-space-grotesk)] text-[120px] font-black text-white/[0.02] pointer-events-none select-none">
                {project.subtitle.split(" ")[0].toUpperCase()}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-8 py-32 bg-surface-container-lowest border-t border-outline-variant/10">
        <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center gap-8 page-enter" style={{ animationDelay: "0.7s" }}>
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-4xl md:text-6xl font-bold tracking-tighter">
            {c.cta.headlinePrefix}{" "}
            <br />
            <span className="text-primary italic">{c.cta.headlineGradient}</span>
          </h2>
          <p className="text-on-surface-variant text-lg max-w-xl font-light">
            {c.cta.subtitle}
          </p>
          <div className="flex gap-6 mt-4">
            <a href="/#contact">
              <Button className="bg-primary text-on-primary px-10 py-6 font-[family-name:var(--font-space-grotesk)] text-sm uppercase tracking-[0.2rem] font-bold hover:bg-primary/90 btn-press btn-shimmer">
                {c.cta.primary}
              </Button>
            </a>
            <a href="/">
              <Button
                variant="outline"
                className="border border-outline px-10 py-6 font-[family-name:var(--font-space-grotesk)] text-sm uppercase tracking-[0.2rem] font-bold text-white hover:bg-surface-container-high btn-press"
              >
                {c.cta.secondary}
              </Button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
