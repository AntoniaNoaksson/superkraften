import React, { useState } from 'react';
import {
    Button,
    TextField,
    Typography,
    Box,
    Checkbox,
    FormControlLabel
} from '@mui/material';

export interface Rapport {
    id: number;
    text: string;
    datum: string;
}

interface Props {
    role: 'skola' | 'vardnadshavare';
    rapporter: Rapport[];
    addRapport?: (text: string) => void; // Skola skickar med denna
}

const DagligRapport: React.FC<Props> = ({ role, rapporter, addRapport }) => {
    const [form, setForm] = useState({
        närvaro: false,
        åtMat: false,
        lekte: false,
        lektionstid: '',
        kommentar: ''
    });

    const handleChange = (field: string, value: any) => {
        setForm((prev) => ({
            ...prev,
            [field]: value
        }));
    };

    const handleSubmit = () => {
        if (!addRapport) return;

        const text = `
🟢 Närvaro: ${form.närvaro ? 'Ja' : 'Nej'}
🍽️ Åt mat: ${form.åtMat ? 'Ja' : 'Nej'}
🎲 Lekte: ${form.lekte ? 'Ja' : 'Nej'}
📚 Lektionstid: ${form.lektionstid || 'Ej angivet'}
📝 Kommentar: ${form.kommentar || 'Ingen'}
        `.trim();

        addRapport(text);
        setForm({
            närvaro: false,
            åtMat: false,
            lekte: false,
            lektionstid: '',
            kommentar: ''
        });
    };

    return (
        <Box>
            {role === 'skola' && (
                <Box sx={{ mb: 3 }}>
                    <Typography variant="h6" gutterBottom>
                        Fyll i daglig rapport
                    </Typography>

                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={form.närvaro}
                                onChange={(e) =>
                                    handleChange('närvaro', e.target.checked)
                                }
                            />
                        }
                        label="Barnet var närvarande"
                    />

                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={form.åtMat}
                                onChange={(e) =>
                                    handleChange('åtMat', e.target.checked)
                                }
                            />
                        }
                        label="Åt mat"
                    />

                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={form.lekte}
                                onChange={(e) =>
                                    handleChange('lete', e.target.checked)
                                }
                            />
                        }
                        label="Lekte med andra"
                    />

                    <TextField
                        label="Lektionstid (t.ex. 3 timmar)"
                        fullWidth
                        margin="normal"
                        value={form.lektionstid}
                        onChange={(e) =>
                            handleChange('lektionstid', e.target.value)
                        }
                    />

                    <TextField
                        label="Kommentar till vårdnadshavare"
                        fullWidth
                        margin="normal"
                        multiline
                        rows={3}
                        value={form.kommentar}
                        onChange={(e) =>
                            handleChange('kommentar', e.target.value)
                        }
                    />

                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleSubmit}
                        sx={{ mt: 2 }}
                    >
                        Skicka rapport
                    </Button>
                </Box>
            )}

            <Box>
                <Typography variant="h6" gutterBottom>
                    Senaste rapporter
                </Typography>
                {rapporter.length === 0 ? (
                    <Typography>Inga rapporter finns ännu.</Typography>
                ) : (
                    <ul>
                        {rapporter.map((r) => (
                            <li key={r.id} style={{ marginBottom: '0.5rem' }}>
                                <strong>{r.datum}:</strong>
                                <pre
                                    style={{
                                        whiteSpace: 'pre-wrap',
                                        margin: 0
                                    }}
                                >
                                    {r.text}
                                </pre>
                            </li>
                        ))}
                    </ul>
                )}
            </Box>
        </Box>
    );
};

export default DagligRapport;
