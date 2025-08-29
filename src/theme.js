import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0d47a1", // azul oscuro
    },
    secondary: {
      main: "#ff9800", // naranja para acentos
    },
    background: {
      default: "#fafafa", // gris claro
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
    h1: {
      fontSize: "3rem",
      fontWeight: 600,
    },
    h4: {
      fontWeight: 500,
      marginBottom: "1rem",
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.6,
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: "12px",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          "&:hover": {
            transform: "translateY(-5px)",
            boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
          },
        },
      },
    },
  },
});

export default theme;
