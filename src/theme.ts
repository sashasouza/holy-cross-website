'use client';
import { createTheme } from '@mui/material/styles';
import { Poppins } from 'next/font/google';

const lato = Poppins({
    weight: ['100', '300', '400', '700', '900'],
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
    //components: {
    // MuiAlert: {
    //     styleOverrides: {
    //         root: {
    //             variants: [
    //                 {
    //                     props: { severity: 'info' },
    //                     style: {
    //                         backgroundColor: '#60a5fa',
    //                     },
    //                 },
    //             ],
    //         },
    //     },
    // },
    //},
});

export default theme;
