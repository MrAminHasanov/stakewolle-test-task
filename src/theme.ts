'use client';

import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const roboto = Roboto({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
});

const theme = createTheme({
    typography: {
        fontFamily: roboto.style.fontFamily,
    },
    palette: {
        primary: {
            light: '#757ce8',
            main: '#1976d2',
            dark: '#002884',
            contrastText: '#fff',
        },
        secondary: {
            light: '#ff7961',
            main: '#f44336',
            dark: '#ba000d',
            contrastText: '#000',
        },
        info: {
            light: '#38a8a2',
            main: '#afafaf',
            contrastText: "#f0f0f0",
            dark: "#afafaf"
        }
    },
    components: {
        MuiContainer: {
            styleOverrides: {
                root: {
                    height: '100vh',
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                }
            }
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    variant: "outlined",
                    marginTop:"16px"
                }
            }
        },
        MuiCssBaseline: {
            styleOverrides: {
                "*": {
                    boxSizing: "border-box",
                    margin: "0px",
                    padding: "0px",
                }
            }
        }
    }
});

export default theme;
