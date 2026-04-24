import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Cenit Digital";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#131313",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "24px",
            marginBottom: "40px",
          }}
        >
          {/* Logo placeholder using text */}
          <div
            style={{
              width: "64px",
              height: "64px",
              background: "#7F56D9",
              borderRadius: "16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: "32px",
              fontWeight: 700,
              fontFamily: "ui-sans-serif, system-ui, sans-serif",
            }}
          >
            C
          </div>
          <span
            style={{
              fontSize: "56px",
              fontWeight: 700,
              color: "white",
              letterSpacing: "-0.02em",
              fontFamily: "ui-sans-serif, system-ui, sans-serif",
            }}
          >
            Cenit Digital
          </span>
        </div>
        <p
          style={{
            fontSize: "32px",
            color: "#7F56D9",
            textAlign: "center",
            fontWeight: 500,
            fontFamily: "ui-sans-serif, system-ui, sans-serif",
            maxWidth: "900px",
            lineHeight: 1.3,
          }}
        >
          Websites, Chatbots & AI that work 24/7
        </p>
        <p
          style={{
            fontSize: "24px",
            color: "rgba(255,255,255,0.5)",
            textAlign: "center",
            marginTop: "24px",
            fontFamily: "ui-sans-serif, system-ui, sans-serif",
          }}
        >
          Guatemala · From Q2,500 · Ready in 7-14 days
        </p>
      </div>
    ),
    { ...size }
  );
}
