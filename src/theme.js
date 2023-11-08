import { red } from "@material-ui/core/colors";
import { createMuiTheme } from "@material-ui/core/styles";

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    type: "light",
    primary: {
      main: "#EEBDEC",
      light: "#61dafb",
      dark: "#21a1c4",
    },
    secondary: {
      main: "#EEBDEC",
      light: "#61dafb",
      dark: "#21a1c4",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#e1e3e2",
    },
    text: {
      primary: "#34013F",
    },
  },
  typography: {
    fontFamily: ["Chilanka", "cursive"].join(","),
  },
  overrides: {
    MuiPaper: {
      root: {
        padding: "20px 10px",
        margin: "10px",
        backgroundColor: "#fff",
      },
    },
    MuiButton: {
      root: {
        margin: "5px",
      },
    },
    MuiCssBaseline: {
      "@global": {
        "*::-webkit-scrollbar": {
          width: "8px",
          height: "8px",
        },
        "*::-webkit-scrollbar-track": {
          background: "inherit",
          boxShadow: "inset 0 0 6px rgba(0, 0, 0, 0.3)",
        },
        "*::-webkit-scrollbar-thumb": {
          borderRadius: "20px",
          backgroundColor: "#e1e3e2",
        },
        "*::-webkit-scrollbar-corner": {
          background: "inherit",
        },
      },
    },
    MuiFormControlLabel: {
      label: {
        fontSize: "2.5vh",
      },
    },
  },
});

export default theme;