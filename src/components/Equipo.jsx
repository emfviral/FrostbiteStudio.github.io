import { Box, Avatar, Typography, Grid, Paper, IconButton } from '@mui/material'
import equipoData from '../data/equipo.json'

export default function Equipo() {
  return (
    <Box id="equipo" sx={{ py: 10, bgcolor: '#f5f5f5' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Equipo de Desarrollo
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {equipoData.map((miembro) => (
          <Grid item key={miembro.nombre} xs={12} sm={6} md={4}>
            <Paper 
              sx={{ 
                p: 3, 
                textAlign: 'center', 
                borderRadius: 3, 
                maxWidth: 300,
                mx: 'auto',
                transition: 'transform 0.3s',
                '&:hover': { transform: 'scale(1.05)' }
              }} 
              elevation={4}
            >
              {/* Foto del perfil */}
              <Avatar
                src={miembro.foto.replace('/img/equipo/', 'img/').replace('/img/', 'img/')}
                alt={miembro.nombre}
                sx={{ width: 100, height: 100, mx: 'auto', mb: 2 }}
              />

              {/* Nombre y cargo */}
              <Typography variant="h6">{miembro.nombre}</Typography>
              <Typography color="text.secondary">{miembro.cargo}</Typography>

              {/* Biografía */}
              <Typography sx={{ mt: 1, fontSize: '0.9rem' }}>
                {miembro.bio}
              </Typography>

              {/* Botón con ícono de Steam */}
              <IconButton
                href={miembro.steam}
                target="_blank"
                rel="noopener"
                sx={{ mt: 2 }}
              >
                <img 
                  src="img/steam_icon.png" 
                  alt="Steam" 
                  style={{ width: 32, height: 32 }}
                />
              </IconButton>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
