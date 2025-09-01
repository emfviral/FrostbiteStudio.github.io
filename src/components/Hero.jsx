// src/components/Hero.jsx
import { Typography, Box } from "@mui/material"
import { useState, useEffect } from "react"

export default function Hero() {
  const fullTitle = "Frostbite Studio"
  const fullSubtitle = "Desarrollo de videojuegos con pasión y creatividad"

  const [titleText, setTitleText] = useState("")
  const [subtitleText, setSubtitleText] = useState("")

  useEffect(() => {
    let titleIndex = 0
    let subtitleIndex = 0

    const titleInterval = setInterval(() => {
      if (titleIndex < fullTitle.length) {
        setTitleText(fullTitle.slice(0, titleIndex + 1))
        titleIndex++
      } else {
        clearInterval(titleInterval)
        const subtitleInterval = setInterval(() => {
          if (subtitleIndex < fullSubtitle.length) {
            setSubtitleText(fullSubtitle.slice(0, subtitleIndex + 1))
            subtitleIndex++
          } else {
            clearInterval(subtitleInterval)
          }
        }, 50)
      }
    }, 120)

    return () => clearInterval(titleInterval)
  }, [])

  return (
    <Box
      component="header"
      sx={{
        position: "relative",
        height: "100vh",
        minHeight: "600px",
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        px: 2,
        mt: 0,
  backgroundImage: "url('/img/banners/banner_principal.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay oscuro */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          bgcolor: "rgba(0,0,0,0.5)",
          zIndex: 1,
        }}
      />

      {/* Texto animado */}
      <Box sx={{ position: "relative", zIndex: 2 }}>
        <Typography variant="h2" component="h1" sx={{ fontWeight: "bold" }}>
          {titleText}
          <span className="blinking-cursor">_</span>
        </Typography>
        <Typography variant="h5" component="p" sx={{ mt: 2 }}>
          {subtitleText}
        </Typography>
      </Box>

      {/* Indicador scroll */}
      <Box
        sx={{
          position: "absolute",
          bottom: 20,
          zIndex: 2,
          fontSize: "0.9rem",
          opacity: 0.7,
        }}
      >
        <span>▼ Scroll</span>
      </Box>
    </Box>
  )
}
