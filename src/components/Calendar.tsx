import React, { useState } from 'react';
import {
    Box,
    Typography,
    Paper,
    TextField,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle
} from '@mui/material';
import ReactCalendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../components/CalenderCss.css';

type CalendarValue = Date | Date[] | null;

export default function Calendar() {
    const [date, setDate] = useState<CalendarValue>(new Date());

    const [events, setEvents] = useState<Record<string, string>>({});
    const [openDialog, setOpenDialog] = useState(false);
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [eventText, setEventText] = useState('');

    const formatDateKey = (date: Date) => date.toISOString().split('T')[0];

    const handleChange = (value: CalendarValue) => {
        if (value instanceof Date) {
            setDate(value);
        } else if (Array.isArray(value)) {
            setDate(value[0]);
        }
    };

    const onDateClick = (date: Date) => {
        setSelectedDate(date);
        const key = formatDateKey(date);
        setEventText(events[key] || '');
        setOpenDialog(true);
    };

    const saveEvent = () => {
        if (!selectedDate) return;
        const key = formatDateKey(selectedDate);
        setEvents((prev) => ({ ...prev, [key]: eventText }));
        setOpenDialog(false);
    };

    const deleteEvent = () => {
        if (!selectedDate) return;
        const key = formatDateKey(selectedDate);
        setEvents((prev) => {
            const copy = { ...prev };
            delete copy[key];
            return copy;
        });
        setOpenDialog(false);
    };

    const displayEventsForDate = (date: Date) => {
        const key = formatDateKey(date);
        return events[key];
    };

    const tileContent = ({ date, view }: { date: Date; view: string }) => {
        if (view === 'month') {
            const key = formatDateKey(date);
            if (events[key]) {
                return (
                    <div
                        style={{
                            backgroundColor: '#1976d2',
                            borderRadius: '50%',
                            width: 8,
                            height: 8,
                            margin: '0 auto',
                            marginTop: 2
                        }}
                    ></div>
                );
            }
        }
        return null;
    };

    return (
        <Box
            sx={{
                width: '100%',
                maxWidth: 600,
                mx: 'auto',
                mt: 4,
                px: { xs: 1, sm: 2 }
            }}
        >
            <Paper
                elevation={3}
                sx={{
                    p: { xs: 2, sm: 4 },
                    borderRadius: 3,
                    backgroundColor: '#f0f8ff',
                    fontFamily: "'Comic Sans MS', cursive, sans-serif"
                }}
            >
                <Typography
                    variant="h5"
                    sx={{
                        mb: 2,
                        color: '#1976d2',
                        fontWeight: 'bold'
                    }}
                >
                    Min kalender 📅
                </Typography>

                <Typography variant="body1" sx={{ mb: 3 }}>
                    Klicka på en dag för att lägga till, ändra eller ta bort
                    anteckning.
                </Typography>

                <Box sx={{ '& .react-calendar': { border: 'none' } }}>
                    <ReactCalendar
                        onChange={handleChange as any}
                        value={date as any}
                        calendarType="iso8601"
                        onClickDay={onDateClick}
                        tileContent={tileContent}
                    />
                </Box>

                {date instanceof Date && (
                    <Box sx={{ mt: 2 }}>
                        <Typography variant="body2">
                            Du har valt:{' '}
                            <strong>{date.toLocaleDateString()}</strong>
                        </Typography>
                        <Typography variant="body2" sx={{ mt: 1 }}>
                            Anteckning:{' '}
                            <em>
                                {displayEventsForDate(date) ||
                                    'Ingen anteckning'}
                            </em>
                        </Typography>
                    </Box>
                )}

                <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
                    <DialogTitle>Lägg till anteckning</DialogTitle>
                    <DialogContent>
                        <TextField
                            autoFocus
                            margin="dense"
                            label="Anteckning"
                            fullWidth
                            multiline
                            minRows={2}
                            value={eventText}
                            onChange={(e) => setEventText(e.target.value)}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => setOpenDialog(false)}>
                            Avbryt
                        </Button>

                        {/* Ta bort-knapp visas bara om det finns en anteckning */}
                        {selectedDate &&
                            events[formatDateKey(selectedDate)] && (
                                <Button onClick={deleteEvent} color="error">
                                    Ta bort
                                </Button>
                            )}

                        <Button
                            onClick={saveEvent}
                            variant="contained"
                            color="primary"
                        >
                            Spara
                        </Button>
                    </DialogActions>
                </Dialog>
            </Paper>
        </Box>
    );
}
