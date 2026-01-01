"use client"

import { useEffect } from "react"

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error("Global application error:", error)
  }, [error])

  return (
    <html lang="en">
      <body style={{
        backgroundColor: "#000",
        color: "#fff",
        fontFamily: "system-ui, sans-serif",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        margin: 0,
        padding: "1rem"
      }}>
        <div style={{ textAlign: "center", maxWidth: "400px" }}>
          <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Critical Error</h1>
          <p style={{ color: "rgba(255,255,255,0.7)", marginBottom: "1.5rem" }}>
            A critical error has occurred. Please try again.
          </p>
          {error.digest && (
            <p style={{ fontFamily: "monospace", fontSize: "0.875rem", color: "rgba(255,255,255,0.5)", marginBottom: "1.5rem" }}>
              Error ID: {error.digest}
            </p>
          )}
          <button
            onClick={reset}
            style={{
              backgroundColor: "#FFD700",
              color: "#000",
              border: "none",
              padding: "0.75rem 1.5rem",
              borderRadius: "0.5rem",
              cursor: "pointer",
              fontWeight: "bold",
              marginRight: "0.5rem"
            }}
          >
            Try again
          </button>
          <button
            onClick={() => window.location.href = "/"}
            style={{
              backgroundColor: "transparent",
              color: "#fff",
              border: "1px solid rgba(255,255,255,0.2)",
              padding: "0.75rem 1.5rem",
              borderRadius: "0.5rem",
              cursor: "pointer"
            }}
          >
            Return home
          </button>
        </div>
      </body>
    </html>
  )
}
