import React from 'react';
import {
    Typography,
    List,
    ListItem,
    ListItemIcon,
    ListItemText
} from '@mui/material';
import GavelIcon from '@mui/icons-material/Gavel';

const Rattigheter: React.FC = () => {
    return (
        <>
            <Typography variant="h5" sx={{ mb: 1 }}>
                Dina rättigheter
            </Typography>
            <Typography variant="body1" paragraph>
                Alla barn har rätt till en inkluderande och stödjande skolgång.
                Skolan är skyldig att:
            </Typography>
            <List>
                <ListItem>
                    <ListItemIcon>
                        <GavelIcon />
                    </ListItemIcon>
                    <ListItemText primary="Ge extra anpassningar i undervisningen" />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <GavelIcon />
                    </ListItemIcon>
                    <ListItemText primary="Upprätta ett åtgärdsprogram vid behov av särskilt stöd" />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <GavelIcon />
                    </ListItemIcon>
                    <ListItemText primary="Involvera elevhälsan (psykolog, specialpedagog, kurator m.fl.)" />
                </ListItem>
            </List>
        </>
    );
};

export default Rattigheter;
