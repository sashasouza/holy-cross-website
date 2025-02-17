'use client';
import { createTheme } from '@mui/material/styles';
// import { Lato } from 'next/font/google';

// const lato = Lato({
//     weight: ['100', '300', '400', '700', '900'],
//     subsets: ['latin'],
//     display: 'swap',
// });

const theme = createTheme({
    colorSchemes: { light: true, dark: false },
    cssVariables: {
        colorSchemeSelector: 'class',
    },
    // palette: {
    //     primary: {
    //         main: 'white',
    //         light: 'white',
    //         dark: 'white',
    //         contrastText: 'black',
    //     },
    // },
    // typography: {
    //     fontFamily: lato.style.fontFamily,
    // },
    // components: {
    //     MuiAlert: {
    //         styleOverrides: {
    //             root: {
    //                 variants: [
    //                     {
    //                         props: { severity: 'info' },
    //                         style: {
    //                             backgroundColor: '#60a5fa',
    //                         },
    //                     },
    //                 ],
    //             },
    //         },
    //     },
    // },
});

export default theme;
