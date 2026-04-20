"use client";

import { useRef, useEffect } from "react";

const vertexShader = `
  attribute vec2 position;
  void main() {
    gl_Position = vec4(position, 0.0, 1.0);
  }
`;

const fragmentShader = `
  precision highp float;

  uniform float uTime;
  uniform vec2 uResolution;
  uniform vec2 uMouse;

  // Simplex-ish noise
  vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec3 permute(vec3 x) { return mod289(((x * 34.0) + 1.0) * x); }

  float snoise(vec2 v) {
    const vec4 C = vec4(0.211324865405187, 0.366025403784439,
                       -0.577350269189626, 0.024390243902439);
    vec2 i = floor(v + dot(v, C.yy));
    vec2 x0 = v - i + dot(i, C.xx);
    vec2 i1;
    i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod289(i);
    vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
    vec3 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy), dot(x12.zw, x12.zw)), 0.0);
    m = m * m;
    m = m * m;
    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;
    m *= 1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h);
    vec3 g;
    g.x = a0.x * x0.x + h.x * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
  }

  void main() {
    vec2 uv = gl_FragCoord.xy / uResolution.xy;
    vec2 mouse = uMouse / uResolution;
    
    // Multiple noise layers for depth
    float t = uTime * 0.15;
    float n1 = snoise(uv * 2.0 + vec2(t * 0.8, t * 0.5));
    float n2 = snoise(uv * 4.0 - vec2(t * 0.6, t * 0.3));
    float n3 = snoise(uv * 8.0 + vec2(t * 0.4, -t * 0.7));
    
    // Combine noise
    float noise = n1 * 0.5 + n2 * 0.3 + n3 * 0.2;
    noise = noise * 0.5 + 0.5; // normalize to 0-1
    
    // Mouse influence - subtle glow follows cursor
    float mouseDist = distance(uv, mouse);
    float mouseGlow = smoothstep(0.6, 0.0, mouseDist) * 0.3;
    
    // Brand colors
    vec3 purple = vec3(0.427, 0.263, 0.776);   // #6d43c6
    vec3 lavender = vec3(0.655, 0.545, 0.980);  // #a78bfa
    vec3 deep = vec3(0.059, 0.059, 0.059);      // #0f0f0f
    
    // Mix colors based on noise
    vec3 col = mix(deep, purple, noise * 0.4 + mouseGlow);
    col = mix(col, lavender, pow(noise, 3.0) * 0.3);
    
    // Vignette
    float vignette = 1.0 - length((uv - 0.5) * 1.2);
    vignette = smoothstep(0.0, 0.7, vignette);
    col *= vignette * 0.8 + 0.2;
    
    // Very subtle scanlines for texture
    col *= 0.95 + 0.05 * sin(gl_FragCoord.y * 2.0);
    
    gl_FragColor = vec4(col, 1.0);
  }
`;

export function HeroShader() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const c = canvas;
    const glCtx = c.getContext("webgl", { alpha: false, antialias: false });
    if (!glCtx) return;
    const gl = glCtx;

    // Resize
    function resize() {
      const dpr = Math.min(window.devicePixelRatio, 1.5);
      c.width = c.offsetWidth * dpr;
      c.height = c.offsetHeight * dpr;
      gl.viewport(0, 0, c.width, c.height);
    }
    resize();
    window.addEventListener("resize", resize);

    // Compile shader
    function compile(type: number, source: string) {
      const shader = gl.createShader(type)!;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      return shader;
    }

    const prog = gl.createProgram()!;
    gl.attachShader(prog, compile(gl.VERTEX_SHADER, vertexShader));
    gl.attachShader(prog, compile(gl.FRAGMENT_SHADER, fragmentShader));
    gl.linkProgram(prog);
    gl.useProgram(prog);

    // Fullscreen quad
    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1, 1,-1, -1,1, 1,1]), gl.STATIC_DRAW);
    const pos = gl.getAttribLocation(prog, "position");
    gl.enableVertexAttribArray(pos);
    gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0);

    // Uniforms
    const uTime = gl.getUniformLocation(prog, "uTime");
    const uRes = gl.getUniformLocation(prog, "uResolution");
    const uMouse = gl.getUniformLocation(prog, "uMouse");

    // Mouse tracking
    function onMouse(e: MouseEvent) {
      const rect = c.getBoundingClientRect();
      mouseRef.current.x = (e.clientX - rect.left) * (c.width / rect.width);
      mouseRef.current.y = (rect.height - (e.clientY - rect.top)) * (c.height / rect.height);
    }
    c.addEventListener("mousemove", onMouse);

    // Animation
    let raf: number;
    const start = performance.now();
    function frame() {
      const elapsed = (performance.now() - start) / 1000;
      gl.uniform1f(uTime, elapsed);
      gl.uniform2f(uRes, c.width, c.height);
      gl.uniform2f(uMouse, mouseRef.current.x, mouseRef.current.y);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      raf = requestAnimationFrame(frame);
    }
    frame();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      c.removeEventListener("mousemove", onMouse);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ zIndex: 0 }}
    />
  );
}
