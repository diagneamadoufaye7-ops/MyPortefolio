import { ImageResponse } from "next/og";
import { profile } from "@/lib/content";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #05070c 0%, #0b0f17 60%, #0f0a1a 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 40,
          }}
        >
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              border: "2px solid #22d3ee",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#22d3ee",
              fontSize: 28,
              fontWeight: 700,
            }}
          >
            A
          </div>
          <div style={{ color: "#8b96a8", fontSize: 24, display: "flex" }}>
            {profile.location}
          </div>
        </div>
        <div
          style={{
            fontSize: 68,
            fontWeight: 700,
            color: "#e8edf4",
            display: "flex",
          }}
        >
          {profile.fullName}
        </div>
        <div
          style={{
            marginTop: 20,
            fontSize: 36,
            fontWeight: 600,
            display: "flex",
            backgroundImage: "linear-gradient(120deg, #22d3ee 0%, #7dd8ff 45%, #7c3aed 100%)",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          {profile.role}
        </div>
        <div
          style={{
            marginTop: 28,
            fontSize: 24,
            color: "#8b96a8",
            maxWidth: 820,
            display: "flex",
          }}
        >
          {profile.tagline}
        </div>
      </div>
    ),
    { ...size }
  );
}
