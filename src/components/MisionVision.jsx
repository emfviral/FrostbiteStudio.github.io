import { Box, Typography, Paper, List, ListItem, ListItemIcon, ListItemText, Stack } from "@mui/material";
import { Flag, Visibility, EmojiObjects, CheckCircle } from "@mui/icons-material";

export default function MisionVision() {
  return (
    <Box
      sx={{
        py: 10,
        px: 4,
        bgcolor: "#0d0d0d",
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
        gap: 4,
      }}
    >
      {/* Misión */}
      <Paper elevation={4} className="MuiPaper-root">
        <Stack spacing={2}>
          <Stack direction="row" spacing={1.5} alignItems="center">
            <Flag sx={{ fontSize: 40, color: "primary.main" }} />
            <Typography variant="h4">Misión</Typography>
          </Stack>
          <List dense>
            <ListItem>
              <ListItemIcon><CheckCircle color="primary" /></ListItemIcon>
              <ListItemText primary="Crear experiencias inmersivas y memorables que conecten con cada jugador." />
            </ListItem>
            <ListItem>
              <ListItemIcon><CheckCircle color="primary" /></ListItemIcon>
              <ListItemText primary="Iterar rápido y aprender del feedback de la comunidad." />
            </ListItem>
            <ListItem>
              <ListItemIcon><CheckCircle color="primary" /></ListItemIcon>
              <ListItemText primary="Mantener altos estándares artísticos y técnicos." />
            </ListItem>
          </List>
        </Stack>
      </Paper>

      {/* Visión */}
      <Paper elevation={4} className="MuiPaper-root">
        <Stack spacing={2}>
          <Stack direction="row" spacing={1.5} alignItems="center">
            <Visibility sx={{ fontSize: 40, color: "primary.main" }} />
            <Typography variant="h4">Visión</Typography>
          </Stack>
          <List dense>
            <ListItem>
              <ListItemIcon><CheckCircle color="primary" /></ListItemIcon>
              <ListItemText primary="Ser un estudio referente del desarrollo indie a nivel internacional." />
            </ListItem>
            <ListItem>
              <ListItemIcon><CheckCircle color="primary" /></ListItemIcon>
              <ListItemText primary="Construir una comunidad cercana en torno a nuestros juegos." />
            </ListItem>
            <ListItem>
              <ListItemIcon><CheckCircle color="primary" /></ListItemIcon>
              <ListItemText primary="Crecer de forma sostenible y ética." />
            </ListItem>
          </List>
        </Stack>
      </Paper>

      {/* Valores */}
      <Paper elevation={4} className="MuiPaper-root">
        <Stack spacing={2}>
          <Stack direction="row" spacing={1.5} alignItems="center">
            <EmojiObjects sx={{ fontSize: 40, color: "primary.main" }} />
            <Typography variant="h4">Valores</Typography>
          </Stack>
          <List dense>
            <ListItem>
              <ListItemIcon><CheckCircle color="primary" /></ListItemIcon>
              <ListItemText primary="Pasión y creatividad como motor del equipo." />
            </ListItem>
            <ListItem>
              <ListItemIcon><CheckCircle color="primary" /></ListItemIcon>
              <ListItemText primary="Colaboración y respeto." />
            </ListItem>
            <ListItem>
              <ListItemIcon><CheckCircle color="primary" /></ListItemIcon>
              <ListItemText primary="Responsabilidad con los jugadores." />
            </ListItem>
          </List>
        </Stack>
      </Paper>
    </Box>
  );
}
