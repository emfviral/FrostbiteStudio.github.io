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
