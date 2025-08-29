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
      <AppBar position="fixed" color="primary">
        <Toolbar sx={{ justifyContent: "center" }}>
          <Button color="inherit" onClick={() => scrollTo("mision")}>Misión y Visión</Button>
          <Button color="inherit" onClick={() => scrollTo("origen")}>Origen del Estudio</Button>
          <Button color="inherit" onClick={() => scrollTo("desarrollo")}>Desarrollo de Videojuegos</Button>
          <Button color="inherit" onClick={() => scrollTo("equipo")}>Equipo</Button>
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
