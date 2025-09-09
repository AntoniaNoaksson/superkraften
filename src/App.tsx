import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from '@mui/material';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Vardnadshavare from './pages/Vardnadshavare';
import Unga from './pages/Unga';

function App() {
    return (
        <Router>
            <Header />
            <Container sx={{ mt: 4, mb: 4 }}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route
                        path="/vardnadshavare"
                        element={<Vardnadshavare />}
                    />
                    <Route path="/unga" element={<Unga />} />
                </Routes>
            </Container>
            <Footer />
        </Router>
    );
}

export default App;
