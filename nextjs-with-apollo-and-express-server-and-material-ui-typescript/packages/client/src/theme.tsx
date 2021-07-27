import { createTheme } from "@material-ui/core/styles";
import red from "@material-ui/core/colors/red";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#fff",
    },
  },
  overrides: {
    MuiButton: {
      containedSizeLarge: {
        fontSize: "1.5rem",
      },
      root: {
        textTransform: "none",
      },
    },
    MuiPaper: {
      root: {
        minHeight: "50px",
        padding: "10px",
        margin: "5px",
      },
    },
  },
});

export default theme;
