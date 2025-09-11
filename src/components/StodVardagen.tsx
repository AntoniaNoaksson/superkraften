import React, { useState } from 'react';
import {
    Typography,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Collapse,
    Link,
    Paper,
    Box
} from '@mui/material';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

const tipsData = [
    {
        title: 'Rutiner och struktur för hemmet',
        description:
            'Skapa fasta rutiner för morgon, eftermiddag och kväll. Använd visuella scheman eller checklistor för att göra det enkelt att följa.',
        link: {
            href: 'https://www.example.com/rutiner',
            label: 'Läs mer om rutiner'
        }
    },
    {
        title: 'Verktyg för att hantera utmanande situationer',
        description:
            'Använd lugna andningstekniker, pauser och belöningssystem för att hjälpa barnet hantera stress eller frustration.',
        link: {
            href: 'https://www.example.com/hantera-situationer',
            label: 'Tips för stresshantering'
        }
    },
    {
        title: 'Tips för att stärka självkänslan',
        description:
            'Ge positiv feedback, fokusera på framsteg och låt barnet vara delaktigt i beslut som rör deras vardag.',
        link: {
            href: 'https://www.example.com/selvkansla',
            label: 'Bygg självkänslan'
        }
    }
];

const StodVardagen: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleClick = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <Box
            sx={{
                maxWidth: 700,
                margin: 'auto',
                mt: 6,
                px: 2
            }}
        >
            <Paper
                elevation={6}
                sx={{
                    p: 4,
                    borderRadius: 3,
                    backgroundColor: '#f9fafb',
                    boxShadow: '0 8px 20px rgba(0,0,0,0.1)'
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        mb: 3,
                        color: '#1976d2'
                    }}
                >
                    <SupportAgentIcon sx={{ mr: 1, fontSize: 36 }} />
                    <Typography variant="h4" component="h2">
                        Stöd i vardagen
                    </Typography>
                </Box>

                <List>
                    {tipsData.map(({ title, description, link }, index) => (
                        <React.Fragment key={title}>
                            <ListItemButton
                                onClick={() => handleClick(index)}
                                sx={{
                                    mb: 1,
                                    borderRadius: 2,
                                    transition: 'background-color 0.3s',
                                    '&:hover': {
                                        backgroundColor: '#e3f2fd'
                                    },
                                    bgcolor:
                                        openIndex === index
                                            ? '#bbdefb'
                                            : 'transparent'
                                }}
                            >
                                <ListItemIcon>
                                    <EmojiObjectsIcon color="primary" />
                                </ListItemIcon>
                                <ListItemText
                                    primary={title}
                                    primaryTypographyProps={{
                                        fontWeight:
                                            openIndex === index
                                                ? 'bold'
                                                : 'normal'
                                    }}
                                />
                                {openIndex === index ? (
                                    <ExpandLess />
                                ) : (
                                    <ExpandMore />
                                )}
                            </ListItemButton>
                            <Collapse
                                in={openIndex === index}
                                timeout="auto"
                                unmountOnExit
                            >
                                <Typography
                                    variant="body1"
                                    sx={{
                                        pl: 7,
                                        pr: 2,
                                        pb: 3,
                                        color: 'text.secondary',
                                        lineHeight: 1.6
                                    }}
                                >
                                    {description}{' '}
                                    <Link
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener"
                                        underline="hover"
                                        sx={{ fontWeight: 'medium' }}
                                    >
                                        {link.label}
                                    </Link>
                                </Typography>
                            </Collapse>
                        </React.Fragment>
                    ))}
                </List>
            </Paper>
        </Box>
    );
};

export default StodVardagen;
