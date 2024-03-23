import { Box, Button, Typography } from '@mui/material';

interface componentProps {
    submitMessage: string,
}

function SendTransaction({ submitMessage }: componentProps) {

    return (
        <Box sx={{ position: "relative", mt: 6 }}>
            <Button
                fullWidth={true}
                variant="contained"
                size="large"
                type="submit">
                <Typography sx={{ fontWeight: "600" }}>
                    Start Transaction
                </Typography>
            </Button>{
                submitMessage &&
                <Typography
                    sx={{
                        fontWeight: "600",
                        color: "secondary.main",
                        position: "absolute",
                        right: "100%",
                        transform: "translate(100%,-100%)",
                        fontSize: "14px",
                        whiteSpace:"nowrap"
                    }} component="span">
                    {submitMessage}
                </Typography>
            }
        </Box>
    )
}

export default SendTransaction