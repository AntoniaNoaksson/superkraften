import React from 'react';
import { Typography, Link } from '@mui/material';

const Kontakt: React.FC = () => {
    return (
        <>
            <Typography variant="h5" sx={{ mb: 1 }}>
                Kontakta oss
            </Typography>
            <Typography variant="body2">
                Behöver du personlig hjälp? Hör av dig via{' '}
                <Link href="mailto:stöd@superkraften.se">
                    stöd@superkraften.se
                </Link>
            </Typography>
        </>
    );
};

export default Kontakt;
