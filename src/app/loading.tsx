"use client"

import { useAppSelector } from '@/hooks/reduxHooks';
import { accauntStatusMessageSelector } from '@/store/features/account/selectors';
import { statusMessage } from '@/store/features/account/types';
import { Box, CircularProgress, Container, Typography } from '@mui/material';


function Loading() {
    const statusMessage: statusMessage = useAppSelector(accauntStatusMessageSelector);

    return (
        <Container sx={{ bgcolor: '#cfe8fc' }} maxWidth={false}>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center"
                }}>
                <CircularProgress />
                <Typography
                    mt={1} variant="h6" maxWidth={"sm"}
                    sx={{ textAlign: "center" }}>
                    {statusMessage}
                </Typography>
            </Box>
        </Container >
    )
}

export default Loading