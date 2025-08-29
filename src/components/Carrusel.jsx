import { Box, Typography, Paper, LinearProgress } from '@mui/material'
import { useState, useEffect } from 'react'
import juegosData from '../data/juegos.json'

export default function Carrusel() {
  const [indice, setIndice] = useState(0)
  const [progreso, setProgreso] = useState(0)
  const total = juegosData.length

  const juego = juegosData[indice]

  // Auto cambio cada 5s
  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndice((prev) => (prev + 1) % total)
      setProgreso(0)
    }, 5000)

    const progresoInterval = setInterval(() => {
      setProgreso((prev) => (prev >= 100 ? 100 : prev + 2))
    }, 100)

    return () => {
      clearInterval(intervalo)
      clearInterval(progresoInterval)
    }
  }, [total])

  return (
    <Box sx={{ py: 10, px: { xs: 2, md: 8 }, bgcolor: '#0d0d0d', color: '#fff' }}>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '1fr 2fr' },
          alignItems: 'center',
          gap: 6,
        }}
      >
        {/* === IZQUIERDA: título y subtítulo === */}
        <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
          <Typography
            variant="h4"
            sx={{
              mb: 2,
              fontFamily: '"Neue Haas Grotesk 65 Medium", sans-serif',
              fontWeight: 600,
            }}
          >
            Desarrollo de Videojuegos
          </Typography>
          <Typography
            variant="body1"
            sx={{
              maxWidth: 500,
              opacity: 0.85,
              fontFamily: '"URW Grotesk SC Regular", sans-serif',
              fontSize: '1.05rem',
              lineHeight: 1.6,
            }}
          >
            Estos son algunos de nuestros proyectos más recientes, donde mezclamos
            creatividad, tecnología y narrativa para entregar experiencias únicas.
          </Typography>
        </Box>

        {/* === DERECHA: un solo juego === */}
        <Box>
          <Paper
            sx={{
              p: 4,
              width: { xs: '100%', md: 650 },
              borderRadius: 4,
              backgroundColor: '#1a1a1a',
              color: '#fff',
              transition: 'transform 0.3s, box-shadow 0.3s',
              mx: 'auto',
              '&:hover': {
                transform: 'translateY(-8px)',
                boxShadow: '0 10px 25px rgba(25,118,210,0.5)',
              },
            }}
            elevation={5}
          >
            <img
              src={juego.imagen}
              alt={juego.nombre}
              style={{
                width: '100%',
                borderRadius: 12,
                height: 380,
                objectFit: 'cover',
              }}
            />
            <Typography
              variant="h5"
              sx={{
                mt: 3,
                fontFamily: '"Neue Haas Grotesk 65 Medium", sans-serif',
                fontWeight: 'bold',
              }}
            >
              {juego.nombre}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mt: 2,
                fontFamily: '"URW Grotesk SC Regular", sans-serif',
                opacity: 0.9,
              }}
            >
              {juego.descripcion}
            </Typography>
          </Paper>

          {/* Barra de progreso */}
          <Box sx={{ mt: 4, width: '100%' }}>
            <LinearProgress
              variant="determinate"
              value={progreso}
              sx={{
                height: 8,
                borderRadius: 5,
                backgroundColor: '#333',
                '& .MuiLinearProgress-bar': {
                  backgroundColor: '#1976d2',
                },
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

