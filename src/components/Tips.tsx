import React from 'react';
import {
    Box,
    Paper,
    Typography,
    List,
    ListItem,
    ListItemText
} from '@mui/material';

const tips = [
    {
        title: 'Skapa en rutin',
        description:
            'Att ha fasta tider för måltider, sömn och studier kan göra vardagen mer förutsägbar och lugn.'
    },
    {
        title: 'Använd en kalender',
        description:
            'Planera dina dagar med hjälp av en kalender eller app för att hålla koll på viktiga tider och uppgifter.'
    },
    {
        title: 'Ta pauser ofta',
        description:
            'Korta pauser under dagen hjälper dig att återhämta energi och behålla fokus.'
    },
    {
        title: 'Kommunicera dina behov',
        description:
            'Prata med familj, lärare och vänner om vad du behöver för att må bra och klara skolan.'
    },
    {
        title: 'Var snäll mot dig själv',
        description:
            'Alla har bra och dåliga dagar — ge dig själv beröm för det du lyckas med.'
    }
];

export default function Tips() {
    return (
        <Box sx={{ mt: 4 }}>
            <Paper elevation={3} sx={{ p: 3 }}>
                <Typography variant="h5" gutterBottom>
                    Tips för en bättre vardag
                </Typography>
                <List>
                    {tips.map((tip, index) => (
                        <ListItem key={index} alignItems="flex-start" divider>
                            <ListItemText
                                primary={tip.title}
                                secondary={tip.description}
                            />
                        </ListItem>
                    ))}
                </List>
            </Paper>
        </Box>
    );
}
