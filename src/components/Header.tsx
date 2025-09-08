import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

export default function Header() {
    return (
        <AppBar position="sticky" color="primary" elevation={1}>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography
                    variant="h6"
                    component={RouterLink}
                    to="/"
                    sx={{
                        color: 'inherit',
                        textDecoration: 'none',
                        fontWeight: 'bold'
                    }}
                >
                    Superkraften
                </Typography>
                <Button color="inherit" component={RouterLink} to="/">
                    Hem
                </Button>
            </Toolbar>
        </AppBar>
    );
}
