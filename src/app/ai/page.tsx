"use client";

import { useState, useEffect } from "react";
import SiteLayout from "@/components/site-layout";
import { ChatDemo } from "@/components/chat-demo";
import { NotificationPanel } from "@/components/notification-panel";
import { ScrambleText } from "@/components/scramble-text";

export default function AIDemoPage() {
  const [heroReady, setHeroReady] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative min-h-[80vh] flex flex-col items-center justify-center text-center px-6 pt-24 pb-16 overflow-hidden">
        {/* Radial gradient top-right */}
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none"
          style={{
            background: "radial-gradient(circle at center, rgba(147,51,234,0.10) 0%, transparent 70%)",
          }}
        />
        {/* Bottom gradient line */}
        <div
          className="absolute bottom-0 left-0 w-full h-px"
          style={{
            background: "linear-gradient(90deg, transparent, rgba(147,51,234,0.5) 50%, transparent)",
          }}
        />

        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-container/10 border border-primary-container/20 text-primary text-sm mb-8 font-[family-name:var(--font-space-grotesk)]">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Automatización con IA
          </div>
          <h1 className="font-[family-name:var(--font-space-grotesk)] text-4xl md:text-6xl font-bold text-white max-w-3xl leading-tight tracking-tighter">
            <ScrambleText
              text="Tu negocio pierde clientes"
              duration={400}
              className="block"
            />
            <ScrambleText
              text="cada minuto."
              duration={400}
              delay={300}
              className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-container"
              onComplete={() => setHeroReady(true)}
            />
          </h1>
          <p className={`mt-6 text-lg text-on-surface-variant max-w-xl leading-relaxed transition-opacity duration-500 ${heroReady ? "opacity-100" : "opacity-0"}`}>
            La mayoría de negocios responden mensajes con horas de retraso. Cada
            mensaje sin respuesta es un cliente que se va con la competencia.
            Nosotros lo resolvemos.
          </p>
        </div>
      </section>

      {/* The Problem */}
      <section className="px-6 py-20 max-w-5xl mx-auto">
        <span className="text-primary text-sm font-[family-name:var(--font-space-grotesk)] font-medium uppercase tracking-[0.2em] block mb-4">
          El problema
        </span>
        <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl md:text-4xl font-bold text-white tracking-tighter mb-12">
          Así se ve un negocio sin automatización
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="rounded-lg border border-outline-variant/15 bg-surface-container-low p-6 card-lift cursor-default">
            <div className="text-4xl mb-4">📱</div>
            <h3 className="text-lg font-[family-name:var(--font-space-grotesk)] font-semibold text-white mb-2">
              30+ mensajes diarios
            </h3>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              WhatsApp, Instagram, Facebook — todos piden respuesta y el dueño
              no da abasto.
            </p>
          </div>
          <div className="rounded-lg border border-outline-variant/15 bg-surface-container-low p-6 card-lift cursor-default">
            <div className="text-4xl mb-4">⏰</div>
            <h3 className="text-lg font-[family-name:var(--font-space-grotesk)] font-semibold text-white mb-2">
              1-3 horas de retraso
            </h3>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              El promedio de respuesta. Para cuando contestás, el cliente ya
              eligió otro lugar.
            </p>
          </div>
          <div className="rounded-lg border border-outline-variant/15 bg-surface-container-low p-6 card-lift cursor-default">
            <div className="text-4xl mb-4">💸</div>
            <h3 className="text-lg font-[family-name:var(--font-space-grotesk)] font-semibold text-white mb-2">
              40% de leads perdidos
            </h3>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              Casi la mitad de las reservaciones y pedidos se pierden por falta
              de respuesta.
            </p>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="px-6 py-20 max-w-5xl mx-auto">
        <span className="text-primary text-sm font-[family-name:var(--font-space-grotesk)] font-medium uppercase tracking-[0.2em] block mb-4">
          La solución
        </span>
        <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl md:text-4xl font-bold text-white tracking-tighter mb-12">
          Mientras vos dormís, el sistema está respondiendo clientes
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              icon: "🤖",
              title: "Responde WhatsApp, Instagram y tu web al instante",
              desc: "Nunca más un mensaje sin respuesta. El sistema atiende 24/7.",
            },
            {
              icon: "📅",
              title: "Confirma reservas solo, sin que vos intervengas",
              desc: "Agenda automática sincronizada con Google Calendar.",
            },
            {
              icon: "🔔",
              title: "Te avisa solo cuando un cliente necesita atención humana",
              desc: "Ves solo lo importante. El sistema filtra el ruido.",
            },
            {
              icon: "📊",
              title: "Sabés cuántos mensajes entraron y cuántos se convirtieron",
              desc: "Datos reales de tu negocio, no suposiciones.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="flex gap-4 rounded-lg border border-outline-variant/15 bg-surface-container-low p-6 card-lift cursor-default"
            >
              <div className="text-3xl">{item.icon}</div>
              <div>
                <h3 className="text-lg font-[family-name:var(--font-space-grotesk)] font-semibold text-white mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Live Notifications */}
      <section className="px-6 py-20 max-w-3xl mx-auto">
        <span className="text-primary text-sm font-[family-name:var(--font-space-grotesk)] font-medium uppercase tracking-[0.2em] mb-4 text-center block">
          En tiempo real
        </span>
        <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl md:text-4xl font-bold text-white tracking-tighter mb-4 text-center">
          Así se ve cuando el sistema trabaja por vos
        </h2>
        <p className="text-on-surface-variant text-center mb-10 max-w-lg mx-auto">
          Cada mensaje que llega es procesado al instante. Vos solo ves las
          notificaciones importantes.
        </p>
        <NotificationPanel />
      </section>

      {/* Case Study */}
      <section className="px-6 py-20 max-w-5xl mx-auto">
        <span className="text-primary text-sm font-[family-name:var(--font-space-grotesk)] font-medium uppercase tracking-[0.2em] block mb-4">
          Caso real
        </span>
        <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl md:text-4xl font-bold text-white tracking-tighter mb-4">
          Restaurante La Fuga — Jalapa
        </h2>
        <p className="text-on-surface-variant mb-12 max-w-2xl">
          2 semanas después de activar el sistema: +85% en reservas confirmadas · Q0 en costo de personal adicional
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Before */}
          <div className="rounded-lg border border-red-500/20 bg-red-500/5 p-8">
            <h3 className="text-lg font-[family-name:var(--font-space-grotesk)] font-semibold text-red-400 mb-6">
              Antes
            </h3>
            <ul className="space-y-4 text-sm text-on-surface-variant">
              <li className="flex gap-3">
                <span className="text-red-400 mt-0.5">✕</span>
                <span>30+ mensajes sin responder diariamente</span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-400 mt-0.5">✕</span>
                <span>Respuesta promedio: 2 horas</span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-400 mt-0.5">✕</span>
                <span>40% de reservaciones perdidas</span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-400 mt-0.5">✕</span>
                <span>Sin sistema de agenda</span>
              </li>
            </ul>
          </div>

          {/* After */}
          <div className="rounded-lg border border-green-500/20 bg-green-500/5 p-8">
            <h3 className="text-lg font-[family-name:var(--font-space-grotesk)] font-semibold text-green-400 mb-6">
              Después
            </h3>
            <ul className="space-y-4 text-sm text-on-surface-variant">
              <li className="flex gap-3">
                <span className="text-green-400 mt-0.5">✓</span>
                <span>Respuesta instantánea, 24/7</span>
              </li>
              <li className="flex gap-3">
                <span className="text-green-400 mt-0.5">✓</span>
                <span>+85% en reservaciones en 2 semanas</span>
              </li>
              <li className="flex gap-3">
                <span className="text-green-400 mt-0.5">✓</span>
                <span>Dueño recupera 2 horas diarias</span>
              </li>
              <li className="flex gap-3">
                <span className="text-green-400 mt-0.5">✓</span>
                <span>Agenda sincronizada automáticamente</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Demo */}
      <section className="px-6 py-20 max-w-3xl mx-auto">
        <span className="text-primary text-sm font-[family-name:var(--font-space-grotesk)] font-medium uppercase tracking-[0.2em] mb-4 text-center block">
          Demo en vivo
        </span>
        <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl md:text-4xl font-bold text-white tracking-tighter mb-4 text-center">
          Probalo ahora
        </h2>
        <p className="text-primary text-center mb-2 text-sm font-[family-name:var(--font-space-grotesk)] font-medium animate-pulse">
          👇 Esto es real. Escribile como si fueras un cliente.
        </p>
        <p className="text-on-surface-variant text-center mb-10 max-w-lg mx-auto">
          Este es un asistente simulado de un restaurante. Preguntá por
          horarios, menú o reservaciones.
        </p>
        <ChatDemo />
      </section>

      {/* CTA */}
      <section className="px-6 py-24 text-center">
        <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl md:text-4xl font-bold text-white tracking-tighter mb-4">
          Tu negocio debería estar respondiendo clientes ahora mismo.
        </h2>
        <p className="text-on-surface-variant mb-10 max-w-lg mx-auto">
          Configuramos tu sistema en menos de una semana.
        </p>
        <a
          href="/#contact"
          className="inline-block bg-primary text-on-primary px-8 py-4 rounded-lg text-lg font-[family-name:var(--font-space-grotesk)] font-bold hover:bg-primary/90 hover:shadow-[0_0_20px_rgba(209,188,255,0.4)] transition-all btn-press"
        >
          Quiero probarlo →
        </a>
      </section>
    </SiteLayout>
  );
}
