import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#635bdb', dark: '#5149c5', light: '#eeedff' },
    background: { default: '#f5f6fa', paper: '#ffffff' },
    text: { primary: '#24243a', secondary: '#85869a' },
    success: { main: '#27a77a' },
  },
  shape: { borderRadius: 14 },
  typography: {
    fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    button: { textTransform: 'none', fontWeight: 600 },
  },
  components: {
    MuiButton: { styleOverrides: { root: { borderRadius: 11, boxShadow: 'none' } } },
    MuiPaper: { styleOverrides: { rounded: { borderRadius: 18 } } },
  },
});
