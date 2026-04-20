"use client";

import { useState, useEffect } from "react";

interface Notification {
  id: number;
  type: "lead" | "response" | "booking" | "quote";
  icon: string;
  title: string;
  detail: string;
  time: string;
  color: string;
}

const NOTIFICATIONS: Notification[] = [
  {
    id: 1,
    type: "lead",
    icon: "📱",
    title: "Nuevo mensaje de WhatsApp",
    detail: '"Hola, tienen mesa para 4 personas el sábado a las 8?"',
    time: "Hace 2 seg",
    color: "border-blue-500/30 bg-blue-500/5",
  },
  {
    id: 2,
    type: "response",
    icon: "🤖",
    title: "IA respondió automáticamente",
    detail:
      '"¡Hola! Sí tenemos disponibilidad. ¿Confirmo la reserva para 4 personas el sábado 8 PM?"',
    time: "Hace 1 seg",
    color: "border-primary/30 bg-primary/5",
  },
  {
    id: 3,
    type: "booking",
    icon: "📅",
    title: "Reservación confirmada",
    detail: "4 personas — Sábado 8:00 PM — Mesa 7",
    time: "Ahora",
    color: "border-green-500/30 bg-green-500/5",
  },
  {
    id: 4,
    type: "quote",
    icon: "💰",
    title: "Cotización enviada",
    detail:
      '"Para evento privado de 30 personas el paquete es de Q4,500 incluyendo menú cerrado."',
    time: "Hace 5 min",
    color: "border-yellow-500/30 bg-yellow-500/5",
  },
  {
    id: 5,
    type: "lead",
    icon: "📱",
    title: "Nuevo mensaje de Instagram",
    detail: '"¿Hacen delivery a zona 3?"',
    time: "Hace 3 min",
    color: "border-pink-500/30 bg-pink-500/5",
  },
  {
    id: 6,
    type: "response",
    icon: "🤖",
    title: "IA respondió automáticamente",
    detail:
      '"Sí hacemos delivery a zona 3. El tiempo promedio es de 30 minutos. ¿Qué te gustaría ordenar?"',
    time: "Hace 3 min",
    color: "border-primary/30 bg-primary/5",
  },
];

export function NotificationPanel() {
  const [visible, setVisible] = useState<number[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex >= NOTIFICATIONS.length) return;

    const timer = setTimeout(() => {
      setVisible((prev) => [NOTIFICATIONS[currentIndex].id, ...prev]);
      setCurrentIndex((prev) => prev + 1);
    }, currentIndex === 0 ? 500 : 2500);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <div className="rounded-2xl border border-border bg-surface-container-low overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4 bg-surface-container border-b border-border">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
          <p className="text-sm font-semibold text-foreground">
            Panel de notificaciones
          </p>
        </div>
        <p className="text-xs text-muted-foreground">En vivo — simulación</p>
      </div>

      {/* Stats bar */}
      <div className="grid grid-cols-3 border-b border-border">
        <div className="px-4 py-3 text-center border-r border-border">
          <p className="text-lg font-bold text-green-400">12</p>
          <p className="text-xs text-muted-foreground">Respondidos hoy</p>
        </div>
        <div className="px-4 py-3 text-center border-r border-border">
          <p className="text-lg font-bold text-primary">0 seg</p>
          <p className="text-xs text-muted-foreground">Tiempo de respuesta</p>
        </div>
        <div className="px-4 py-3 text-center">
          <p className="text-lg font-bold text-yellow-400">3</p>
          <p className="text-xs text-muted-foreground">Reservaciones hoy</p>
        </div>
      </div>

      {/* Notifications feed */}
      <div className="p-4 space-y-3 max-h-[400px] overflow-y-auto">
        {visible.length === 0 && (
          <div className="text-center py-8 text-muted-foreground text-sm">
            Esperando mensajes entrantes...
          </div>
        )}
        {visible.map((id) => {
          const n = NOTIFICATIONS.find((x) => x.id === id)!;
          return (
            <div
              key={id}
              className={`flex gap-3 rounded-xl border p-4 ${n.color} transition-all duration-500 animate-in fade-in slide-in-from-top-2`}
            >
              <div className="text-2xl mt-0.5">{n.icon}</div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <p className="text-sm font-semibold text-foreground truncate">
                    {n.title}
                  </p>
                  <p className="text-xs text-muted-foreground whitespace-nowrap">
                    {n.time}
                  </p>
                </div>
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                  {n.detail}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
