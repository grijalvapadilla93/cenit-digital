"use client";

import { useState } from "react";
import SiteLayout from "@/components/site-layout";
import { ChatDemo } from "@/components/chat-demo";
import { ScrambleText } from "@/components/scramble-text";
import { Button } from "@/components/ui/button";
import { ScrollToTop } from "@/components/scroll-to-top";

const WHATSAPP_LINK = "https://wa.me/50200000000?text=Hola%20Cenit%20Digital,%20quiero%20probar%20el%20chatbot";

export default function AIDemoPage() {
  const [heroReady, setHeroReady] = useState(false);

  return (
    <SiteLayout>
      <ScrollToTop />
      {/* Hero */}
      <section className="relative min-h-[80vh] flex flex-col items-center justify-center text-center px-6 pt-24 pb-16 overflow-hidden">
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none"
          style={{
            background: "radial-gradient(circle at center, rgba(147,51,234,0.10) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-full h-px"
          style={{
            background: "linear-gradient(90deg, transparent, rgba(147,51,234,0.5) 50%, transparent)",
          }}
        />

        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-container/10 border border-primary-container/20 text-primary text-sm mb-8 font-[family-name:var(--font-space-grotesk)]">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Automatización con IA
          </div>
          <h1 className="font-[family-name:var(--font-space-grotesk)] text-4xl md:text-6xl font-bold text-white max-w-3xl leading-tight tracking-tighter">
            <ScrambleText text="Tu negocio pierde clientes" duration={400} className="block" />
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
          </p>
          <div className={`mt-8 flex flex-wrap justify-center gap-4 transition-opacity duration-500 ${heroReady ? "opacity-100" : "opacity-0"}`}>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <Button className="bg-primary text-on-primary px-8 py-6 font-[family-name:var(--font-space-grotesk)] font-bold text-lg hover:bg-primary/90 btn-press btn-shimmer">
                Quiero mi chatbot →
              </Button>
            </a>
            <a href="/casos">
              <Button variant="outline" className="border border-outline px-8 py-6 font-[family-name:var(--font-space-grotesk)] font-bold text-lg text-white hover:bg-surface-container-high btn-press">
                Ver más proyectos
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Problem / Solution */}
      <section className="px-6 py-20 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Before */}
          <div className="rounded-lg border border-red-500/20 bg-red-500/5 p-8">
            <h3 className="text-lg font-[family-name:var(--font-space-grotesk)] font-semibold text-red-400 mb-6">
              Sin chatbot
            </h3>
            <ul className="space-y-4 text-sm text-on-surface-variant">
              <li className="flex gap-3"><span className="text-red-400 mt-0.5">✕</span><span>30+ mensajes sin responder diariamente</span></li>
              <li className="flex gap-3"><span className="text-red-400 mt-0.5">✕</span><span>Respuesta promedio: 2 horas</span></li>
              <li className="flex gap-3"><span className="text-red-400 mt-0.5">✕</span><span>40% de reservaciones perdidas</span></li>
              <li className="flex gap-3"><span className="text-red-400 mt-0.5">✕</span><span>Dueño pegado al celular</span></li>
            </ul>
          </div>

          {/* After */}
          <div className="rounded-lg border border-green-500/20 bg-green-500/5 p-8">
            <h3 className="text-lg font-[family-name:var(--font-space-grotesk)] font-semibold text-green-400 mb-6">
              Con chatbot de Cenit
            </h3>
            <ul className="space-y-4 text-sm text-on-surface-variant">
              <li className="flex gap-3"><span className="text-green-400 mt-0.5">✓</span><span>Respuesta instantánea, 24/7</span></li>
              <li className="flex gap-3"><span className="text-green-400 mt-0.5">✓</span><span>Agenda automática en tu calendario</span></li>
              <li className="flex gap-3"><span className="text-green-400 mt-0.5">✓</span><span>Dueño recupera horas de trabajo</span></li>
              <li className="flex gap-3"><span className="text-green-400 mt-0.5">✓</span><span>Datos de cuántos clientes entraron</span></li>
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
        <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
          <Button className="bg-primary text-on-primary px-8 py-6 rounded-lg text-lg font-[family-name:var(--font-space-grotesk)] font-bold hover:bg-primary/90 hover:shadow-[0_0_20px_rgba(209,188,255,0.4)] transition-all btn-press btn-shimmer">
            Quiero probarlo →
          </Button>
        </a>
      </section>
    </SiteLayout>
  );
}
