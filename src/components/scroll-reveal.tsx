"use client";

import { useEffect, useRef, useState } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  threshold?: number;
}

export function ScrollReveal({
  children,
  className = "",
  stagger,
  threshold = 0.1,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<"pending" | "hidden" | "revealed">("pending");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const check = () => {
      const rect = el.getBoundingClientRect();
      const inView = rect.top < window.innerHeight + 100 && rect.bottom > -100;

      if (inView) {
        setState("revealed");
        return true;
      }

      // Below viewport — hide and observe
      setState("hidden");

      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setState("revealed");
            observer.disconnect();
          }
        },
        { threshold, rootMargin: "50px" }
      );
      observer.observe(el);

      return observer;
    };

    // Delay to allow scroll restoration on back navigation
    const timeoutId = setTimeout(() => {
      const result = check();
      // If observer was created, store for cleanup
      if (result && typeof result !== "boolean") {
        (el as HTMLElement & { _obs?: IntersectionObserver })._obs = result;
      }
    }, 150);

    return () => {
      clearTimeout(timeoutId);
      const obs = (el as HTMLElement & { _obs?: IntersectionObserver })._obs;
      if (obs) obs.disconnect();
    };
  }, [threshold]);

  const staggerClass = stagger ? `stagger-${stagger}` : "";

  // Pending = still checking, show content (avoids flash of nothing)
  if (state === "pending") {
    return (
      <div className={`${staggerClass} ${className}`}>
        {children}
      </div>
    );
  }

  // Revealed: animate in
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

  // Hidden: below viewport
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
