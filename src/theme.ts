'use client';
import { createTheme } from '@mui/material/styles';
import { Poppins } from 'next/font/google';

const lato = Poppins({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
});

const theme = createTheme({
    colorSchemes: { light: true, dark: false },
    cssVariables: {
        colorSchemeSelector: 'class',
    },
    palette: {
        primary: {
            main: '#0B3546',
            light: '#fffeff',
            dark: '#061B23',
            contrastText: '#fffeff'
        },
        secondary: {
            main: '#fffeff',
            light: '#FAB39E',
            dark: '#F78764',
        },
        text: {
            primary: '#061B23',
            secondary: '#bdbdbd'
        }
    },
    typography: {
        fontFamily: lato.style.fontFamily,
        body1: {
            fontSize: '0.75rem',
        },
    },
});

export default theme;
