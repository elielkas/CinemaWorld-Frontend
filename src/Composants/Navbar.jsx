import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [role, setRole] = useState(null);
    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const savedRole = localStorage.getItem('role');
        if (savedRole) setRole(savedRole);

        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
            if (window.innerWidth > 768) {
                setIsOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const Styles = {
        navbar: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: '#333',
            padding: '12px 20px',
            color: '#fff',
            flexWrap: 'wrap',
        },
        logo: {
            fontSize: '2em',
            fontWeight: 'bold',
            color: 'orange',
        },
        burger: {
            display: isMobile ? 'block' : 'none',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
        },
        burgerImage: {
            width: '30px',
            height: '30px',
        },
        navLinks: {
            display: isMobile ? (isOpen ? 'flex' : 'none') : 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            width: isMobile ? '100%' : 'auto',
            backgroundColor: isMobile ? '#333' : 'transparent',
            gap: '15px',
            marginTop: isMobile ? '10px' : '0',
        },
        link: {
            color: '#fff',
            textDecoration: 'none',
            padding: isMobile ? '10px 20px' : '0',
            borderBottom: isMobile ? 'none' : '1px solid #ff7200',
        },
    };

    return (
        
        <nav style={Styles.navbar}>
            <div style={Styles.logo}>CinemaWorld</div>

            <button style={Styles.burger} onClick={toggleMenu}>
                <img src="/Photos/icons/bars-white.png" alt="Menu" style={Styles.burgerImage} />
            </button>

            <div style={Styles.navLinks}>
                <Link to="/main-layout/accueil" style={Styles.link}>Accueil</Link>
                <Link to="/main-layout/apropos" style={Styles.link}>Catégorie</Link>
                <Link to="/main-layout/savoirplus" style={Styles.link}>SavoirPlus</Link>
                <Link to="/main-layout/contact" style={Styles.link}>MonProfil</Link>

                {/* Lien visible uniquement si l'admin est connecté */}
                {role === 'admin' && (
                    <Link to="/main-layout/publication" style={Styles.link}>Admin</Link>
                )}

            </div>
        </nav>
    );
};

export default Navbar;
