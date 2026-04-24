"use client";

import { useState } from "react";
import { useLang } from "@/lib/lang-context";
import { Button } from "@/components/ui/button";
import SiteLayout from "@/components/site-layout";
import { ScrambleText } from "@/components/scramble-text";

const WHATSAPP_LINK = "https://wa.me/50200000000?text=Hola%20Cenit%20Digital,%20quiero%20algo%20así";

// ─── WEBSITES ───────────────────────────────────────────────────────────────
const websites = [
  {
    id: 1,
    title: "Al Carbón",
    subtitle: "Restaurante Premium",
    category: "Restaurante · Guatemala",
    description:
      "Sitio web diseñado para convertir visitantes en reservaciones. Menú digital interactivo, sistema de reservas integrado y botón de WhatsApp visible en todo momento. Diseño oscuro y elegante.",
    result: "Reservaciones directas desde la web",
    image: "/casos/al-carbon/hero.jpeg",
  },
  {
    id: 2,
    title: "Yeguada 10",
    subtitle: "Restaurante & Academia Ecuestre",
    category: "Restaurante & Ecuestre · Guatemala",
    description:
      "Web completa para complejo que incluye restaurante, bar y academia ecuestre. Galería de eventos, caballos, academia y sistema de contacto directo. Diseño premium con animaciones de scroll.",
    result: "Reservas semanales desde el sitio",
    image: "/casos/yeguada10/hero.jpeg",
  },
  {
    id: 3,
    title: "Alejandro Requena",
    subtitle: "Portfolio Artístico & Academia",
    category: "Arte & Educación · Guatemala",
    description:
      "Portfolio profesional para artista visual. Galería de obras, información de la academia Art Requena, testimonios y contacto directo. Diseño elegante con parallax.",
    result: "Estudiantes nuevos desde Google",
    image: "/casos/alejandro-requena/hero.jpeg",
  },
];

// ─── CHATBOTS ───────────────────────────────────────────────────────────────
const chatbots = [
  {
    id: 4,
    title: "Asistente de Restaurante",
    subtitle: "Reservas por WhatsApp 24/7",
    category: "IA · Restaurante",
    result: "0 mensajes sin responder",
    convo: [
      { from: "user", text: "Hola, ¿tienen mesa para 4 personas hoy a las 8?" },
      { from: "bot", text: "¡Hola! Sí, tenemos disponible. ¿A nombre de quién la reservo?" },
      { from: "user", text: "Carlos Pérez" },
      { from: "bot", text: "Listo, Carlos. Mesa para 4 hoy a las 8 PM. ¿Necesitan silla para niño?" },
    ],
  },
  {
    id: 5,
    title: "Asistente de Clínica Dental",
    subtitle: "Agendamiento automático",
    category: "IA · Salud",
    result: "85% de llamadas automatizadas",
    convo: [
      { from: "user", text: "Quiero agendar una limpieza" },
      { from: "bot", text: "Claro. ¿Qué día te queda mejor: martes o jueves?" },
      { from: "user", text: "Martes" },
      { from: "bot", text: "Perfecto. Tengo a las 10 AM y 3 PM. ¿Cuál prefieres?" },
    ],
  },
  {
    id: 6,
    title: "Chatbot de Tienda Online",
    subtitle: "Ventas por WhatsApp",
    category: "IA · E-commerce",
    result: "Ventas a medianoche sin intervención",
    convo: [
      { from: "user", text: "¿Tienen la camisa negra en talla M?" },
      { from: "bot", text: "Sí, tenemos 3 disponibles. Q250. ¿Te envío el link de pago?" },
      { from: "user", text: "Sí porfa" },
      { from: "bot", text: "Aquí está: [link]. Una vez pagado, te confirmo envío en 24h." },
    ],
  },
];

// ─── AUTOMATIZATIONS ────────────────────────────────────────────────────────
const automations = [
  {
    id: 7,
    title: "Sistema de Pedidos",
    subtitle: "Restaurante → Cocina → Cliente",
    category: "Automatización · Restaurante",
    result: "-40% en errores de pedido",
    steps: [
      { icon: "chat", label: "Pedido por WhatsApp" },
      { icon: "auto_fix", label: "Auto-procesado" },
      { icon: "print", label: "Ticket en cocina" },
      { icon: "timer", label: "Tiempo estimado" },
      { icon: "check_circle", label: "Cliente notificado" },
    ],
  },
  {
    id: 8,
    title: "Seguimiento de Leads",
    subtitle: "Nadie se queda sin respuesta",
    category: "Automatización · Ventas",
    result: "0 leads perdidos",
    steps: [
      { icon: "person_add", label: "Nuevo contacto" },
      { icon: "send", label: "WhatsApp de bienvenida" },
      { icon: "schedule", label: "Recordatorio día 3" },
      { icon: "schedule_send", label: "Oferta día 7" },
      { icon: "handshake", label: "Vendedor toma el relevo" },
    ],
  },
  {
    id: 9,
    title: "Recordatorios Automáticos",
    subtitle: "Citas, pagos, cumpleaños",
    category: "Automatización · Servicios",
    result: "-60% en no-shows",
    steps: [
      { icon: "event", label: "Cita agendada" },
      { icon: "notifications", label: "Recordatorio 24h" },
      { icon: "payments", label: "Aviso de pago" },
      { icon: "cake", label: "Felicitación cumpleaños" },
      { icon: "done_all", label: "Todo automático" },
    ],
  },
];

// ─── DASHBOARDS ─────────────────────────────────────────────────────────────
const dashboards = [
  {
    id: 10,
    title: "Panel de Ventas",
    subtitle: "Todo en una pantalla",
    category: "Dashboard · Retail",
    result: "Decisiones basadas en datos",
    metrics: [
      { label: "Ventas hoy", value: "Q3,240", change: "+12%" },
      { label: "Semana", value: "Q18,500", change: "+8%" },
      { label: "Producto top", value: "Pizza Margarita", change: "" },
      { label: "Ticket promedio", value: "Q85", change: "+5%" },
    ],
  },
  {
    id: 11,
    title: "Panel de Reservas",
    subtitle: "Ocupación y agenda",
    category: "Dashboard · Restaurante",
    result: "Optimización de personal",
    metrics: [
      { label: "Mesas ocupadas", value: "18/24", change: "75%" },
      { label: "Reservas hoy", value: "32", change: "+4" },
      { label: "No-shows", value: "2", change: "-50%" },
      { label: "Horario pico", value: "8-10 PM", change: "" },
    ],
  },
  {
    id: 12,
    title: "Panel de Marketing",
    subtitle: "¿De dónde vienen tus clientes?",
    category: "Dashboard · Marketing",
    result: "+30% en eficiencia publicitaria",
    metrics: [
      { label: "Instagram", value: "42 leads", change: "Q12/lead" },
      { label: "Google", value: "28 leads", change: "Q8/lead" },
      { label: "Boca a boca", value: "15 leads", change: "Q0/lead" },
      { label: "ROI mensual", value: "340%", change: "+22%" },
    ],
  },
];

// ─── ICON ───────────────────────────────────────────────────────────────────
function MIcon({ name }: { name: string }) {
  return (
    <span
      className="material-symbols-outlined"
      style={{ fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24" }}
    >
      {name}
    </span>
  );
}

// ─── SECTION HEADERS ────────────────────────────────────────────────────────
function SectionHeader({
  badge,
  title,
  subtitle,
}: {
  badge: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="mb-12">
      <span className="text-primary font-[family-name:var(--font-space-grotesk)] text-sm uppercase tracking-[0.2em] block mb-4">
        {badge}
      </span>
      <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-space-grotesk)] font-bold text-white max-w-2xl">
        {title}
      </h2>
      <p className="text-on-surface-variant mt-4 max-w-xl">{subtitle}</p>
    </div>
  );
}

// ─── PHONE CHAT MOCKUP ──────────────────────────────────────────────────────
function PhoneMockup({ convo }: { convo: Array<{ from: "user" | "bot"; text: string }> }) {
  return (
    <div className="relative mx-auto w-full max-w-[280px]">
      <div className="bg-surface-container-high rounded-[2rem] p-3 border-2 border-outline-variant/20 shadow-2xl">
        <div className="bg-surface rounded-[1.5rem] overflow-hidden">
          {/* Notch */}
          <div className="h-6 bg-surface-container-high flex items-center justify-center">
            <div className="w-16 h-1 bg-outline-variant/30 rounded-full" />
          </div>
          {/* Chat area */}
          <div className="p-3 space-y-2 max-h-[240px] overflow-hidden">
            {convo.map((msg, i) => (
              <div key={i} className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[85%] px-3 py-2 rounded-2xl text-xs leading-relaxed ${
                    msg.from === "user"
                      ? "bg-primary text-on-primary rounded-br-sm"
                      : "bg-surface-container-high text-on-surface rounded-bl-sm"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── FLOW DIAGRAM ───────────────────────────────────────────────────────────
function FlowDiagram({ steps }: { steps: Array<{ icon: string; label: string }> }) {
  return (
    <div className="flex flex-wrap items-center gap-2 md:gap-0 justify-center">
      {steps.map((step, i) => (
        <div key={i} className="flex items-center">
          <div className="flex flex-col items-center gap-2 bg-surface-container p-4 rounded-lg border border-outline-variant/10 min-w-[100px]">
            <MIcon name={step.icon} />
            <span className="text-[10px] uppercase tracking-wider text-on-surface-variant text-center leading-tight">
              {step.label}
            </span>
          </div>
          {i < steps.length - 1 && (
            <div className="hidden md:flex items-center px-2">
              <MIcon name="arrow_forward" />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

// ─── METRICS GRID ───────────────────────────────────────────────────────────
function MetricsGrid({
  metrics,
}: {
  metrics: Array<{ label: string; value: string; change: string }>;
}) {
  return (
    <div className="grid grid-cols-2 gap-3">
      {metrics.map((m, i) => (
        <div
          key={i}
          className="bg-surface-container p-4 rounded-lg border border-outline-variant/10"
        >
          <div className="text-on-surface-variant text-[10px] uppercase tracking-wider mb-1">
            {m.label}
          </div>
          <div className="text-white text-lg font-bold font-[family-name:var(--font-space-grotesk)]">
            {m.value}
          </div>
          {m.change && (
            <div className="text-primary text-[10px] mt-1">{m.change}</div>
          )}
        </div>
      ))}
    </div>
  );
}

// ─── MAIN PAGE ──────────────────────────────────────────────────────────────
export default function CasosPage() {
  const { t, lang } = useLang();
  const c = t.casos;
  const [heroReady, setHeroReady] = useState(false);

  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden px-8 py-20 lg:py-32 circuit-bg">
        <div
          className="absolute bottom-0 left-0 w-full h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(147,51,234,0.5) 50%, transparent)",
          }}
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
            <p
              className={`mt-8 text-on-surface-variant text-lg md:text-xl max-w-2xl font-light leading-relaxed transition-opacity duration-500 ${
                heroReady ? "opacity-100" : "opacity-0"
              }`}
            >
              {c.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* ─── WEBSITES ─── */}
      <section className="px-8 py-20 max-w-[1440px] mx-auto border-t border-outline-variant/10">
        <SectionHeader
          badge={lang === "es" ? "PÁGINAS WEB" : "WEBSITES"}
          title={lang === "es" ? "Sitios que convierten visitas en clientes" : "Sites that convert visitors into customers"}
          subtitle={lang === "es" ? "Diseño premium, carga rápida y optimizados para celular desde el primer día." : "Premium design, fast loading, mobile-first from day one."}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {websites.map((project, index) => (
            <div
              key={project.id}
              className={`group relative flex flex-col gap-6 bg-surface-container-low p-8 ring-1 ring-outline-variant/10 hover:ring-primary/20 card-lift cursor-default ${
                index === 0 ? "md:col-span-2" : ""
              }`}
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-sm">
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low/80 to-transparent" />
                <div className="absolute top-4 left-4 bg-primary px-3 py-1 text-on-primary font-[family-name:var(--font-space-grotesk)] text-[10px] uppercase font-bold tracking-tighter">
                  {project.result}
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div>
                  <h3 className="font-[family-name:var(--font-space-grotesk)] text-3xl font-bold tracking-tight text-white">
                    {project.title}
                  </h3>
                  <p className="text-on-surface-variant text-sm mt-1">{project.subtitle}</p>
                </div>
                <div className="font-[family-name:var(--font-space-grotesk)] text-primary text-xs uppercase tracking-[0.2rem]">
                  {project.category}
                </div>
                <p className="text-on-surface-variant text-sm font-light leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── CHATBOTS ─── */}
      <section className="px-8 py-20 max-w-[1440px] mx-auto border-t border-outline-variant/10">
        <SectionHeader
          badge={lang === "es" ? "CHATBOTS E IA" : "CHATBOTS & AI"}
          title={lang === "es" ? "Conversaciones que venden mientras dormís" : "Conversations that sell while you sleep"}
          subtitle={lang === "es" ? "No es un robot frío. Es un asistente que entiende tu negocio y habla como vos." : "Not a cold robot. An assistant that understands your business and speaks like you."}
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {chatbots.map((bot) => (
            <div
              key={bot.id}
              className="bg-surface-container-low p-8 ring-1 ring-outline-variant/10 hover:ring-primary/20 card-lift flex flex-col gap-6"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl font-bold text-white">
                    {bot.title}
                  </h3>
                  <p className="text-on-surface-variant text-sm mt-1">{bot.subtitle}</p>
                </div>
                <span className="bg-primary/10 text-primary text-[10px] uppercase tracking-wider px-2 py-1 rounded">
                  {bot.category}
                </span>
              </div>
              <PhoneMockup convo={bot.convo} />
              <div className="pt-4 border-t border-outline-variant/10">
                <div className="flex items-center gap-2 text-primary text-sm font-[family-name:var(--font-space-grotesk)]">
                  <MIcon name="trending_up" />
                  {bot.result}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── AUTOMATIONS ─── */}
      <section className="px-8 py-20 max-w-[1440px] mx-auto border-t border-outline-variant/10">
        <SectionHeader
          badge={lang === "es" ? "AUTOMATIZACIONES" : "AUTOMATIONS"}
          title={lang === "es" ? "Flujos que corren solos para que vos no corras" : "Flows that run on their own so you don't have to"}
          subtitle={lang === "es" ? "Conectamos tus herramientas y eliminamos el trabajo repetitivo." : "We connect your tools and eliminate repetitive work."}
        />
        <div className="space-y-12">
          {automations.map((auto) => (
            <div
              key={auto.id}
              className="bg-surface-container-low p-8 md:p-12 ring-1 ring-outline-variant/10 hover:ring-primary/20 card-lift"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
                <div>
                  <h3 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold text-white">
                    {auto.title}
                  </h3>
                  <p className="text-on-surface-variant text-sm mt-1">{auto.subtitle}</p>
                </div>
                <span className="text-primary text-sm font-[family-name:var(--font-space-grotesk)] whitespace-nowrap">
                  {auto.result}
                </span>
              </div>
              <FlowDiagram steps={auto.steps} />
            </div>
          ))}
        </div>
      </section>

      {/* ─── DASHBOARDS ─── */}
      <section className="px-8 py-20 max-w-[1440px] mx-auto border-t border-outline-variant/10">
        <SectionHeader
          badge={lang === "es" ? "DASHBOARDS" : "DASHBOARDS"}
          title={lang === "es" ? "Tus números, claros y al instante" : "Your numbers, clear and instant"}
          subtitle={lang === "es" ? "Sin abrir 5 apps. Sin Excel. Sin adivinar." : "No 5 apps. No Excel. No guessing."}
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {dashboards.map((dash) => (
            <div
              key={dash.id}
              className="bg-surface-container-low p-8 ring-1 ring-outline-variant/10 hover:ring-primary/20 card-lift flex flex-col gap-6"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl font-bold text-white">
                    {dash.title}
                  </h3>
                  <p className="text-on-surface-variant text-sm mt-1">{dash.subtitle}</p>
                </div>
              </div>
              <MetricsGrid metrics={dash.metrics} />
              <div className="pt-4 border-t border-outline-variant/10 flex justify-between items-center">
                <span className="text-on-surface-variant text-[10px] uppercase tracking-wider">
                  {dash.category}
                </span>
                <span className="text-primary text-xs font-[family-name:var(--font-space-grotesk)]">
                  {dash.result}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-8 py-32 bg-surface-container-lowest border-t border-outline-variant/10">
        <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center gap-8">
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-4xl md:text-6xl font-bold tracking-tighter">
            {c.cta.headlinePrefix} <br />
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
