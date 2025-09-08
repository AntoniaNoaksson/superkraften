import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

export default function Header() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    Superkraften
                </Typography>
                <Button color="inherit" component={RouterLink} to="/">
                    Hem
                </Button>
            </Toolbar>
        </AppBar>
    );
}
