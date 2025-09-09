import React from 'react';
import {
    Box,
    Paper,
    Typography,
    List,
    ListItem,
    ListItemText,
    Link
} from '@mui/material';

export default function Vardnadshavare() {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 6, px: 2 }}>
            <Box sx={{ width: '100%', maxWidth: 700 }}>
                <Paper elevation={3} sx={{ p: { xs: 2, sm: 4 } }}>
                    <Typography variant="h3" gutterBottom>
                        För Vårdnadshavare
                    </Typography>

                    <Typography variant="h5" sx={{ mt: 3, mb: 1 }}>
                        Information & Fakta
                    </Typography>
                    <Typography variant="body1" paragraph>
                        Här hittar du lättförståelig information om NPF och tips
                        för vardagen.
                    </Typography>

                    <Typography variant="h5" sx={{ mt: 3, mb: 1 }}>
                        Stöd i vardagen
                    </Typography>
                    <List>
                        <ListItem>
                            <ListItemText primary="Rutiner och struktur för hemmet" />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Verktyg för att hantera utmanande situationer" />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Tips för att stärka självkänslan" />
                        </ListItem>
                    </List>

                    <Typography variant="h5" sx={{ mt: 3, mb: 1 }}>
                        Rättigheter & Hjälp
                    </Typography>
                    <List>
                        <ListItem>
                            <ListItemText
                                primary="Skolans ansvar och stöd"
                                secondary={
                                    <Link
                                        href="https://www.skolverket.se"
                                        target="_blank"
                                        rel="noopener"
                                    >
                                        Läs mer på Skolverket
                                    </Link>
                                }
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText
                                primary="Socialtjänstens stöd"
                                secondary={
                                    <Link
                                        href="https://www.socialstyrelsen.se"
                                        target="_blank"
                                        rel="noopener"
                                    >
                                        Läs mer på Socialstyrelsen
                                    </Link>
                                }
                            />
                        </ListItem>
                    </List>

                    <Typography variant="h5" sx={{ mt: 3, mb: 1 }}>
                        Kontakta oss
                    </Typography>
                    <Typography variant="body2">
                        Behöver du personlig hjälp? Hör av dig via{' '}
                        <Link href="mailto:stöd@superkraften.se">
                            stöd@superkraften.se
                        </Link>
                    </Typography>
                </Paper>
            </Box>
        </Box>
    );
}
