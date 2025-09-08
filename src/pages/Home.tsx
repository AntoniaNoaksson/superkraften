import React from 'react';
import { Box, Paper, Typography } from '@mui/material';

export default function Home() {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                mt: 6,
                px: 2
            }}
        >
            <Box
                sx={{
                    width: '100%',
                    maxWidth: 600 // maxbredd
                }}
            >
                <Paper elevation={3} sx={{ p: { xs: 2, sm: 4 } }}>
                    <Typography variant="h3" gutterBottom>
                        Välkommen till Superkraften
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 2 }}>
                        En hjälpsida för barn, unga och föräldrar som lever med
                        NPF.
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Här hittar du information, stöd och inspiration för att
                        stärka superkrafterna hos alla barn och unga.
                    </Typography>
                </Paper>
            </Box>
        </Box>
    );
}
