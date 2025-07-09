import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from './Composants/Slidebar';
import MainContent from './Composants/MainContent';

const Publication = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [activeComponent, setActiveComponent] = useState("Publier"); // ✅ état pour changer de composant

    useEffect(() => {
        const role = localStorage.getItem('role');
        if (role !== 'admin') {
            navigate('/main-layout/accueil');
        } else {
            setLoading(false);
        }
    }, [navigate]);

    if (loading) {
        return (
            <div style={{ padding: '2rem', textAlign: 'center' }}>
                <p style={{ fontSize: '1.2rem', color: '#555' }}>Chargement...</p>
            </div>
        );
    }

    const styles = {
        page: {
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
        },
        contentContainer: {
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
        },
        sidebarWrapper: {
            flexBasis: '20%',
            position: 'sticky',
            top: 0,
            alignSelf: 'flex-start',
            height: 'calc(100vh - 60px)',
            overflowY: 'auto',
            backgroundColor: '#f0f0f0',
        },
        mainWrapper: {
            width: '80%',
            padding: '20px',
            boxSizing: 'border-box',
        },
    };

    return (
        <div style={styles.page}>
            <div style={styles.contentContainer}>
                <div style={styles.sidebarWrapper}>
                    <Sidebar
                        activeComponent={activeComponent}
                        setActiveComponent={setActiveComponent}
                    />
                </div>
                <div style={styles.mainWrapper}>
                    <MainContent activeComponent={activeComponent} />
                </div>
            </div>
        </div>
    );
};

export default Publication;