"use client";

import { useEffect, useRef, useState } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  threshold?: number; // No se usa, se mantiene por compatibilidad
}

export function ScrollReveal({
  children,
  className = "",
  stagger,
  threshold: _threshold,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<"hidden" | "revealed">("hidden");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const inView = rect.top < window.innerHeight + 100 && rect.bottom > -100;
      if (inView) {
        setState("revealed");
        window.removeEventListener("scroll", onScroll);
      }
    };

    // Verificación inmediata al montar
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight + 100 && rect.bottom > -100) {
      setState("revealed");
    } else {
      window.addEventListener("scroll", onScroll, { passive: true });
      // Verificar de nuevo tras un delay por si el scroll cambió (ej. restauración de historial)
      setTimeout(onScroll, 150);
    }

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const staggerClass = stagger ? `stagger-${stagger}` : "";

  if (state === "revealed") {
    return (
      <div
        ref={ref}
        className={`${staggerClass} ${className}`}
        style={{ animation: "fadeUp 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards" }}
      >
        {children}
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className={`${staggerClass} ${className}`}
      style={{ opacity: 0, transform: "translateY(24px)" }}
    >
      {children}
    </div>
  );
}
