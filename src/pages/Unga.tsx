import { useState, useEffect } from 'react';
import {
    Box,
    Paper,
    Typography,
    List,
    ListItem,
    ListItemText,
    TextField,
    Button,
    Checkbox,
    FormControlLabel,
    LinearProgress,
    Snackbar,
    IconButton
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import Calendar from '../components/Calendar';
import Tips from '../components/Tips';
import Forum from '../components/Forum';

const quotes = [
    'Du är starkare än du tror 💪',
    'Små steg leder till stora framgångar 🚀',
    'Ge aldrig upp – superkrafter byggs dag för dag!',
    'Dina ansträngningar räknas varje dag 🌟'
];

export default function Unga() {
    const [tasks, setTasks] = useState([
        { id: 1, text: 'Gå till skolan', done: false, priority: 'normal' },
        { id: 2, text: 'Gör läxorna', done: false, priority: 'high' }
    ]);
    const [newTask, setNewTask] = useState('');
    const [newPriority, setNewPriority] = useState<'normal' | 'high'>('normal');
    const [quote, setQuote] = useState('');
    const [openSnackbar, setOpenSnackbar] = useState(false);

    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        setQuote(quotes[randomIndex]);
    }, []);

    const doneCount = tasks.filter((t) => t.done).length;
    const progress = (doneCount / tasks.length) * 100 || 0;

    const toggleDone = (id: number) => {
        setTasks(
            tasks.map((task) =>
                task.id === id ? { ...task, done: !task.done } : task
            )
        );
    };

    const addTask = () => {
        if (newTask.trim() === '') return;
        setTasks([
            ...tasks,
            {
                id: Date.now(),
                text: newTask.trim(),
                done: false,
                priority: newPriority
            }
        ]);
        setNewTask('');
        setNewPriority('normal');
        setOpenSnackbar(true);
    };

    const scrollToId = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    const menuItems = [
        { id: 'uppgifter', label: 'Dagens uppgifter' },
        { id: 'kalender', label: 'Din kalender' },
        { id: 'tips', label: 'Tips och råd' },
        { id: 'forum', label: 'Forum – prata med andra' },
        { id: 'pepp', label: 'Dagens pepp' }
    ];

    return (
        <Box
            sx={{
                display: 'flex',
                gap: 4,
                maxWidth: '100%',
                px: 2,
                mt: 6,
                justifyContent: 'center',
                fontFamily: "'Comic Sans MS', cursive, sans-serif"
            }}
        >
            {/* Sidebar */}
            <Box
                component="nav"
                sx={{
                    minWidth: 220,
                    position: 'sticky',
                    top: 16,
                    alignSelf: 'flex-start',
                    borderRight: '1px solid #ddd',
                    pr: 2,
                    display: { xs: 'none', sm: 'block' }
                }}
                aria-label="Innehållsförteckning"
            >
                <Typography variant="h6" gutterBottom>
                    Innehållsförteckning
                </Typography>
                <List>
                    {menuItems.map(({ id, label }) => (
                        <ListItem
                            button
                            key={id}
                            onClick={() => scrollToId(id)}
                            sx={{ cursor: 'pointer', py: 0.5 }}
                        >
                            <ListItemText primary={label} />
                        </ListItem>
                    ))}
                </List>
            </Box>

            {/* Main content */}
            <Box
                sx={{
                    width: '100%',
                    maxWidth: 700,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 4
                }}
            >
                <Paper
                    elevation={4}
                    sx={{
                        p: { xs: 2, sm: 4 },
                        borderRadius: 3,
                        backgroundColor: '#f0f8ff'
                    }}
                >
                    <Typography
                        variant="h3"
                        gutterBottom
                        sx={{ color: '#1976d2' }}
                    >
                        Hej superkraft!
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 3 }}>
                        Här kan du hålla koll på dina uppgifter och mål. Lägg
                        till nya saker att göra och bocka av när du är klar! 💫
                    </Typography>

                    {/* Uppgifter */}
                    <Box id="uppgifter">
                        <Typography variant="h6" gutterBottom>
                            Dagens uppgifter
                        </Typography>
                        <List>
                            {tasks.map((task) => (
                                <ListItem
                                    key={task.id}
                                    disablePadding
                                    sx={{
                                        mb: 1,
                                        borderLeft:
                                            task.priority === 'high'
                                                ? '5px solid #d32f2f'
                                                : '5px solid #1976d2',
                                        borderRadius: 1,
                                        backgroundColor: task.done
                                            ? '#dcedc8'
                                            : '#fff'
                                    }}
                                >
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={task.done}
                                                onChange={() =>
                                                    toggleDone(task.id)
                                                }
                                            />
                                        }
                                        label={
                                            <ListItemText primary={task.text} />
                                        }
                                    />
                                </ListItem>
                            ))}
                        </List>

                        <Box
                            sx={{
                                display: 'flex',
                                gap: 1,
                                mt: 2,
                                flexWrap: 'wrap',
                                alignItems: 'center'
                            }}
                        >
                            <TextField
                                fullWidth
                                size="small"
                                variant="outlined"
                                placeholder="Lägg till ny uppgift"
                                value={newTask}
                                onChange={(e) => setNewTask(e.target.value)}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter') addTask();
                                }}
                            />
                            <Button
                                variant={
                                    newPriority === 'normal'
                                        ? 'outlined'
                                        : 'contained'
                                }
                                color="primary"
                                onClick={() => setNewPriority('normal')}
                            >
                                Normal
                            </Button>
                            <Button
                                variant={
                                    newPriority === 'high'
                                        ? 'contained'
                                        : 'outlined'
                                }
                                color="error"
                                onClick={() => setNewPriority('high')}
                            >
                                Viktig!
                            </Button>
                            <Button
                                variant="contained"
                                onClick={addTask}
                                sx={{ whiteSpace: 'nowrap' }}
                            >
                                Lägg till
                            </Button>
                        </Box>

                        <Typography variant="h6" sx={{ mt: 4 }}>
                            Framsteg
                        </Typography>
                        <LinearProgress
                            variant="determinate"
                            value={progress}
                            sx={{ height: 10, borderRadius: 5 }}
                        />
                        <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{ mt: 1 }}
                        >
                            Du har klarat {doneCount} av {tasks.length}{' '}
                            uppgifter
                        </Typography>
                    </Box>
                </Paper>

                {/* Dagens pepp */}
                <Paper elevation={3} sx={{ p: 3, borderRadius: 3 }} id="pepp">
                    <Typography variant="h6" gutterBottom>
                        Dagens pepp
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{ fontStyle: 'italic', color: '#555' }}
                    >
                        {quote}
                    </Typography>
                </Paper>

                {/* Kalender */}
                <Paper
                    elevation={3}
                    sx={{ p: 3, borderRadius: 3 }}
                    id="kalender"
                >
                    <Typography variant="h5" gutterBottom>
                        Din kalender
                    </Typography>
                    <Calendar />
                </Paper>

                {/* Tips */}
                <Paper elevation={3} sx={{ p: 3, borderRadius: 3 }} id="tips">
                    <Typography variant="h5" gutterBottom>
                        Tips och råd
                    </Typography>
                    <Tips />
                </Paper>

                {/* Forum */}
                <Paper elevation={3} sx={{ p: 3, borderRadius: 3 }} id="forum">
                    <Typography variant="h5" gutterBottom>
                        Forum – prata med andra
                    </Typography>
                    <Forum />
                </Paper>

                <Snackbar
                    open={openSnackbar}
                    autoHideDuration={3000}
                    onClose={() => setOpenSnackbar(false)}
                    message="Uppgift tillagd!"
                    action={
                        <IconButton
                            size="small"
                            color="inherit"
                            onClick={() => setOpenSnackbar(false)}
                        >
                            <CloseIcon fontSize="small" />
                        </IconButton>
                    }
                />
            </Box>
        </Box>
    );
}
