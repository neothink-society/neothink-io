import { ImageResponse } from "next/og"

export const runtime = "edge"
export const alt = "Neothink.io - Prosper Happily Forever"
export const size = {
  width: 1200,
  height: 675,
}
export const contentType = "image/png"

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#000000",
          backgroundImage: "radial-gradient(circle at top, rgba(255, 215, 0, 0.15) 0%, transparent 50%)",
        }}
      >
        {/* Gold accent line at top */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "4px",
            background: "linear-gradient(90deg, transparent, #FFD700, transparent)",
          }}
        />

        {/* Main content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "40px 60px",
          }}
        >
          {/* Badge */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              padding: "12px 24px",
              borderRadius: "9999px",
              border: "2px solid rgba(255, 215, 0, 0.5)",
              backgroundColor: "rgba(255, 215, 0, 0.1)",
              marginBottom: "32px",
            }}
          >
            <div
              style={{
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                backgroundColor: "#FFD700",
              }}
            />
            <span style={{ color: "#FFD700", fontSize: "24px", fontWeight: 700 }}>
              Admin of Neothink
            </span>
          </div>

          {/* Logo/Title */}
          <h1
            style={{
              fontSize: "72px",
              fontWeight: 700,
              color: "#FFFFFF",
              margin: "0 0 24px 0",
              textAlign: "center",
            }}
          >
            Neothink.io
          </h1>

          {/* Tagline */}
          <p
            style={{
              fontSize: "32px",
              color: "#FFD700",
              margin: "0 0 40px 0",
              fontWeight: 600,
            }}
          >
            Prosper Happily Forever
          </p>

          {/* Four paths */}
          <div
            style={{
              display: "flex",
              gap: "16px",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                padding: "8px 20px",
                borderRadius: "9999px",
                backgroundColor: "rgba(249, 115, 22, 0.2)",
                border: "1px solid rgba(249, 115, 22, 0.3)",
                color: "#FB923C",
                fontSize: "18px",
                fontWeight: 600,
              }}
            >
              LIVE — Prosperity
            </div>
            <div
              style={{
                padding: "8px 20px",
                borderRadius: "9999px",
                backgroundColor: "rgba(245, 158, 11, 0.2)",
                border: "1px solid rgba(245, 158, 11, 0.3)",
                color: "#FBBF24",
                fontSize: "18px",
                fontWeight: 600,
              }}
            >
              LOVE — Happiness
            </div>
            <div
              style={{
                padding: "8px 20px",
                borderRadius: "9999px",
                backgroundColor: "rgba(239, 68, 68, 0.2)",
                border: "1px solid rgba(239, 68, 68, 0.3)",
                color: "#F87171",
                fontSize: "18px",
                fontWeight: 600,
              }}
            >
              LIFE — Longevity
            </div>
            <div
              style={{
                padding: "8px 20px",
                borderRadius: "9999px",
                backgroundColor: "rgba(234, 179, 8, 0.2)",
                border: "1px solid rgba(234, 179, 8, 0.3)",
                color: "#FACC15",
                fontSize: "18px",
                fontWeight: 600,
              }}
            >
              LUCK — Luckiness
            </div>
          </div>
        </div>

        {/* Bottom URL */}
        <div
          style={{
            position: "absolute",
            bottom: "32px",
            color: "rgba(255, 255, 255, 0.6)",
            fontSize: "20px",
          }}
        >
          neothink.io
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
