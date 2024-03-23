'use client'

import { Box, Container, ThemeProvider, Typography } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import theme from "@/theme";

function ErrorBoundary({
    error
}: {
    error: Error,
}) {
    let errorMessage;

    if (error.message === "exstention not instaled") {
        errorMessage = "Please install metamask extention for continue";
    } else if (error.message === "4001") {
        errorMessage = "You must sign up for continue"
    } else {
        errorMessage = "Somethink going wrong";
        console.error(error);
    }

    return (
        <html>
            <body>
                <AppRouterCacheProvider options={{ enableCssLayer: true }}>
                    <ThemeProvider theme={theme}>
                        <Container sx={{ bgcolor: '#f44336' }} maxWidth={false}>
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center"
                                }}>
                                <ErrorOutlineIcon sx={{ fontSize: "120px", color: "#ba000d" }} />
                                <Typography
                                    mt={1} variant="h6" maxWidth={"sm"}
                                    sx={{ textAlign: "center", color: "primary.contrastText" }}>
                                    {errorMessage}
                                </Typography>
                            </Box>
                        </Container >
                    </ThemeProvider>
                </AppRouterCacheProvider>
            </body>
        </html >
    )
}

export default ErrorBoundary