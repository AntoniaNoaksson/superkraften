import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from '@mui/material';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';

function App() {
    return (
        <Router>
            <Header />
            <Container sx={{ mt: 4, mb: 4 }}>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </Container>
            <Footer />
        </Router>
    );
}

export default App;
