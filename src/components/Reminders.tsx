import React, { useState } from 'react';
import {
    Box,
    TextField,
    Button,
    List,
    ListItem,
    ListItemText,
    IconButton,
    Typography,
    Paper
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export default function Reminders() {
    const [reminder, setReminder] = useState('');
    const [reminders, setReminders] = useState<string[]>([]);

    const handleAdd = () => {
        if (reminder.trim() !== '') {
            setReminders([...reminders, reminder.trim()]);
            setReminder('');
        }
    };

    const handleDelete = (index: number) => {
        setReminders(reminders.filter((_, i) => i !== index));
    };

    return (
        <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
            <Typography variant="h5" gutterBottom>
                Påminnelser
            </Typography>

            <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
                <TextField
                    label="Ny påminnelse"
                    value={reminder}
                    onChange={(e) => setReminder(e.target.value)}
                    fullWidth
                    size="small"
                />
                <Button variant="contained" onClick={handleAdd}>
                    Lägg till
                </Button>
            </Box>

            {reminders.length === 0 ? (
                <Typography color="text.secondary">
                    Inga påminnelser än
                </Typography>
            ) : (
                <List>
                    {reminders.map((text, index) => (
                        <ListItem
                            key={index}
                            secondaryAction={
                                <IconButton
                                    edge="end"
                                    onClick={() => handleDelete(index)}
                                    aria-label="delete"
                                >
                                    <DeleteIcon />
                                </IconButton>
                            }
                        >
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
            )}
        </Paper>
    );
}
