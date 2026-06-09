import { ImageResponse } from "next/og";

export const alt = "Rashi Singhal — Visual Designer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0b0b0c",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          fontFamily: "serif",
        }}
      >
        {/* Top accent dot */}
        <div
          style={{
            width: 12,
            height: 12,
            borderRadius: "50%",
            background: "#c8ff4d",
          }}
        />

        {/* Main content */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div
            style={{
              fontSize: 96,
              fontWeight: 300,
              color: "#f4f1ea",
              lineHeight: 0.95,
              letterSpacing: "-0.03em",
            }}
          >
            Rashi Singhal
          </div>
          <div
            style={{
              fontSize: 28,
              fontWeight: 400,
              color: "#888",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              fontFamily: "monospace",
            }}
          >
            Visual Designer
          </div>
        </div>

        {/* Bottom row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <div
            style={{
              fontSize: 18,
              color: "#555",
              fontFamily: "monospace",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            Brand Identity · Creative Direction · Visual Storytelling
          </div>
          <div
            style={{
              fontSize: 18,
              color: "#444",
              fontFamily: "monospace",
              letterSpacing: "0.05em",
            }}
          >
            rashisinghal.vercel.app
          </div>
        </div>
      </div>
    ),
    size,
  );
}
