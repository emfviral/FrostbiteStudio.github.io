import { Box, Typography, Link, Stack, IconButton } from '@mui/material'
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material'

export default function Footer() {
  return (
    <Box sx={{ bgcolor: 'primary.main', color: 'white', py: 6, mt: 10 }}>
      <Typography variant="h6" align="center" gutterBottom>
        Frostbite Studio
      </Typography>
      <Typography variant="body2" align="center" sx={{ mb: 2 }}>
        © 2025 Frostbite Studio. Todos los derechos reservados.
      </Typography>

      <Stack direction="row" spacing={2} justifyContent="center">
        <IconButton color="inherit" component={Link} href="#" target="_blank">
          <Facebook />
        </IconButton>
        <IconButton color="inherit" component={Link} href="#" target="_blank">
          <Twitter />
        </IconButton>
        <IconButton color="inherit" component={Link} href="#" target="_blank">
          <Instagram />
        </IconButton>
        <IconButton color="inherit" component={Link} href="#" target="_blank">
          <LinkedIn />
        </IconButton>
      </Stack>

      <Typography variant="body2" align="center" sx={{ mt: 2 }}>
        contacto@frostbitestudio.com
      </Typography>
    </Box>
  )
}
