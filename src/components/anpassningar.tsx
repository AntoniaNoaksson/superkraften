import React, { useState, useEffect } from 'react';
import {
    Typography,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    TextField,
    IconButton,
    Box,
    Button
} from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import DeleteIcon from '@mui/icons-material/Delete';

interface Anpassning {
    id: string;
    text: string;
}

const LOCAL_STORAGE_KEY = 'anpassningar';

const Anpassningar: React.FC = () => {
    const [anpassningar, setAnpassningar] = useState<Anpassning[]>([]);
    const [input, setInput] = useState('');
    const [editId, setEditId] = useState<string | null>(null);
    const [editText, setEditText] = useState('');

    useEffect(() => {
        const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
        if (stored) {
            setAnpassningar(JSON.parse(stored));
        } else {
            setAnpassningar([
                {
                    id: crypto.randomUUID(),
                    text: 'Tydlig struktur och visuella scheman'
                },
                {
                    id: crypto.randomUUID(),
                    text: 'Lugn arbetsmiljö och möjlighet till pauser'
                },
                {
                    id: crypto.randomUUID(),
                    text: 'Alternativa sätt att visa kunskap (inte bara prov)'
                },
                {
                    id: crypto.randomUUID(),
                    text: 'Stöd från specialpedagog och elevhälsa'
                }
            ]);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(anpassningar));
    }, [anpassningar]);

    const addAnpassning = () => {
        if (!input.trim()) return;
        const nyAnpassning = { id: crypto.randomUUID(), text: input.trim() };
        setAnpassningar((prev) => [...prev, nyAnpassning]);
        setInput('');
    };

    const removeAnpassning = (id: string) => {
        setAnpassningar((prev) => prev.filter((a) => a.id !== id));
        // Om man tar bort det man redigerar just nu, avbryt redigering
        if (editId === id) {
            setEditId(null);
            setEditText('');
        }
    };

    const startEditing = (id: string, currentText: string) => {
        setEditId(id);
        setEditText(currentText);
    };

    const saveEdit = () => {
        if (!editText.trim() || !editId) {
            // Om tomt eller inget att spara, avbryt redigering
            setEditId(null);
            setEditText('');
            return;
        }
        setAnpassningar((prev) =>
            prev.map((a) =>
                a.id === editId ? { ...a, text: editText.trim() } : a
            )
        );
        setEditId(null);
        setEditText('');
    };

    return (
        <>
            <Typography variant="h5" sx={{ mb: 2 }}>
                Anpassningar i skolan
            </Typography>

            <Box sx={{ display: 'flex', mb: 2 }}>
                <TextField
                    fullWidth
                    label="Lägg till ny anpassning"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            e.preventDefault();
                            addAnpassning();
                        }
                    }}
                />
                <Button
                    onClick={addAnpassning}
                    sx={{ ml: 1 }}
                    variant="contained"
                >
                    Lägg till
                </Button>
            </Box>

            <List>
                {anpassningar.map(({ id, text }) => (
                    <ListItem
                        key={id}
                        secondaryAction={
                            <IconButton
                                edge="end"
                                aria-label="delete"
                                onClick={() => removeAnpassning(id)}
                            >
                                <DeleteIcon />
                            </IconButton>
                        }
                    >
                        <ListItemIcon>
                            <SchoolIcon />
                        </ListItemIcon>

                        {editId === id ? (
                            <TextField
                                fullWidth
                                value={editText}
                                onChange={(e) => setEditText(e.target.value)}
                                onBlur={saveEdit}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter') {
                                        saveEdit();
                                    } else if (e.key === 'Escape') {
                                        // Avbryt redigering vid Escape
                                        setEditId(null);
                                        setEditText('');
                                    }
                                }}
                                autoFocus
                                size="small"
                            />
                        ) : (
                            <ListItemText
                                primary={text}
                                onClick={() => startEditing(id, text)}
                                sx={{ cursor: 'pointer', userSelect: 'none' }}
                            />
                        )}
                    </ListItem>
                ))}
            </List>
        </>
    );
};

export default Anpassningar;
