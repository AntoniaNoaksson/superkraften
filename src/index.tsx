import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#6CAF69'
        },
        secondary: {
            main: '#F4A261'
        },
        background: {
            default: '#F6F1E7',
            paper: '#FFFFFF'
        },
        text: {
            primary: '#37474F',
            secondary: '#90AFC5'
        },
        warning: {
            main: '#FFE066'
        }
    }
});

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </React.StrictMode>
);
