import { Box, Typography } from '@mui/material';

export default function Footer() {
    return (
        <Box
            component="footer"
            sx={{
                textAlign: 'center',
                py: 3,
                mt: 6,
                bgcolor: (theme) => theme.palette.grey[100],
                borderTop: '1px solid',
                borderColor: (theme) => theme.palette.divider
            }}
        >
            <Typography variant="body2" color="text.secondary">
                &copy; {new Date().getFullYear()} Superkraften – Stöd vid NPF
            </Typography>
        </Box>
    );
}
