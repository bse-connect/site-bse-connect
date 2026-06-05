import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "BSE Connect — Systèmes connectés · Sûreté · Supervision";

export default function OG() {
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
          backgroundColor: "#071a2e",
          color: "#eef4fa",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 28 }}>
          <div style={{ display: "flex", width: 10, height: 34 }}>
            <div style={{ flex: 1, backgroundColor: "#1B57B0" }} />
            <div style={{ flex: 1, backgroundColor: "#ffffff" }} />
            <div style={{ flex: 1, backgroundColor: "#E4384A" }} />
          </div>
          <div style={{ fontSize: 26, letterSpacing: 4, color: "#9fb2c6" }}>
            SYSTÈMES CONNECTÉS · SÛRETÉ · SUPERVISION
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 104, fontWeight: 700, letterSpacing: -2 }}>
          <span>BSE&nbsp;</span>
          <span style={{ color: "#49a4f0" }}>Connect</span>
        </div>
        <div style={{ display: "flex", marginTop: 24, fontSize: 34, color: "#9fb2c6", maxWidth: 900 }}>
          Sûreté électronique &amp; courants faibles · Île-de-France
        </div>
      </div>
    ),
    { ...size }
  );
}
