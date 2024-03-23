'use client'

import { Box, Container, Typography } from "@mui/material";
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

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
                <Container sx={{
                    bgcolor: 'secondary.main',
                    height: '100vh',
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                }} maxWidth={false}>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center"
                        }}>
                        <ErrorOutlineIcon sx={{ fontSize: "120px", color: "secondary.dark" }} />
                        <Typography
                            mt={1} variant="h6" maxWidth={"sm"}
                            sx={{ textAlign: "center", color: "primary.contrastText" }}>
                            {errorMessage}
                        </Typography>
                    </Box>
                </Container >
            </body>
        </html >
    )
}

export default ErrorBoundary