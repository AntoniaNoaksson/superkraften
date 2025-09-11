import { useState } from 'react';
import {
    Box,
    Paper,
    Typography,
    TextField,
    Button,
    List,
    ListItem,
    ListItemText
} from '@mui/material';

interface Post {
    id: number;
    author: string;
    message: string;
    timestamp: Date;
}

export default function Forum() {
    const [posts, setPosts] = useState<Post[]>([
        {
            id: 1,
            author: 'Admin',
            message: 'Välkommen till forumet! Här kan du prata med andra.',
            timestamp: new Date()
        }
    ]);
    const [newMessage, setNewMessage] = useState('');
    const [author, setAuthor] = useState('');

    const handleSubmit = () => {
        if (!author.trim() || !newMessage.trim()) return;

        const newPost: Post = {
            id: posts.length + 1,
            author: author.trim(),
            message: newMessage.trim(),
            timestamp: new Date()
        };

        setPosts([newPost, ...posts]);
        setNewMessage('');
    };

    return (
        <Paper elevation={3} sx={{ p: 3, maxWidth: 600, mx: 'auto', mb: 4 }}>
            <Typography variant="h5" gutterBottom>
                Forum
            </Typography>

            <Box sx={{ mb: 2 }}>
                <TextField
                    label="Ditt namn"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    fullWidth
                    sx={{ mb: 1 }}
                />
                <TextField
                    label="Skriv ett meddelande"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    multiline
                    rows={3}
                    fullWidth
                />
                <Button
                    variant="contained"
                    onClick={handleSubmit}
                    sx={{ mt: 1 }}
                    disabled={!author.trim() || !newMessage.trim()}
                >
                    Skicka
                </Button>
            </Box>

            <List sx={{ maxHeight: 300, overflow: 'auto' }}>
                {posts.map((post) => (
                    <ListItem key={post.id} alignItems="flex-start" divider>
                        <ListItemText
                            primary={`${
                                post.author
                            } - ${post.timestamp.toLocaleString('sv-SE')}`}
                            secondary={post.message}
                        />
                    </ListItem>
                ))}
            </List>
        </Paper>
    );
}
