"use client";

import { useState } from "react";
import { useLang } from "@/lib/lang-context";
import { Button } from "@/components/ui/button";
import SiteLayout from "@/components/site-layout";
import { ScrambleText } from "@/components/scramble-text";

const WHATSAPP_LINK = "https://wa.me/50200000000?text=Hola%20Cenit%20Digital,%20quiero%20algo%20así";

type TabKey = "websites" | "chatbots" | "automations" | "dashboards";

const portfolioProjects: Record<TabKey, Array<{
  id: number;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  result: string;
  url: string;
  image: string;
}>> = {
  websites: [
    {
      id: 1,
      title: "Al Carbón",
      subtitle: "Restaurante Premium",
      category: "Restaurante · Guatemala",
      description: "Sitio web diseñado para convertir visitantes en reservaciones. Menú digital interactivo, sistema de reservas integrado y botón de WhatsApp visible en todo momento.",
      result: "Reservaciones directas desde la web",
      url: "https://al-carbon.vercel.app/",
      image: "/casos/al-carbon/hero.jpeg",
    },
    {
      id: 2,
      title: "Yeguada 10",
      subtitle: "Restaurante & Academia Ecuestre",
      category: "Restaurante & Ecuestre · Guatemala",
      description: "Web completa para complejo que incluye restaurante, bar y academia ecuestre. Galería de eventos, caballos, academia y sistema de contacto directo.",
      result: "Reservas semanales desde el sitio",
      url: "https://yeguada10.vercel.app/",
      image: "/casos/yeguada10/hero.jpeg",
    },
    {
      id: 3,
      title: "Alejandro Requena",
      subtitle: "Portfolio Artístico & Academia",
      category: "Arte & Educación · Guatemala",
      description: "Portfolio profesional para artista visual. Galería de obras, información de la academia Art Requena, testimonios y contacto directo. Diseño elegante con parallax.",
      result: "Estudiantes nuevos desde Google",
      url: "https://alejandro-requena.vercel.app/",
      image: "/casos/alejandro-requena/hero.jpeg",
    },
  ],
  chatbots: [
    {
      id: 4,
      title: "Asistente de Restaurante",
      subtitle: "Chatbot 24/7 para reservas",
      category: "IA · Chatbot · Guatemala",
      description: "Chatbot que responde WhatsApp e Instagram al instante. Agenda citas, responde preguntas sobre el menú, horarios y precios. Nunca más un mensaje sin respuesta.",
      result: "Respuesta instantánea 24/7",
      url: "/ai",
      image: "/casos/al-carbon/hero.jpeg",
    },
    {
      id: 5,
      title: "Asistente de Clínica",
      subtitle: "Agendamiento automático",
      category: "IA · Salud · Guatemala",
      description: "Sistema de IA que agenda citas, responde preguntas frecuentes y deriva emergencias. Integración directa con calendario del negocio. El dueño solo revisa confirmaciones.",
      result: "85% de llamadas automatizadas",
      url: "/ai",
      image: "/casos/yeguada10/hero.jpeg",
    },
  ],
  automations: [
    {
      id: 6,
      title: "Sistema de Pedidos",
      subtitle: "Automatización de restaurante",
      category: "Automatización · Restaurante · Guatemala",
      description: "Pedidos de WhatsApp se convierten automáticamente en órdenes para cocina. Notificaciones al cliente, seguimiento de estado y resumen diario para el dueño. Todo sin intervención manual.",
      result: "-40% en errores de pedido",
      url: "/ai",
      image: "/casos/al-carbon/hero.jpeg",
    },
    {
      id: 7,
      title: "Seguimiento de Leads",
      subtitle: "CRM automático",
      category: "Automatización · Ventas · Guatemala",
      description: "Cada lead que contacta por cualquier canal entra automáticamente al sistema. Recibe seguimiento por WhatsApp, recordatorios y notificaciones al vendedor solo cuando el lead está calificado.",
      result: "0 leads perdidos por falta de seguimiento",
      url: "/ai",
      image: "/casos/alejandro-requena/hero.jpeg",
    },
  ],
  dashboards: [
    {
      id: 8,
      title: "Panel de Ventas",
      subtitle: "Dashboard de rendimiento",
      category: "Dashboard · Retail · Guatemala",
      description: "Panel en tiempo real que muestra ventas del día, semana y mes. Comparativas, productos más vendidos, horarios pico y tendencias. El dueño ve todo desde su celular en 30 segundos.",
      result: "Decisiones basadas en datos, no en intuición",
      url: WHATSAPP_LINK,
      image: "/casos/al-carbon/hero.jpeg",
    },
    {
      id: 9,
      title: "Panel de Reservas",
      subtitle: "Agenda y ocupación",
      category: "Dashboard · Restaurante · Guatemala",
      description: "Visualización de mesas ocupadas, reservas del día, cancelaciones y no-shows. Predicción de ocupación para la semana. El dueño sabe cuánto personal necesita antes de abrir.",
      result: "Optimización de personal y recursos",
      url: WHATSAPP_LINK,
      image: "/casos/yeguada10/hero.jpeg",
    },
  ],
};

export default function CasosPage() {
  const { t, lang } = useLang();
  const c = t.casos;
  const p = t.portfolio;
  const [heroReady, setHeroReady] = useState(false);
  const [activeTab, setActiveTab] = useState<TabKey>("websites");

  const tabs: { key: TabKey; label: string }[] = [
    { key: "websites", label: p.tabs.websites },
    { key: "chatbots", label: p.tabs.chatbots },
    { key: "automations", label: p.tabs.automations },
    { key: "dashboards", label: p.tabs.dashboards },
  ];

  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative overflow-hidden px-8 py-20 lg:py-32 circuit-bg">
        <div
          className="absolute bottom-0 left-0 w-full h-px"
          style={{ background: "linear-gradient(90deg, transparent, rgba(147,51,234,0.5) 50%, transparent)" }}
        />
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col items-start gap-4">
            <span className="font-[family-name:var(--font-space-grotesk)] text-primary text-xs uppercase tracking-[0.2rem] border-l-2 border-primary pl-4">
              {c.badge}
            </span>
            <h1 className="font-[family-name:var(--font-space-grotesk)] text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-none max-w-4xl">
              <ScrambleText text={c.headlinePrefix} duration={400} className="block" />
              <ScrambleText
                text={c.headlineGradient}
                duration={400}
                delay={300}
                className="block text-outline/50"
                onComplete={() => setHeroReady(true)}
              />
            </h1>
            <p className={`mt-8 text-on-surface-variant text-lg md:text-xl max-w-2xl font-light leading-relaxed transition-opacity duration-500 ${heroReady ? "opacity-100" : "opacity-0"}`}>
              {c.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="bg-surface border-y border-outline-variant/15 sticky top-[72px] z-30">
        <div className="max-w-[1440px] mx-auto px-8 py-4 flex flex-wrap items-center gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-6 py-2 font-[family-name:var(--font-space-grotesk)] text-xs uppercase tracking-widest transition-all btn-press ${
                activeTab === tab.key
                  ? "bg-primary text-on-primary"
                  : "bg-surface-container-high text-on-surface-variant hover:text-primary"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-8 py-20 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {portfolioProjects[activeTab].map((project, index) => (
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
                    src={project.image}
                    alt={`${project.title} preview`}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low/80 to-transparent" />
                </div>
                <div className="absolute top-4 left-4 bg-primary px-3 py-1 text-on-primary font-[family-name:var(--font-space-grotesk)] text-[10px] uppercase font-bold tracking-tighter">
                  {project.result}
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-[family-name:var(--font-space-grotesk)] text-3xl font-bold tracking-tight text-white">
                      {project.title}
                    </h3>
                    <p className="text-on-surface-variant text-sm mt-1">{project.subtitle}</p>
                  </div>
                </div>
                <div className="font-[family-name:var(--font-space-grotesk)] text-primary text-xs uppercase tracking-[0.2rem]">
                  {project.category}
                </div>
                <p className="text-on-surface-variant text-sm font-light leading-relaxed">
                  {project.description}
                </p>
                <div className="mt-4 pt-6 border-t border-outline-variant/10 flex justify-between items-center">
                  <span className="text-xs text-on-surface-variant font-[family-name:var(--font-space-grotesk)] uppercase tracking-widest">
                    {lang === "es" ? "Resultado:" : "Result:"} {project.result}
                  </span>
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary font-[family-name:var(--font-space-grotesk)] text-xs uppercase tracking-widest border-b border-primary pb-1 group-hover:pr-4 transition-all link-underline cursor-pointer"
                  >
                    {p.cta}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-8 py-32 bg-surface-container-lowest border-t border-outline-variant/10">
        <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center gap-8">
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-4xl md:text-6xl font-bold tracking-tighter">
            {c.cta.headlinePrefix}{" "}
            <br />
            <span className="text-primary italic">{c.cta.headlineGradient}</span>
          </h2>
          <p className="text-on-surface-variant text-lg max-w-xl font-light">
            {c.cta.subtitle}
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-4">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <Button className="bg-primary text-on-primary px-6 sm:px-10 py-6 font-[family-name:var(--font-space-grotesk)] text-xs sm:text-sm uppercase tracking-[0.1rem] sm:tracking-[0.2rem] font-bold hover:bg-primary/90 btn-press btn-shimmer">
                {c.cta.primary}
              </Button>
            </a>
            <a href="/">
              <Button
                variant="outline"
                className="border border-outline px-6 sm:px-10 py-6 font-[family-name:var(--font-space-grotesk)] text-xs sm:text-sm uppercase tracking-[0.1rem] sm:tracking-[0.2rem] font-bold text-white hover:bg-surface-container-high btn-press"
              >
                {c.cta.secondary}
              </Button>
            </a>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
