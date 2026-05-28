import { createTheme } from '@mui/material/styles'
import { indigo, green, grey } from '@mui/material/colors'
// import blue from '@mui/material/colors/blue';
// Dark theme
const surface = '#1c1c1c'
const backgroundDefault = '#121212'
const textPrimary = '#fdfdfd'

export const colors = {
  default: indigo[500],
  text: textPrimary
}
export default createTheme({
  palette: {
    mode: 'dark',
    primary: indigo,
    secondary: grey,
    success: green,
    text: {
      primary: textPrimary,
      secondary: '#979797'
    },
    background: {
      paper: surface,
      default: backgroundDefault
    }
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: surface,
          backgroundImage: 'none'
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: surface,
          backgroundImage: 'none'
        }
      }
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          backgroundColor: '#121212'
        }
      }
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: surface,
          color: textPrimary,
          backgroundImage: 'none'
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        text: {
          color: textPrimary
        },
        outlined: {
          color: textPrimary,
          borderColor: textPrimary
        }
      }
    }
  }
})
