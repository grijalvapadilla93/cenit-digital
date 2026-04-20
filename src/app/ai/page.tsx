import SiteLayout from "@/components/site-layout";
import { ChatDemo } from "@/components/chat-demo";
import { NotificationPanel } from "@/components/notification-panel";

export default function AIDemoPage() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6 pt-24 pb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-container/10 border border-primary-container/20 text-primary text-sm mb-8">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Automatización con IA
        </div>
        <h1 className="font-heading text-4xl md:text-6xl font-bold text-foreground max-w-3xl leading-tight">
          Tu negocio pierde clientes
          <br />
          <span className="text-primary">cada minuto.</span>
        </h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
          La mayoría de negocios responden mensajes con horas de retraso. Cada
          mensaje sin respuesta es un cliente que se va con la competencia.
          Nosotros lo resolvemos.
        </p>
      </section>

      {/* The Problem */}
      <section className="px-6 py-20 max-w-5xl mx-auto">
        <p className="text-primary text-sm font-medium uppercase tracking-wider mb-4">
          El problema
        </p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-12">
          Así se ve un negocio sin automatización
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-border bg-surface-container-low p-6">
            <div className="text-4xl mb-4">📱</div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              30+ mensajes diarios
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              WhatsApp, Instagram, Facebook — todos piden respuesta y el dueño
              no da abasto.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-surface-container-low p-6">
            <div className="text-4xl mb-4">⏰</div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              1-3 horas de retraso
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              El promedio de respuesta. Para cuando contestas, el cliente ya
              eligió otro lugar.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-surface-container-low p-6">
            <div className="text-4xl mb-4">💸</div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              40% de leads perdidos
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Casi la mitad de las reservaciones y pedidos se pierden por falta
              de respuesta.
            </p>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="px-6 py-20 max-w-5xl mx-auto">
        <p className="text-primary text-sm font-medium uppercase tracking-wider mb-4">
          La solución
        </p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-12">
          Un sistema que trabaja por vos, 24/7
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              icon: "🤖",
              title: "Recepcionista AI",
              desc: "Responde al instante por WhatsApp, Instagram o web. Nunca duerme.",
            },
            {
              icon: "📅",
              title: "Agenda automática",
              desc: "Confirma reservaciones y las sincroniza con Google Calendar.",
            },
            {
              icon: "🔔",
              title: "Notificaciones inteligentes",
              desc: "Te avisa solo cuando un cliente necesita atención humana.",
            },
            {
              icon: "📊",
              title: "Reportes de leads",
              desc: "Sabés cuántos mensajes entran, cuántos se convierten, y cuántos se pierden.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="flex gap-4 rounded-2xl border border-border bg-surface-container-low p-6"
            >
              <div className="text-3xl">{item.icon}</div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Live Notifications */}
      <section className="px-6 py-20 max-w-3xl mx-auto">
        <p className="text-primary text-sm font-medium uppercase tracking-wider mb-4 text-center">
          En tiempo real
        </p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
          Así se ve cuando el sistema trabaja por vos
        </h2>
        <p className="text-muted-foreground text-center mb-10 max-w-lg mx-auto">
          Cada mensaje que llega es procesado al instante. Vos solo ves las
          notificaciones importantes.
        </p>
        <NotificationPanel />
      </section>

      {/* Case Study */}
      <section className="px-6 py-20 max-w-5xl mx-auto">
        <p className="text-primary text-sm font-medium uppercase tracking-wider mb-4">
          Caso real
        </p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-12">
          Restaurante La Fuga — Jalapa
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Before */}
          <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-8">
            <h3 className="text-lg font-semibold text-red-400 mb-6">Antes</h3>
            <ul className="space-y-4 text-sm text-muted-foreground">
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
          <div className="rounded-2xl border border-green-500/20 bg-green-500/5 p-8">
            <h3 className="text-lg font-semibold text-green-400 mb-6">
              Después
            </h3>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="flex gap-3">
                <span className="text-green-400 mt-0.5">✓</span>
                <span>Respuesta instantánea, 24/7</span>
              </li>
              <li className="flex gap-3">
                <span className="text-green-400 mt-0.5">✓</span>
                <span>+15% en reservaciones en 2 semanas</span>
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
        <p className="text-primary text-sm font-medium uppercase tracking-wider mb-4 text-center">
          Demo en vivo
        </p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
          Probalo ahora
        </h2>
        <p className="text-muted-foreground text-center mb-10 max-w-lg mx-auto">
          Este es un asistente simulado de un restaurante. Escribí como si
          fueras un cliente — preguntá por horarios, menú o reservaciones.
        </p>
        <ChatDemo />
      </section>

      {/* CTA */}
      <section className="px-6 py-24 text-center">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
          ¿Listo para dejar de perder clientes?
        </h2>
        <p className="text-muted-foreground mb-10 max-w-lg mx-auto">
          Te ayudamos a encontrar dónde tu negocio está perdiendo dinero y lo
          resolvemos.
        </p>
        <a
          href="/#contact"
          className="inline-block bg-primary-container text-white px-8 py-4 rounded-xl text-lg font-medium hover:opacity-90 transition-opacity"
        >
          Hablá con nosotros
        </a>
      </section>
    </SiteLayout>
  );
}
