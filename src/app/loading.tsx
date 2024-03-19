"use client"

import { useSelector } from 'react-redux';
import { accauntStatusMessageSelector } from '@/store/features/account/selectors';
import { statusMessage } from '@/store/features/account/types';
import { Box, CircularProgress, Container, Typography } from '@mui/material';


function Loading() {
    const statusMessage: statusMessage = useSelector(accauntStatusMessageSelector);

    return (
        <Container sx={{
            bgcolor: '#cfe8fc',
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
                <CircularProgress />
                <Typography mt={1} variant="h6"
                    sx={{ maxWidth: "220px", textAlign: "center" }}>
                    {statusMessage}
                </Typography>
            </Box>
        </Container >
    )
}

export default Loading