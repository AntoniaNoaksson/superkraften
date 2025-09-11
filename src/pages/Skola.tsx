import React from 'react';
import {
    Box,
    Paper,
    Typography,
    List,
    ListItem,
    ListItemText,
    Link,
    Accordion,
    AccordionSummary,
    AccordionDetails
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DagligRapportKomponent from '../components/DagligRapport';
import { Rapport } from '../App';
import Anpassningar from 'components/anpassningar';

interface Props {
    rapporter: Rapport[];
    addRapport: (text: string) => void;
}

const Skola: React.FC<Props> = ({ rapporter, addRapport }) => {
    const scrollToId = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    const menuItems = [
        { id: 'anpassningar', label: 'Anpassningar & stöd' },
        { id: 'rattigheter', label: 'Rättigheter' },
        { id: 'exempel', label: 'Exempel från vardagen' },
        { id: 'dagligrapport', label: 'Daglig rapport' },
        { id: 'stodvardagen', label: 'Stöd i vardagen' },
        { id: 'lankar', label: 'Länkar & resurser' },
        { id: 'kontakt', label: 'Kontakta oss' }
    ];

    return (
        <Box sx={{ display: 'flex', gap: 4, maxWidth: '100%', px: 2 }}>
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
            <Box sx={{ flexGrow: 1, maxWidth: 700 }}>
                <Paper elevation={3} sx={{ p: { xs: 2, sm: 4 } }}>
                    <Typography variant="h3" gutterBottom>
                        Skola & förskola
                    </Typography>

                    <Accordion id="anpassningar" defaultExpanded>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography variant="h5">
                                Anpassningar & stöd
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Anpassningar />
                        </AccordionDetails>
                    </Accordion>

                    <Accordion id="rattigheter">
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography variant="h5">Rättigheter</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Information om skolans ansvar och vilka
                                rättigheter elever med NPF har.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion id="exempel">
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography variant="h5">
                                Exempel från vardagen
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Praktiska exempel på situationer i skolan och
                                hur man kan hantera dem.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion id="dagligrapport" defaultExpanded>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography variant="h5">Daglig rapport</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <DagligRapportKomponent
                                role="skola"
                                rapporter={rapporter}
                                addRapport={addRapport}
                            />
                        </AccordionDetails>
                    </Accordion>

                    <Accordion id="stodvardagen">
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography variant="h5">
                                Stöd i vardagen
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
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
                        </AccordionDetails>
                    </Accordion>

                    <Accordion id="lankar">
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography variant="h5">
                                Länkar & resurser
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <List>
                                <ListItem>
                                    <ListItemText
                                        primary="Skolverket"
                                        secondary={
                                            <Link
                                                href="https://www.skolverket.se"
                                                target="_blank"
                                                rel="noopener"
                                            >
                                                www.skolverket.se
                                            </Link>
                                        }
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemText
                                        primary="Socialstyrelsen"
                                        secondary={
                                            <Link
                                                href="https://www.socialstyrelsen.se"
                                                target="_blank"
                                                rel="noopener"
                                            >
                                                www.socialstyrelsen.se
                                            </Link>
                                        }
                                    />
                                </ListItem>
                            </List>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion id="kontakt">
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography variant="h5">Kontakta oss</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Behöver du personlig hjälp? Hör av dig via{' '}
                                <Link href="mailto:stod@superkraften.se">
                                    stod@superkraften.se
                                </Link>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </Paper>
            </Box>
        </Box>
    );
};

export default Skola;
