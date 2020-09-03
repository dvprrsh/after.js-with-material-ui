import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    common: {
      black: "#000",
      white: "#fff",
    },
    background: {
      paper: "#fff",
      default: "#fafafa",
    },
    primary: {
      light: "rgba(255, 112, 113, 1)",
      main: "rgba(230, 57, 70, 1)",
      dark: "rgba(173, 0, 31, 1)",
      contrastText: "rgba(255, 255, 255, 1)",
    },
    secondary: {
      light: "rgba(218, 255, 255, 1)",
      main: "rgba(168, 218, 220, 1)",
      dark: "rgba(120, 168, 170, 1)",
      contrastText: "rgba(0, 0, 0, 1)",
    },
    error: {
      light: "#e57373",
      main: "#f44336",
      dark: "#d32f2f",
      contrastText: "#fff",
    },
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(0, 0, 0, 0.54)",
      disabled: "rgba(0, 0, 0, 0.38)",
      hint: "rgba(0, 0, 0, 0.38)",
    },
  },
});

export default theme;
