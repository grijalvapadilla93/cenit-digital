"use client";

import { useEffect, useRef } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

export function ScrambleText({
  text,
  duration = 500,
  delay = 0,
  className = "",
  style = {},
  onComplete,
}: {
  text: string;
  duration?: number;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
  onComplete?: () => void;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    let frame = 0;
    let raf: number;
    const totalFrames = Math.round(duration / 16);

    const timeout = setTimeout(() => {
      function tick() {
        frame++;
        const progress = frame / totalFrames;
        const revealed = Math.floor(progress * text.length);

        let result = "";
        for (let i = 0; i < text.length; i++) {
          if (i < revealed) {
            result += text[i];
          } else if (i === revealed) {
            result += CHARS[Math.floor(Math.random() * CHARS.length)];
          } else {
            result += " ";
          }
        }
        el.textContent = result;

        if (frame < totalFrames) {
          raf = requestAnimationFrame(tick);
        } else {
          el.textContent = text;
          onComplete?.();
        }
      }
      raf = requestAnimationFrame(tick);
    }, delay);

    return () => {
      clearTimeout(timeout);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <span ref={ref} className={className} style={style}>
      &nbsp;
    </span>
  );
}
