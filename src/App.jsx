import { Box, AppBar, Toolbar, Button } from "@mui/material"
import Hero from "./components/Hero"             // Componente Hero animado
import MisionVision from "./components/MisionVision"
import Origen from "./components/Origen"
import Carrusel from "./components/Carrusel"
import Equipo from "./components/Equipo"
import Seccion from "./components/Seccion"       // Wrapper animado con fade
import Footer from "./components/Footer"

function App() {
  // Función para hacer scroll suave a las secciones
  const scrollTo = (id) => {
    const element = document.getElementById(id)
    if (element) element.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <Box>
      {/* ==================== Menú fijo ==================== */}
      <AppBar
        position="fixed"
        sx={{
          bgcolor: "black",      // 🔥 Fondo negro sólido
          boxShadow: "none",     // 🔥 Sin sombra para minimalismo
          borderRadius: 0,       // 🔥 Sin esquinas redondeadas
          height: "55px",        // 🔥 Más delgado
        }}
      >
        <Toolbar sx={{ justifyContent: "center", minHeight: "55px !important" }}>
          <Button
            sx={{
              color: "white",          // 🔥 Texto blanco para contraste
              fontSize: "1rem",        // 🔥 Un poco más grande que el default
              textTransform: "none",   // 🔥 Respeta mayúsculas/minúsculas
              mx: 1.5,                 // 🔥 Separación horizontal
              "&:hover": {
                color: "#1976d2",      // 🔥 Hover azul (puedes cambiarlo)
              },
            }}
            onClick={() => scrollTo("mision")}
          >
            Misión y Visión
          </Button>
          <Button
            sx={{
              color: "white",
              fontSize: "1rem",
              textTransform: "none",
              mx: 1.5,
              "&:hover": { color: "#1976d2" },
            }}
            onClick={() => scrollTo("origen")}
          >
            Origen del Estudio
          </Button>
          <Button
            sx={{
              color: "white",
              fontSize: "1rem",
              textTransform: "none",
              mx: 1.5,
              "&:hover": { color: "#1976d2" },
            }}
            onClick={() => scrollTo("desarrollo")}
          >
            Desarrollo de Videojuegos
          </Button>
          <Button
            sx={{
              color: "white",
              fontSize: "1rem",
              textTransform: "none",
              mx: 1.5,
              "&:hover": { color: "#1976d2" },
            }}
            onClick={() => scrollTo("equipo")}
          >
            Equipo
          </Button>
        </Toolbar>
      </AppBar>

      {/* ==================== Hero principal ==================== */}
      <Hero />

      {/* ==================== Secciones animadas con fade ==================== */}
      <Seccion id="mision">
        <MisionVision />
      </Seccion>

      <Seccion id="origen">
        <Origen />
      </Seccion>

      <Seccion id="desarrollo">
        <Carrusel />
      </Seccion>

      <Seccion id="equipo">
        <Equipo />
      </Seccion>

      {/* ==================== Footer ==================== */}
      <Footer />
    </Box>
  )
}

export default App
