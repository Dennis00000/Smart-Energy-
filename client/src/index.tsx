import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import App from './App';
import './index.css';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#4CAF50', // Softer green
      light: '#8BC34A',
      dark: '#388E3C',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#FFC107', // Softer amber
      light: '#FFD740',
      dark: '#FFB300',
      contrastText: '#FFFFFF',
    },
    error: {
      main: '#E57373', // Softer red
    },
    warning: {
      main: '#FFB74D', // Softer orange
    },
    info: {
      main: '#64B5F6', // Softer blue
    },
    success: {
      main: '#81C784', // Softer light green
    },
    background: {
      default: '#F8F9FA', // Very light gray background
      paper: '#FFFFFF',
    },
    text: {
      primary: '#343A40', // Darker gray for primary text
      secondary: '#6C757D', // Medium gray for secondary text
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h4: {
      fontWeight: 700,
      marginBottom: '1.5rem',
      color: '#343A40',
    },
    h6: {
      fontWeight: 600,
      marginBottom: '1rem',
      color: '#343A40',
    },
    body1: {
      lineHeight: 1.6,
    },
    button: {
      fontWeight: 600,
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#FFFFFF', // White app bar
          boxShadow: '0 2px 4px rgba(0,0,0,0.05)', // Subtle shadow
          color: '#343A40',
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          minHeight: '64px', // Standard toolbar height
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: '8px',
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
          },
        },
      },
      variants: [
        {
          props: { variant: 'contained' },
          style: {
            boxShadow: 'none',
            '&:hover': {
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            },
          },
        },
      ],
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
          boxShadow: '0 6px 20px rgba(0,0,0,0.08)', // More prominent, softer shadow
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
          boxShadow: '0 6px 20px rgba(0,0,0,0.08)',
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          marginBottom: '4px',
          '&:last-child': {
            marginBottom: 0,
          },
        },
      },
    },
  },
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
); 