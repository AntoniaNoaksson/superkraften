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
import DagligRapport from '../components/DagligRapport';

import { Rapport } from '../App';
import StodVardagen from '../components/StodVardagen';



interface Props {
    rapporter: Rapport[];
}

export default function Vardnadshavare({ rapporter }: Props) {
    const scrollToId = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    const menuItems = [
        { id: 'dagligrapport', label: 'Daglig rapport från skolan' },
        { id: 'stodvardagen', label: 'Stöd i vardagen' }, // Lägg till i menyn
        { id: 'rattigheter', label: 'Rättigheter & Hjälp' },
        { id: 'kontakt', label: 'Kontakta oss' }
    ];

    return (
        <Box
            sx={{
                display: 'flex',
                gap: 4,
                maxWidth: '100%',
                px: 2,
                mt: 6,
                justifyContent: 'center'
            }}
        >
            {/* Sidebar */}
            <Box
                component="nav"
                sx={{
                    minWidth: 220,
                    position: 'sticky',
                    top: 16,
                    alignSelf: 'flex-start',
                    borderRight: '1px solid #ddd',
                    pr: 2,
                    display: { xs: 'none', sm: 'block' }
                }}
                aria-label="Innehållsförteckning"
            >
                <Typography variant="h6" gutterBottom>
                    Innehållsförteckning
                </Typography>
                <List>
                    {menuItems.map(({ id, label }) => (
                        <ListItem
                            button
                            key={id}
                            onClick={() => scrollToId(id)}
                            sx={{ cursor: 'pointer', py: 0.5 }}
                        >
                            <ListItemText primary={label} />
                        </ListItem>
                    ))}
                </List>
            </Box>

            {/* Main content */}
            <Box sx={{ width: '100%', maxWidth: 700 }}>
                <Paper elevation={3} sx={{ p: { xs: 2, sm: 4 } }}>
                    <Typography variant="h3" gutterBottom>
                        För Vårdnadshavare
                    </Typography>

                    <Typography variant="body1" paragraph>
                        Här hittar du dagliga rapporter, stöd, tips och
                        information som kan hjälpa dig förstå och stötta ditt
                        barn i vardagen.
                    </Typography>

                    <Box id="dagligrapport" sx={{ mt: 3 }}>
                        <Typography variant="h5" sx={{ mb: 1 }}>
                            Daglig rapport från skolan
                        </Typography>
                        <DagligRapport
                            role="vardnadshavare"
                            rapporter={rapporter}
                        />
                    </Box>

                    {/* Här lägger vi till Stöd i vardagen */}
                    <Box id="stodvardagen" sx={{ mt: 4 }}>
                        <StodVardagen />
                    </Box>

                    <Box id="rattigheter" sx={{ mt: 4 }}>
                        <Typography variant="h5" sx={{ mb: 1 }}>
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
                    </Box>

                    <Box id="kontakt" sx={{ mt: 4 }}>
                        <Typography variant="h5" sx={{ mb: 1 }}>
                            Kontakta oss
                        </Typography>
                        <Typography variant="body2">
                            Behöver du personlig hjälp? Hör av dig via{' '}
                            <Link href="mailto:stod@superkraften.se">
                                stod@superkraften.se
                            </Link>
                        </Typography>
                    </Box>
                </Paper>
            </Box>
        </Box>
    );
}
