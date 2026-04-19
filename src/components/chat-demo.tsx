"use client";

import { useState, useRef, useEffect } from "react";

interface Message {
  role: "user" | "assistant";
  text: string;
}

const PRESET_RESPONSES: Record<string, string> = {
  horarios:
    "¡Claro! Restaurante La Fuga está abierto de lunes a sábado de 12:00 PM a 10:00 PM, y domingos de 11:00 AM a 9:00 PM. ¿Te gustaría hacer una reservación?",
  menu:
    "Nuestro menú incluye cortes de importación, pastas artesanales y postres de la casa. El plato estrella es la arrachera madurada con chimichurri. ¿Quieres que te envíe el menú completo?",
  reservar:
    "¡Con gusto! Para confirmar tu reservación necesito: 1) Fecha, 2) Hora, 3) Número de personas. ¿Para cuándo sería?",
  reservación:
    "¡Con gusto! Para confirmar tu reservación necesito: 1) Fecha, 2) Hora, 3) Número de personas. ¿Para cuándo sería?",
  reservacion:
    "¡Con gusto! Para confirmar tu reservación necesito: 1) Fecha, 2) Hora, 3) Número de personas. ¿Para cuándo sería?",
  ubicacion:
    "Estamos en la 5ta Avenida 3-28, Zona 1, Jalapa. A una cuadra del parque central. ¿Necesitas indicaciones?",
  direccion:
    "Estamos en la 5ta Avenida 3-28, Zona 1, Jalapa. A una cuadra del parque central. ¿Necesitas indicaciones?",
  donde:
    "Estamos en la 5ta Avenida 3-28, Zona 1, Jalapa. A una cuadra del parque central. ¿Necesitas indicaciones?",
  precio:
    "Nuestros cortes van desde Q85 hasta Q195. Las pastas desde Q65. Postres desde Q35. ¿Te interesa algún platillo en especial?",
  precios:
    "Nuestros cortes van desde Q85 hasta Q195. Las pastas desde Q65. Postres desde Q35. ¿Te interesa algún platillo en especial?",
  evento:
    "¡Sí! Hacemos eventos privados para hasta 40 personas. Tenemos paquetes con menú cerrado. ¿Qué tipo de evento tienes en mente?",
  eventos:
    "¡Sí! Hacemos eventos privados para hasta 40 personas. Tenemos paquetes con menú cerrado. ¿Qué tipo de evento tienes en mente?",
  delivery:
    "Hacemos delivery dentro de Jalapa. El tiempo promedio es de 30-45 minutos. ¿Qué te gustaría ordenar?",
  pedido:
    "Hacemos delivery dentro de Jalapa. El tiempo promedio es de 30-45 minutos. ¿Qué te gustaría ordenar?",
};

function getResponse(input: string): string {
  const lower = input.toLowerCase();
  for (const [key, response] of Object.entries(PRESET_RESPONSES)) {
    if (lower.includes(key)) return response;
  }
  return "Gracias por tu mensaje. Un miembro de nuestro equipo te responderá en breve. Mientras tanto, ¿puedo ayudarte con horarios, menú, reservaciones o ubicación?";
}

export function ChatDemo() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      text: "¡Hola! 👋 Soy el asistente de Restaurante La Fuga. ¿En qué te puedo ayudar? Pregúntame sobre horarios, menú, reservaciones o ubicación.",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleSend = () => {
    const text = input.trim();
    if (!text) return;
    setMessages((prev) => [...prev, { role: "user", text }]);
    setInput("");
    setIsTyping(true);
    setTimeout(() => {
      const reply = getResponse(text);
      setMessages((prev) => [...prev, { role: "assistant", text: reply }]);
      setIsTyping(false);
    }, 1200);
  };

  return (
    <div className="flex flex-col h-[500px] rounded-2xl border border-border bg-surface-container-low overflow-hidden">
      {/* Header */}
      <div className="flex items-center gap-3 px-5 py-4 bg-surface-container border-b border-border">
        <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-sm font-bold text-white">
          LF
        </div>
        <div>
          <p className="text-sm font-semibold text-foreground">
            Restaurante La Fuga
          </p>
          <p className="text-xs text-green-400 flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-green-400 inline-block" />
            En línea — responde al instante
          </p>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4">
        {messages.map((m, i) => (
          <div
            key={i}
            className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                m.role === "user"
                  ? "bg-primary-container text-white rounded-br-md"
                  : "bg-surface-container-high text-foreground rounded-bl-md"
              }`}
            >
              {m.text}
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-surface-container-high rounded-2xl rounded-bl-md px-4 py-3 text-sm">
              <span className="flex gap-1">
                <span className="w-2 h-2 rounded-full bg-muted-foreground animate-bounce" />
                <span
                  className="w-2 h-2 rounded-full bg-muted-foreground animate-bounce"
                  style={{ animationDelay: "0.15s" }}
                />
                <span
                  className="w-2 h-2 rounded-full bg-muted-foreground animate-bounce"
                  style={{ animationDelay: "0.3s" }}
                />
              </span>
            </div>
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <div className="px-4 py-3 border-t border-border bg-surface-container">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSend();
          }}
          className="flex gap-2"
        >
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Escribe un mensaje..."
            className="flex-1 bg-surface-container-high text-foreground text-sm rounded-xl px-4 py-3 border border-border outline-none focus:ring-2 focus:ring-primary-container/50 placeholder:text-muted-foreground"
          />
          <button
            type="submit"
            className="bg-primary-container text-white px-5 py-3 rounded-xl text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}
