import { Box, Typography } from '@mui/material';

export default function Origen() {
  return (
    <Box sx={{ py: 10, px: 4, bgcolor: '#0d0d0d', textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>
        Origen del Estudio
      </Typography>
      <Typography variant="body1" sx={{ maxWidth: 800, mx: 'auto', mt: 2 }}>
        Frostbite Studio nació en 2020 por un grupo de amigos apasionados por los videojuegos. 
        Comenzamos con proyectos pequeños, aprendiendo y perfeccionando nuestro arte, 
        hasta consolidarnos como un estudio independiente con ambición de crear grandes experiencias.
      </Typography>
    </Box>
  )
}
