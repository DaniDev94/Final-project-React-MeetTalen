import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';


const theme = createTheme({
    palette: {
        neutral: {
            main: '#ffffff',
            contrastText: '#0b4f6e',
        },
    },
});


export default function ButtonDark() {
    return (
        <ThemeProvider theme={theme}>
            <Button sx={{ fontFamily: "Montserrat", padding: '0.8rem 6.5rem', fontWeight: '600', fontSize: '0.8rem' }} color="neutral" variant="contained">
                Comenzar
            </Button>
        </ThemeProvider>
    )
}
