import React from 'react';
import { Box, Paper, Typography, Button, Stack } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

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
                    maxWidth: 600
                }}
            >
                <Paper
                    elevation={3}
                    sx={{ p: { xs: 2, sm: 4 }, textAlign: 'center' }}
                >
                    <Typography variant="h3" gutterBottom>
                        Välkommen till Superkraften
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 2 }}>
                        En hjälpsida för barn, unga och föräldrar som lever med
                        NPF.
                    </Typography>
                    <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ mb: 3 }}
                    >
                        Här hittar du information, stöd och inspiration för att
                        stärka superkrafterna hos alla barn och unga.
                    </Typography>

                    {/* Knappar för att välja sida */}
                    <Stack direction="row" spacing={2} justifyContent="center">
                        <Button
                            variant="contained"
                            color="primary"
                            component={RouterLink}
                            to="/unga"
                            size="large"
                        >
                            För Unga
                        </Button>
                        <Button
                            variant="outlined"
                            color="primary"
                            component={RouterLink}
                            to="/vardnadshavare"
                            size="large"
                        >
                            För Vårdnadshavare
                        </Button>
                    </Stack>
                </Paper>
            </Box>
        </Box>
    );
}
