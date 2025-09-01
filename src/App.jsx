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
    backgroundColor: "black",   // 🔹 Fondo negro sólido
    boxShadow: "none",          // 🔹 Sin sombra extra
  }}
>
  <Toolbar
    sx={{
      justifyContent: "center",
      minHeight: 48,            // 🔹 Más bajo que el default (64px)
    }}
  >
    {/* Botón genérico, estilos aplicados a todos */}
    {[
      { id: "mision", label: "Misión y Visión" },
      { id: "origen", label: "Origen del Estudio" },
      { id: "desarrollo", label: "Desarrollo de Videojuegos" },
      { id: "equipo", label: "Equipo" }
    ].map(({ id, label }) => (
      <Button
        key={id}
        onClick={() => scrollTo(id)}
        sx={{
          color: "white",        // 🔹 Texto blanco (contrasta con negro)
          fontSize: "1rem",      // 🔹 Texto un poco más grande
          textTransform: "none", // 🔹 Evita que se pongan mayúsculas
          px: 2,                 // 🔹 Padding horizontal
          "&:focus": { outline: "none" }, // 🔹 Elimina el contorno azul
        }}
      >
        {label}
      </Button>
    ))}
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
