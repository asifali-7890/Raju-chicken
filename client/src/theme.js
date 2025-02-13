import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#e65100', // Orange
      contrastText: '#fff',
    },
    secondary: {
      main: '#4a148c', // Purple
    },
  },
  typography: {
    fontFamily: '"Poppins", "Helvetica", "Arial", sans-serif',
  },
});

export default theme;