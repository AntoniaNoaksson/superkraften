import React, { useState, useEffect } from 'react';
import { Box, Paper, Typography, Button, Stack, Divider } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const pepQuotes = [
    'Du är starkare än du tror 💪',
    'Små steg leder till stora framgångar 🚀',
    'Ge aldrig upp – superkrafter byggs dag för dag!',
    'Dina ansträngningar räknas varje dag 🌟'
];

export default function Home() {
    const [quote, setQuote] = useState('');

    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * pepQuotes.length);
        setQuote(pepQuotes[randomIndex]);
    }, []);

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
                    sx={{
                        p: { xs: 2, sm: 4 },
                        textAlign: 'center',
                        borderRadius: 3
                    }}
                >
                    <Typography
                        variant="h4"
                        gutterBottom
                        sx={{ fontWeight: 'bold', color: '#1976d2' }}
                    >
                        Din superkraft börjar här — för du är viktig precis som
                        du är.
                    </Typography>

                    <Typography variant="h6" paragraph sx={{ mb: 3 }}>
                        Välkommen till Superkraften — en trygg plats där du och
                        din familj får stöd, pepp och verktyg för en fungerande
                        vardag.
                    </Typography>

                    <Typography
                        variant="body1"
                        paragraph
                        sx={{ fontSize: '1.1rem', color: '#333' }}
                    >
                        Jag finns här för dig och din familj, oavsett om du är
                        barn, ung eller förälder. Tillsammans kan vi hitta
                        lösningar som gör vardagen enklare, tryggare och mer
                        glädjefylld.
                    </Typography>

                    <Paper
                        elevation={1}
                        sx={{
                            p: 2,
                            mb: 3,
                            bgcolor: '#e3f2fd',
                            borderRadius: 2,
                            fontStyle: 'italic',
                            color: '#1565c0',
                            boxShadow: 'none'
                        }}
                    >
                        {quote}
                    </Paper>

                    <Stack
                        direction="row"
                        spacing={2}
                        justifyContent="center"
                        sx={{ mb: 3 }}
                    >
                        <Button
                            variant="contained"
                            color="primary"
                            component={RouterLink}
                            to="/unga"
                            size="large"
                            sx={{ fontWeight: 'bold' }}
                        >
                            För Unga
                        </Button>
                        <Button
                            variant="outlined"
                            color="primary"
                            component={RouterLink}
                            to="/vardnadshavare"
                            size="large"
                            sx={{ fontWeight: 'bold' }}
                        >
                            För Vårdnadshavare
                        </Button>
                        <Button
                            variant="outlined"
                            color="primary"
                            component={RouterLink}
                            to="/skola"
                            size="large"
                            sx={{ fontWeight: 'bold' }}
                        >
                            Skola/Förskola
                        </Button>
                    </Stack>

                    <Divider sx={{ my: 4 }} />

                    <Typography variant="body2" color="text.secondary">
                        Behöver du någon att prata med eller personlig hjälp?
                        Tveka inte att kontakta oss på{' '}
                        <a
                            href="mailto:stod@superkraften.se"
                            style={{
                                color: '#1976d2',
                                textDecoration: 'none',
                                fontWeight: '500'
                            }}
                        >
                            stod@superkraften.se
                        </a>
                        . Du är aldrig ensam på din resa.
                    </Typography>
                </Paper>
            </Box>
        </Box>
    );
}
