import { useTheme, createTheme } from "@material-ui/core/styles";
import { indigo, green, grey } from "@material-ui/core/colors";
// import blue from '@mui/material/colors/blue';
// Dark theme
export const colors = {
  default: indigo[500],
  text: "#fdfdfd",
};
export default createTheme({
  palette: {
    type: "dark",
    primary: indigo,
    secondary: grey,
    success: green,
    background: {
      paper: "#1c1c1c",
      default: "#121212",
    },
  },
});
