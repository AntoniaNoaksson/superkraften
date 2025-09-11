import React from 'react';
import { Typography, Paper } from '@mui/material';

const Exempel: React.FC = () => {
    return (
        <>
            <Typography variant="h5" sx={{ mb: 1 }}>
                Exempel från vardagen
            </Typography>
            <Paper
                elevation={1}
                sx={{ p: 2, backgroundColor: '#f9f9f9', my: 2 }}
            >
                <Typography variant="body2" fontStyle="italic">
                    “Vår son fick börja varje morgon med en lugn start i ett
                    eget rum. Det gjorde att hela dagen blev lättare för honom.”
                </Typography>
            </Paper>
        </>
    );
};

export default Exempel;
