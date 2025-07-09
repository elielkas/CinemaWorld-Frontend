import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inscription from './pages/Inscription';
import Authentification from './Authentification';
import MainLayout from './MainLayout';
import Accueil from './Accueil';
import Apropos from './Apropos';
import Contact from './pages/Contact';
import SavoirPlus from './SavoirPlus';
import Publication from './Publication';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Authentification />} />
                <Route path="/inscription" element={<Inscription />} />
                
                {/* Routes imbriquées avec MainLayout */}
                <Route path="/main-layout" element={<MainLayout />}>
                    <Route index element={<Accueil />} /> {/* Route par défaut */}
                    <Route path="accueil" element={<Accueil />} />
                    <Route path="apropos" element={<Apropos />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="savoirplus" element={<SavoirPlus />} />

                    <Route path="publication" element={<Publication />} /> {/* Visible que par l'admin */}
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
