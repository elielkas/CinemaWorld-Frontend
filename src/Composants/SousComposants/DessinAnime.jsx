import React from 'react';

const DessinAnime = () => {
  const styles = {
    body: {
      width: '100%',
      margin: 0,
      padding: 0,
      fontFamily: 'Arial, sans-serif',
    },
    section: {
      width: '97.9%',
      marginLeft: '1.2%',
      minHeight: '400px',
      paddingBottom: '10px',
      marginBottom: '10px',
      boxSizing: 'border-box',
    },
    sec: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    gauche: {
      width: '50%',
      float: 'left',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    },
    droite: {
      marginLeft: '0.3%',
      width: '49.7%',
      float: 'left',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    },
    except: {
      width: '100%',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    },
    tableImg: {
      borderRadius: '30%',
      width: '50px',
      height: '50px',
    },
    platformTable: {
      padding: '0px 30px 30px 30px',
      width: '100%',
      textAlign: 'center',
    },
    platformCell: {
      padding: '0px',
    },
    header: {
      display: 'flex',
      alignItems: 'center',
      padding: '10px',
      borderBottom: '2px solid #ccc',
    },
    headerImg: {
      width: '90px',
      marginRight: '20px',
    },
    title: {
      fontSize: '2em',
      fontWeight: 'bold',
    },
    highlight: {
      color: 'crimson',
    },
    link: {
      color: 'white',
      textDecoration: 'none',
    },
    responsiveImg: {
      width: '100%',
      height: 'auto',
    },
  };

  return (
    <div style={styles.body}>
      <header style={styles.header}>
        <img src="../Photos/download-29.jpg" alt="logo" style={styles.headerImg} />
        <h1 style={styles.title}>
          <strong>Ciné</strong>ma <span style={styles.highlight}>Wo</span>rd
        </h1>
      </header>

      <main>
        {/* Section principale */}
        <section style={{ ...styles.section, backgroundColor: 'aqua', color: 'white', marginTop: '2px' }}>
          <div style={styles.sec}>
            <div style={{ ...styles.gauche, backgroundImage: 'url(../Photos/download-16.jpg)', minHeight: '400px' }}>
              <p style={{ paddingTop: '60.2%', marginLeft: 0 }}>À bientôt les nouveautés sur la série</p>
            </div>
            <div style={{ ...styles.droite, minHeight: '400px' }}>
              <div style={styles.sec}>
                <div style={{ ...styles.except, backgroundImage: 'url(../Photos/download-10.jpg)', minHeight: '200px' }}>
                  <p style={{ paddingTop: '28%' }}>Préparez-vous au lancement dans 2 mois</p>
                </div>
                <div style={{ ...styles.gauche, backgroundImage: 'url(../Photos/download-19.jpg)', minHeight: '200px' }}>
                  <p style={{ paddingTop: '50%' }}>Qui est le plus grand ninja de CONOHAA ?</p>
                </div>
                <div style={{ ...styles.droite, backgroundImage: 'url(../Photos/download-12.jpg)', minHeight: '200px' }}>
                  <p style={{ paddingTop: '50%' }}>Est-ce que l'avatar finira la guerre, dans la suite...</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Deuxième section */}
        <section style={styles.section}>
          <div style={styles.sec}>
            <div style={styles.gauche}>
              <div style={styles.sec}>
                <div style={{ ...styles.gauche, minHeight: '350px', backgroundColor: 'aqua' }}>
                  <img src="../Photos/download-6.jpg" alt="#" style={{ width: '100%', height: '248px' }} />
                  <h3>La bande ciné est sortie il y a 3 jours</h3>
                  <a href="#" style={styles.link}>En savoir plus</a>
                </div>
                <div style={{ ...styles.droite, minHeight: '350px' }}>
                  <div style={styles.sec}>
                    {[
                      { img: '../Photos/images-10.jpg', text: "A la decouverte des aventures" },
                      { img: '../Photos/images-5.jpg', text: 'Le roi Simba dans la deuxième partie.' },
                      { img: '../Photos/images-15.jpg', text: 'La petite fille' },
                      { img: '../Photos/images-12.jpg', text: 'La princesse de mer qui veut découvrir le monde' },
                    ].map((item, index) => (
                      <React.Fragment key={index}>
                        <div style={styles.gauche}>
                          <img src={item.img} alt="#" style={{ width: '80%' }} />
                        </div>
                        <div style={styles.droite}>
                          <p>{item.text}</p>
                        </div>
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Plateformes */}
            <div style={styles.droite}>
              <div style={styles.sec}>
                <div style={{ ...styles.gauche, minHeight: '350px', width: '44%' }}>
                  <img src="../Photos/images-8.jpg" alt="#" style={{ width: '100%', height: '138px' }} />
                  <p>Les Dessins animés qui ont récemment cartonné sur Internet</p>
                  <img src="../Photos/images-4.jpg" alt="#" style={{ width: '100%', height: '138px' }} />
                </div>
                <div style={{ ...styles.droite, minHeight: '350px', width: '53%', marginLeft: '3%' }}>
                  <h3 style={{ backgroundColor: 'blue', marginTop: 0, textAlign: 'center', color: 'white' }}>Visitez nos plates-formes</h3>
                  <table style={styles.platformTable}>
                    <tbody>
                      {[
                        [
                          { href: 'https://facebook.com', img: '../Photos/IMG_20240306_203842.jpg', name: 'Facebook' },
                          { href: 'https://youtube.com', img: '../Photos/IMG_20240306_204005.jpg', name: 'YouTube' },
                          { href: 'https://instagram.com', img: '../Photos/PhotosIMG_20240306_203842.jpg', name: 'Instagram' },
                        ],
                        [
                          { href: 'https://twitter.com', img: '../Photos/download-3.png', name: 'Twitter' },
                          { href: 'https://telegram.org', img: '../Photos/download-99.jpg', name: 'Telegram' },
                          { href: 'https://netflix.com', img: '../Photos/download-6.png', name: 'Netflix' },
                        ],
                        [
                          { href: 'https://vidmateapp.com', img: '../Photos/download-44.jpg', name: 'Vidmate' },
                          { href: 'https://google.com', img: '../Photos/download-7.png', name: 'Google' },
                          { href: 'https://pinterest.com', img: '../Photos/download-1.jpg', name: 'Pinterest' },
                        ],
                      ].map((row, rowIndex) => (
                        <tr key={rowIndex}>
                          {row.map((platform, colIndex) => (
                            <td key={colIndex} style={styles.platformCell}>
                              <a href={platform.href} target="_blank" rel="noopener noreferrer" style={styles.link}>
                                <img src={platform.img} alt={platform.name} style={styles.tableImg} /><br />
                                {platform.name}
                              </a>
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default DessinAnime;
