"use client";

import { useLang } from "@/lib/lang-context";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

function scrambleText(
  element: HTMLElement,
  finalText: string,
  duration: number,
  onComplete?: () => void
) {
  let frame = 0;
  const totalFrames = Math.round(duration / 16);

  function tick() {
    frame++;
    const progress = frame / totalFrames;
    const revealed = Math.floor(progress * finalText.length);

    let result = "";
    for (let i = 0; i < finalText.length; i++) {
      if (i < revealed) {
        result += finalText[i];
      } else if (i === revealed) {
        result += CHARS[Math.floor(Math.random() * CHARS.length)];
      } else {
        result += " ";
      }
    }
    element.textContent = result;

    if (frame < totalFrames) {
      requestAnimationFrame(tick);
    } else {
      element.textContent = finalText;
      onComplete?.();
    }
  }
  requestAnimationFrame(tick);
}

function TypedText({ words, delay }: { words: string[]; delay: number }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let timeout: ReturnType<typeof setTimeout>;

    const WRITE_SPEED = 85;
    const DELETE_SPEED = 55;
    const PAUSE = 1500;

    function tick() {
      const current = words[wordIndex];

      if (!deleting) {
        charIndex++;
        if (ref.current) ref.current.textContent = current.slice(0, charIndex);
        if (charIndex === current.length) {
          timeout = setTimeout(() => { deleting = true; tick(); }, PAUSE);
          return;
        }
        timeout = setTimeout(tick, WRITE_SPEED);
      } else {
        charIndex--;
        if (ref.current) ref.current.textContent = current.slice(0, charIndex);
        if (charIndex === 0) {
          deleting = false;
          wordIndex = (wordIndex + 1) % words.length;
          timeout = setTimeout(tick, 400);
          return;
        }
        timeout = setTimeout(tick, DELETE_SPEED);
      }
    }

    timeout = setTimeout(tick, delay);
    return () => clearTimeout(timeout);
  }, []);

  return <span ref={ref} />;
}

const WHATSAPP_LINK = "https://wa.me/50200000000?text=Hola%20Cenit%20Digital,%20quiero%20mi%20diagnóstico%20gratis";

export function Hero() {
  const { t } = useLang();
  const line1Ref = useRef<HTMLSpanElement>(null);
  const line2Ref = useRef<HTMLSpanElement>(null);
  const [scrambleDone, setScrambleDone] = useState(false);

  const words = [
    "más reservas.",
    "más pedidos.",
    "menos trabajo manual.",
    "clientes 24/7.",
  ];

  useEffect(() => {
    if (!line1Ref.current || !line2Ref.current) return;

    scrambleText(line1Ref.current, t.hero.headlinePrefix, 800, () => {
      setTimeout(() => {
        if (line2Ref.current) {
          scrambleText(line2Ref.current, t.hero.headlineGradient, 800, () => {
            setScrambleDone(true);
          });
        }
      }, 600);
    });
  }, [t]);

  return (
    <section className="relative min-h-[921px] flex items-center px-4 md:px-8 overflow-hidden circuit-bg">
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

      <div className="max-w-screen-2xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Content */}
        <div className="lg:col-span-7 space-y-8">
          <div className="inline-block px-3 py-1 bg-surface-container-high rounded-full">
            <span className="text-primary font-[family-name:var(--font-space-grotesk)] text-xs uppercase tracking-widest">
              {t.hero.badge}
            </span>
          </div>

          {/* Scramble title */}
          <h1 className="font-[family-name:var(--font-space-grotesk)] font-bold leading-tight tracking-tighter text-white">
            <span ref={line1Ref} className="block text-5xl md:text-7xl">
              &nbsp;
            </span>
            <span
              ref={line2Ref}
              className="block text-5xl md:text-7xl mt-2"
              style={{ color: "#9333ea" }}
            >
              &nbsp;
            </span>
          </h1>

          {/* Typed section */}
          <div className={`transition-opacity duration-700 ${scrambleDone ? "opacity-100" : "opacity-0"}`}>
            <p className="text-2xl md:text-3xl font-[family-name:var(--font-space-grotesk)] font-medium text-on-surface-variant">
              Tu negocio necesita{" "}
              <span className="text-white">
                <TypedText words={words} delay={0} />
              </span>
              <span className="typed-cursor" style={{ color: "#9333ea", fontWeight: "bold" }}>|</span>
            </p>
          </div>

          {/* Subtitle */}
          <p className={`text-lg md:text-xl text-on-surface-variant max-w-2xl leading-relaxed transition-opacity duration-700 ${scrambleDone ? "opacity-100" : "opacity-0"}`}>
            {t.hero.subtitle}
          </p>

          {/* CTAs */}
          <div className={`flex flex-wrap gap-4 pt-4 transition-opacity duration-700 ${scrambleDone ? "opacity-100" : "opacity-0"}`}>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <Button className="bg-primary text-on-primary px-4 md:px-8 py-6 font-[family-name:var(--font-space-grotesk)] font-bold text-lg hover:shadow-[0_0_20px_rgba(209,188,255,0.4)] transition-all hover:bg-primary/90 btn-press btn-shimmer">
                {t.hero.ctaPrimary}
              </Button>
            </a>
            <a href="/casos">
              <Button
                variant="outline"
                className="border border-outline px-4 md:px-8 py-6 font-[family-name:var(--font-space-grotesk)] font-bold text-lg text-white hover:bg-surface-container-high transition-colors btn-press"
              >
                {t.hero.ctaSecondary}
              </Button>
            </a>
          </div>

          {/* Trust badges */}
          <div className={`flex flex-wrap gap-6 pt-8 transition-opacity duration-700 ${scrambleDone ? "opacity-100" : "opacity-0"}`}>
            {[t.hero.trust1, t.hero.trust2, t.hero.trust3, t.hero.trust4].map((badge) => (
              <span key={badge} className="text-sm font-[family-name:var(--font-space-grotesk)] text-on-surface-variant">
                ✓ {badge}
              </span>
            ))}
          </div>
        </div>

        {/* Right — Floating 3D Logo */}
        <div className={`lg:col-span-5 relative hidden lg:flex justify-center items-center transition-opacity duration-700 ${scrambleDone ? "opacity-100" : "opacity-0"}`}>
          <div className="absolute w-80 h-80 bg-primary/10 rounded-full blur-[120px]" />
          <div className="logo-float-3d">
            <img
              src="/cenit-logo.png"
              alt="Cenit Digital"
              className="w-72 h-auto drop-shadow-[0_0_40px_rgba(109,67,198,0.3)]"
            />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes cursorBlink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .typed-cursor {
          animation: cursorBlink 0.8s step-end infinite;
        }

        @keyframes logoFloat3D {
          0%   { transform: perspective(800px) rotateY(-8deg) rotateX(5deg) translateY(0px); }
          25%  { transform: perspective(800px) rotateY(4deg)  rotateX(-3deg) translateY(-12px); }
          50%  { transform: perspective(800px) rotateY(8deg)  rotateX(-5deg) translateY(-6px); }
          75%  { transform: perspective(800px) rotateY(-4deg) rotateX(3deg) translateY(-14px); }
          100% { transform: perspective(800px) rotateY(-8deg) rotateX(5deg) translateY(0px); }
        }
        .logo-float-3d {
          animation: logoFloat3D 6s ease-in-out infinite;
          transform-style: preserve-3d;
        }
      `}</style>
    </section>
  );
}
