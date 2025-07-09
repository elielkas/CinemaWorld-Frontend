import React, { useState, useEffect } from 'react';

const styles = {
  section: {
    width: '100%',
    padding: '0 10px',
    margin: 0,
  },
  sec: {
    margin: '0 10px 20px 25px',
  },
  title: {
    fontSize: '40px',
    paddingTop: '50px',
    textAlign: 'center',
    textTransform: 'uppercase',
    fontFamily: 'Anton, sans-serif',
  },
  paragraph: {
    marginTop: '15px',
    marginBottom: '25px',
    textAlign: 'center',
    fontSize: '16px',
  },
  foodsList: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '20px',
  },
  boxBase: {
    width: '275px',
    backgroundColor: '#fbf5ee',
    borderRadius: '10px',
    padding: '10px',
    boxShadow: '0 0 9px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    transition: 'transform 0.3s ease',
  },
  image: {
    width: '100%',
    height: '350px',
    objectFit: 'cover',
    borderRadius: '10px',
    marginBottom: '15px',
  },
  heading3: {
    textTransform: 'uppercase',
    fontSize: '20px',
    margin: 0,
    flex: 1,
    textAlign: 'center',
  },
  iconButton: {
    width: '30px',
    height: '30px',
    border: 'none',
    background: 'none',
    cursor: 'pointer',
    padding: 0,
    marginRight: '10px',
  },
  titleRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
  },
  iconImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '5px',
    border: "1px solid black"
  },
};

const useResponsiveBoxStyle = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return {
    ...styles.boxBase,
    width: isMobile ? '100%' : '275px',
    maxWidth: isMobile ? '320px' : undefined,
  };
};

const Box = ({ image, title, pdf }) => {
  const [hover, setHover] = useState(false);
  const responsiveBoxStyle = useResponsiveBoxStyle();

  return (
    <div
      style={{
        ...responsiveBoxStyle,
        transform: hover ? 'scale(0.95)' : 'scale(1)',
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img src={image} alt={title} style={styles.image} />
      <div style={styles.titleRow}>
        <h3 style={styles.heading3}>{title}</h3>
        <a href={pdf} download style={styles.iconButton} title="Télécharger">
          <img src="/Photos/icons/arrow-d-black.png" alt="Télécharger" style={styles.iconImage} />
        </a>
      </div>
    </div>
  );
};

const Livres = () => {
  return (
    <section style={styles.section}>
      <div style={styles.sec}>
        <h1 style={styles.title}>Les livres disponibles</h1>
        <p style={styles.paragraph}>Découvrez les actualités des livres de Cinema world</p>
        <div style={styles.foodsList}>
          <Box
            image="/Photos/images-21.jpg"
            title="Déjà sortie"
            pdf="files/livre-deja-sortie.pdf"
          />
          <Box
            image="/Photos/images-31.jpg"
            title="En savoir plus"
            pdf="files/livre-en-savoir-plus.pdf"
          />
          <Box
            image="/Photos/images-27.jpg"
            title="En ce moment"
            pdf="files/livre-en-ce-moment.pdf"
          />
        </div>
      </div>
    </section>
  );
};

export default Livres;