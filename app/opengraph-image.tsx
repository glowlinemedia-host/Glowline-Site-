import { ImageResponse } from "next/og";

export const alt = "Glowline Media, helping businesses grow online";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: 88, background: "#14213D", color: "#F7F4ED" }}>
      <div style={{ display: "flex", fontSize: 82, alignItems: "baseline", letterSpacing: -3 }}>
        <span style={{ fontFamily: "serif", fontStyle: "italic" }}>Glowline</span>
        <span style={{ marginLeft: 20, fontWeight: 700 }}>media</span>
      </div>
      <div style={{ display: "flex", width: 120, height: 8, marginTop: 34, marginBottom: 34, background: "#AFCBFF", borderRadius: 8 }} />
      <div style={{ display: "flex", fontSize: 38, maxWidth: 800, lineHeight: 1.25 }}>Helping South African businesses grow online.</div>
    </div>,
    size,
  );
}
