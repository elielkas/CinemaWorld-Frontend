import React, { useEffect, useState } from 'react';

const Legend = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const styles = {
    body: {
      width: '100%',
      margin: 0,
      padding: 0,
      fontFamily: 'Arial, sans-serif',
    },
    header: {
      padding: '10px',
      display: 'flex',
      alignItems: 'center',
    },
    logo: {
      width: '90px',
    },
    h1: {
      marginLeft: '10px',
      fontSize: '24px',
      display: 'inline-block',
    },
    section: {
      width: isMobile ? '95%' : '80%',
      margin: '0 auto',
      minHeight: '400px',
      paddingBottom: '10px',
      marginBottom: '10px',
      boxSizing: 'border-box',
      color: 'white',
    },
    sec: {
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: isMobile ? 'column' : 'row',
    },
    gauche: {
      width: isMobile ? '100%' : '70%',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    },
    droite: {
      width: isMobile ? '100%' : '29.7%',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      marginLeft: isMobile ? '0' : '0.3%',
    },
    except: {
      width: '100%',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    },
    tableImg: {
      borderRadius: '30%',
      width: '40px',
      height: '40px',
    },
    divShadow: {
      boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)',
      borderRadius: '10px',
      backgroundColor: '#fff',
      color: '#000',
      marginBottom: '10px',
      padding: '10px',
    },
    socialTable: {
      width: '100%',
      textAlign: 'center',
    },
    socialTd: {
      padding: '10px',
    },
    imgFull: {
      width: '100%',
      borderRadius: '10px',
    },
    socialLink: {
      textDecoration: 'none',
      color: 'black',
      fontSize: '14px',
    }
  };

  return (
    <div style={styles.body}>
      <header style={styles.header}>
        <img src="../Photos/download-29.jpg" alt="logo" style={styles.logo} />
        <h1 style={styles.h1}><strong>Ciné</strong>ma <span>Wo</span>rd</h1>
      </header>

      <main>
        <section style={styles.section}>
          <div style={styles.sec}>
            <div style={{ ...styles.gauche, minHeight: '520px', backgroundImage: 'url(../Photos/images-19.jpg)' }}>
              <p style={{ padding: '64% 10px 10px' }}>À bientôt les nouveautés sur la série Game of Thrones</p>
            </div>

            <div style={{ ...styles.droite, minHeight: '520px' }}>
              <div style={styles.sec}>
                <div style={{ ...styles.except, backgroundImage: 'url(../Photos/download-25.jpg)', minHeight: '320px' }}>
                  <p style={{ padding: '98% 10px 10px' }}>Préparez-vous au lancement dans 2 mois</p>
                </div>
                <div style={{ ...styles.gauche, backgroundImage: 'url(../Photos/download-53.jpg)', minHeight: '200px', marginLeft: isMobile ? 0 : '20%' }}>
                  <p style={{ padding: '70% 10px 10px' }}>Est-ce que Triniti trouvera le roi singe ? Tout dans la suite...</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section style={styles.section}>
          <div style={styles.sec}>
            <div style={styles.gauche}>
              <div style={styles.sec}>
                <div style={{ ...styles.gauche, minHeight: '350px' }}>
                  <img src="../Photos/images-33.jpg" alt="Merlin" style={styles.imgFull} height="248" />
                  <h3>Merlin, une série qui a remporté le prix Nobel pendant 3 ans d’affilée</h3>
                  <a href="#">À savoir plus</a>
                </div>

                <div style={{ ...styles.droite, minHeight: '350px' }}>
                  <div style={styles.sec}>
                    {[
                      ['../Photos/images-22.jpg', 'dddjddjsd cbcv bvscnb fffjdfhfv'],
                      ['../Photos/download-24.jpg', 'Le roi Simba dans la deuxième partie'],
                      ['../Photos/download-27.jpg', 'dddjddjsd cbcv bvscnb fffjdfhfv'],
                      ['../Photos/download-28.jpg', 'dddjddjsd cbcv bvscnb fffjdfhfv bvv']
                    ].map(([src, text], i) => (
                      <div key={i} style={styles.sec}>
                        <div style={{ ...styles.gauche, width: '40%' }}>
                          <img src={src} alt="#" style={{ width: '100%' }} />
                        </div>
                        <div style={{ ...styles.droite, width: '60%' }}>
                          <p>{text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div style={styles.droite}>
              <div style={{ ...styles.droite, minHeight: '350px', width: '100%' }}>
                <div style={styles.divShadow}>
                  <h3 style={{
                    backgroundColor: 'blue',
                    margin: 0,
                    textAlign: 'center',
                    fontSize: '22px',
                    color: 'white',
                    borderRadius: '10px',
                    padding: '10px'
                  }}>
                    Visitez nos plateformes
                  </h3>
                  <table style={styles.socialTable}>
                    <tbody>
                      {[
                        [
                          ['https://facebook.com', '../Photos/IMG_20240306_203842.jpg', 'Facebook'],
                          ['https://youtube.com', '../Photos/IMG_20240306_204005.jpg', 'Youtube'],
                          ['https://instagram.com', '../Photos/PhotosIMG_20240306_203842.jpg', 'Instagram']
                        ],
                        [
                          ['https://twitter.com', '../Photos/download-3.png', 'Twitter'],
                          ['https://telegram.org', '../Photos/download-99.jpg', 'Telegram'],
                          ['https://netflix.com', '../Photos/download-6.png', 'Netflix']
                        ]
                      ].map((row, rowIndex) => (
                        <tr key={rowIndex}>
                          {row.map(([link, src, text], colIndex) => (
                            <td key={colIndex} style={styles.socialTd}>
                              <a href={link} target="_blank" rel="noopener noreferrer" style={styles.socialLink}>
                                <img src={src} alt={text} style={styles.tableImg} /><br />{text}
                              </a>
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div style={{ ...styles.divShadow, marginTop: '10px' }}>
                  <h3 style={{ marginTop: '7px' }}>Plein de programmes ici</h3>
                  <div style={{
                    backgroundImage: 'url(../Photos/images-40.jpg)',
                    height: '170px',
                    backgroundSize: 'cover',
                    borderRadius: '10px',
                    marginTop: '10px'
                  }}>
                    <p style={{ paddingTop: '48%', paddingLeft: '10px' }}>hshshssh</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Legend;
