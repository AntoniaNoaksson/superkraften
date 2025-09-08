import { Box, Typography } from '@mui/material';

export default function Footer() {
    return (
        <Box
            component="footer"
            sx={{ textAlign: 'center', py: 3, mt: 4, bgcolor: '#f5f5f5' }}
        >
            <Typography variant="body2" color="textSecondary">
                &copy; {new Date().getFullYear()} Superkraften – Stöd vid NPF
            </Typography>
        </Box>
    );
}
