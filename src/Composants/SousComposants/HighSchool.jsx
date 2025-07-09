import React, { useState, useEffect } from 'react';

const HighSchool = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 750);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 750);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const styles = {
    home: {
      background: `linear-gradient(rgba(0,0,0,0.1),#333), url("../Photos/images-71.jpg") center/cover no-repeat`, // IMAGE DE FOND PRINCIPALE
      height: '65vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      paddingTop: 100
    },
    h2: {
      fontSize: isMobile ? 18 : 45,
      marginBottom: 10,
      WebkitTextStroke: isMobile ? 'none' : '2px white',
      color: isMobile ? 'blue' : 'transparent',
      textTransform: 'lowercase'
    },
    h4: {
      fontSize: isMobile ? 28 : 50,
      color: '#fff',
      marginBottom: 10,
      textTransform: 'capitalize'
    },
    p: {
      color: '#fff',
      marginBottom: 10,
      fontSize: isMobile ? 10 : 20,
      textTransform: 'capitalize',
      textAlign: 'center'
    },
    btn: {
      marginBottom: 100,
      color: '#fff',
      textDecoration: 'underline'
    },
    aPropos: {
      marginTop: -100,
      padding: '0 10px',
      width: '100%'
    },
    title: {
      textTransform: 'capitalize',
      margin: '200px 0 100px 15px',
      fontWeight: 'bold',
      color: '#000',
      fontSize: 18,
      position: 'relative'
    },
    imgDesc: {
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%'
    },
    leftVideo: {
      width: isMobile ? '100%' : '90%',
      height: isMobile ? 'auto' : '35%',
      boxShadow: '0 0 30px #ff7200',
      marginBottom: isMobile ? 20 : 0
    },
    rightText: {
      width: isMobile ? '100%' : '50%'
    },
    rightH3: {
      color: '#000',
      fontSize: 25,
      marginBottom: 20
    },
    rightP: {
      color: '#000',
      fontSize: 16,
      marginBottom: 20
    },
    rightLink: {
      border: '1px solid #ff7200',
      color: '#ff7200',
      fontSize: 14,
      padding: '8px 25px',
      fontWeight: 100,
      textDecoration: 'none'
    }
  };

  return (
    <div style={{ fontFamily: 'Poppins, sans-serif', scrollBehavior: 'smooth' }}>

      {/* SECTION HOME */}
      <section id="home" style={styles.home}>
        <h2 style={styles.h2}>WELCOME HERE</h2>
        <h4 style={styles.h4}>Visiter_le_Site</h4>
        <p style={styles.p}>Nous sommes dans la page des films et saisons du genre High-Shool <br />
        Cinéma world</p>
        {!isMobile && (
          <a href="#" className="btn-reserve home-btn" style={styles.btn}>A savoir plus</a>
        )}
      </section>

      {/* SECTION À PROPOS */}
      <section id="a-propos" style={styles.aPropos}>
        <h1 className="title" style={styles.title}>à propos</h1>
        <div style={styles.imgDesc}>
          {/* Vidéo Cobra Kai */}
          <div className="left" style={{ width: isMobile ? '100%' : '45%' }}>
            <video
              src="/videos/CobraKai.mp4" // Vidéo COBRA KAI
              controls
              style={styles.leftVideo}
            ></video>
          </div>

          {/* Texte à droite */}
          <div className="right" style={styles.rightText}>
            <h3 style={styles.rightH3}>
              Nous voyageons pour chercher d'autres états, d'autres vies, d'autres âmes
            </h3>
            <p style={styles.rightP}>
              Nous sommes des sortes des prestataires de services car nous vous fournissons du plaisir
            </p>
            <p style={styles.rightP}>
              Alors faites-vous plaisir car votre satisfaction fait notre joie
            </p>
            <a href="#" style={styles.rightLink}>lire plus</a>
          </div>
        </div>
      </section>

      {/* SECTION FILMS ET SÉRIES POPULAIRES */}
      <section id="popular-destination" style={{ padding: '0 10px', marginBottom: 0 }}>
          <h1 style={{ ...styles.title, marginTop: 100 }}>Films et séries populaires</h1>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: 32
          }}>
            {[
              {
                title: 'Green-ish',
                desc: "Zoé Johnson entre à l'université de Californie, elle y vit beaucoup d'expériences et espère être mature.",
                img: '/Photos/images-75.jpg' // Green-ish
              },
              {
                title: 'High-School the serie',
                desc: 'Suite des films musicals des amateurs de 2009.',
                img: '/Photos/images-73.jpg' // High-School the serie
              },
              {
                title: 'The Society',
                desc: 'Tragédie : des lycéens emportés sur une autre planète dans un autre univers.',
                img: '/Photos/images-42.jpg' // The Society
              },
              {
                title: 'Cobra Kai',
                desc: 'Suite des films des années 90 de Karaté. Les combats opposent des apprenants de Miagido et ceux de Cobra-Kai.',
                img: '/Photos/images-74.jpg' // Cobra Kai
              },
              {
                title: 'Bia',
                desc: "Une série espirer d'une vraie vie. Elle démontre la vie d'une artiste en musique",
                img: '/Photos/images-63.jpg' // Bia
              },
              {
                title: "Kally's Mashup",
                desc: "Une série espirer d'une vraie vie. Elle démontre la vie d'une artiste en musique",
                img: '/Photos/images-65.jpg' // Kally's Mashup
              },
              {
                title: 'Everybody Hates Chris',
                desc: "Une série espirer d'une vraie vie. Elle démontre la vie en Amérique d'un jeune dans les années 90",
                img: '/Photos/download-88.jpg' // Everybody Hates Chris
              },
              {
                title: 'High-School Musical',
                desc: "Une série espirer d'une vraie vie. Elle démontre la vie des ados artistes en musique",
                img: '/Photos/download-90.jpg' // High-School Musical
              }
            ].map((item, idx) => (
              <div key={idx} style={{
                overflow: 'hidden',
                position: 'relative',
                height: 250,
                transition: '0.5s',
                boxShadow: '0 0 10px transparent',
                cursor: 'pointer'
              }} onMouseEnter={e => {
                e.currentTarget.querySelector('.hover-content').style.transform = 'translateX(0)';
              }} onMouseLeave={e => {
                e.currentTarget.querySelector('.hover-content').style.transform = 'translateX(100%)';
              }}>
                <img
                  src={item.img} // ← Image : {item.title}
                  alt={item.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div className="hover-content" style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'white',
                  textAlign: 'center',
                  padding: 10,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  transform: 'translateX(100%)',
                  transition: '0.5s'
                }}>
                  <h4 style={{ fontSize: 25, marginBottom: 10 }}>{item.title}</h4>
                  <p style={{ fontSize: 12, paddingBottom: 20 }}>{item.desc}</p>
                  <a href="#" style={{
                    padding: '10px 60px',
                    border: '2px solid #ff7200',
                    color: '#ff7200',
                    fontWeight: 'bold',
                    textDecoration: 'none'
                  }}>voir plus</a>
                </div>
              </div>
            ))}
        </div>
      </section>
    </div>
  );
};

export default HighSchool;
