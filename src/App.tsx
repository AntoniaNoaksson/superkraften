import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from '@mui/material';

import Header from './components/Header';
import Footer from './components/Footer';
import Unga from 'pages/Unga';
import Home from 'pages/Home';
import Skola from 'pages/Skola';
import Vardnadshavare from 'pages/Vardnadshavare';

export interface Rapport {
    id: number;
    text: string;
    datum: string;
}

function App() {
    const [rapporter, setRapporter] = useState<Rapport[]>([]);

    useEffect(() => {
        const sparade = localStorage.getItem('dagligaRapporter');
        if (sparade) {
            setRapporter(JSON.parse(sparade));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('dagligaRapporter', JSON.stringify(rapporter));
    }, [rapporter]);

    const addRapport = (text: string) => {
        const ny = {
            id: Date.now(),
            text,
            datum: new Date().toLocaleDateString()
        };
        setRapporter((prev) => [ny, ...prev]);
    };

    return (
        <Router>
            <Header />
            <Container sx={{ mt: 4, mb: 4 }}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route
                        path="/vardnadshavare"
                        element={<Vardnadshavare rapporter={rapporter} />}
                    />
                    <Route path="/unga" element={<Unga />} />
                    <Route
                        path="/skola"
                        element={
                            <Skola
                                rapporter={rapporter}
                                addRapport={addRapport}
                            />
                        }
                    />
                </Routes>
            </Container>
            <Footer />
        </Router>
    );
}

export default App;
