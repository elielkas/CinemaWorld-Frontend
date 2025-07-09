import React, { useEffect, useState } from "react";

const Presentation = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const styles = {
        container: {
            flex: 1,
            color: '#fff',
            padding: isMobile ? '1em' : '2em',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            textAlign: isMobile ? 'center' : 'left',
        },
        title: {
            fontWeight: 'bold',
            fontFamily: 'Times New Roman, serif',
            fontSize: isMobile ? '2rem' : '3.125rem', // 50px
            paddingLeft: isMobile ? '0' : '2.8125rem',
            letterSpacing: '2px',
        },
        subtitle: {
            color: 'orange',
            fontSize: isMobile ? '2rem' : '3.7rem',
            fontWeight: 'bold',
        },
        text: {
            paddingLeft: isMobile ? '0' : '3.125rem',
            paddingTop: '1.25rem',
            paddingBottom: '1.5rem',
            fontFamily: 'Arial, sans-serif',
            letterSpacing: '1.2px',
            lineHeight: '1.8',
            fontSize: isMobile ? '1rem' : '1.2rem',
        },
        button: {
            width: isMobile ? '140px' : '180px',
            height: '40px',
            background: '#ff7200',
            border: 'none',
            marginTop: '30px',
            fontSize: '1rem',
            borderRadius: '10px',
            cursor: 'pointer',
            color: '#fff',
            transition: '0.4s ease',
            fontWeight: 'bold',
            marginBottom: '10px',
            marginLeft: isMobile ? '0' : '3.13rem',
            alignSelf: isMobile ? 'center' : 'flex-start',
        },
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>
                Bienvenue À Vous Tous! <br />
                Suivez <span style={styles.subtitle}>CinémaWorld</span> <br />
                Pour Toujours
            </h1>

            <p style={styles.text}>
                Nous sommes heureux de vous accueillir sur notre nouveau site web <br />
                Ce site a été créé dans le cadre de divertissement et d'éducation. <br />
                Comme prévu, nous retrouvons différents films et séries.
            </p>

            <button style={styles.button}>Voir plus</button>
        </div>
    );
};

export default Presentation;
