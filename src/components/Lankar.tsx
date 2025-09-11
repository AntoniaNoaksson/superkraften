import React from 'react';
import {
    Typography,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Link
} from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';

const Lankar: React.FC = () => {
    return (
        <>
            <Typography variant="h5" sx={{ mb: 1 }}>
                Rättigheter & Hjälp
            </Typography>
            <List>
                <ListItem>
                    <ListItemIcon>
                        <InfoIcon />
                    </ListItemIcon>
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
                    <ListItemIcon>
                        <InfoIcon />
                    </ListItemIcon>
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
                <ListItem>
                    <ListItemIcon>
                        <InfoIcon />
                    </ListItemIcon>
                    <ListItemText
                        primary="Stödmaterial från SPSM"
                        secondary={
                            <Link
                                href="https://www.spsm.se/stodmaterial/"
                                target="_blank"
                                rel="noopener"
                            >
                                Till SPSM
                            </Link>
                        }
                    />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <InfoIcon />
                    </ListItemIcon>
                    <ListItemText
                        primary="Guider från Attention"
                        secondary={
                            <Link
                                href="https://attention.se"
                                target="_blank"
                                rel="noopener"
                            >
                                Till Attention
                            </Link>
                        }
                    />
                </ListItem>
            </List>
        </>
    );
};

export default Lankar;
