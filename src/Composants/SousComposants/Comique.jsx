import React from 'react';

const Comique = () => {
  const styles = {
    global: {
      boxSizing: 'border-box',
      fontFamily: "'poppins', sans-serif",
      scrollBehavior: 'smooth',
    },
    p: {
      fontWeight: 300,
      color: '#111',
    },
    btnReserve: {
      padding: '10px 15px',
      background: '#ff7200',
      marginTop: '-10px',
      textTransform: 'uppercase',
      borderRadius: '10px',
    },
    banniere: {
      position: 'relative',
      width: '100%',
      minHeight: '95vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundImage: 'url(/Photos/download-39.jpg)',
      backgroundSize: 'cover',
    },
    contenu1: {
      maxWidth: '70%',
      textAlign: 'center',
    },
    banniereH2: {
      color: 'white',
      fontSize: '3em',
      textTransform: 'uppercase',
    },
    btn1: {
      fontSize: '1em',
      color: 'white',
      background: 'orange',
      padding: '10px 20px',
      display: 'inline-block',
      marginTop: '20px',
      textTransform: 'uppercase',
      textDecoration: 'none',
      letterSpacing: '2px',
      transition: '0.5s',
      marginLeft: '10px',
    },
    btn2: {
      fontSize: '1em',
      color: '#ff7200',
      background: 'white',
      padding: '10px 20px',
      display: 'inline-block',
      marginTop: '20px',
      textTransform: 'uppercase',
      textDecoration: 'none',
      letterSpacing: '2px',
      transition: '0.5s',
      marginLeft: '10px',
    },
    section: {
      padding: '100px',
    },
    row: {
      position: 'relative',
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
    },
    col50: {
      position: 'relative',
      width: '48%',
      justifyContent: 'center',
      alignItems: 'center',
      '@media (max-width: 768px)': {
        width: '100%',
      },
    },
    titreTexte: {
      color: 'black',
      fontSize: '2em',
      fontWeight: 300,
      textTransform: 'capitalize',
    },
    spanOrange: {
      color: '#ff7200',
      fontSize: '1.5em',
      fontWeight: 700,
    },
    imgResponsive: {
      maxWidth: '100%',
      height: 'auto',
      '@media (max-width: 768px)': {
        width: '100%',
      },
    },
    titre: {
      display: 'flex',
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
    },
    menu: {
      marginTop: '-180px',
    },
    contenu: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      marginTop: '40px',
    },
    box: {
      width: '350px',
      margin: '20px',
      border: '20px solid white',
      boxShadow: '10px 5px 25px rgba(0,0,0,0.8)',
      '@media (max-width: 768px)': {
        width: '90%',
        margin: '20px auto',
      },
    },
    inbox: {
      position: 'relative',
      width: '100%',
      height: '200px',
    },
    text: {
      textAlign: 'center',
      fontWeight: 300,
      color: '#111',
      textTransform: 'uppercase',
    },
    expert: {
      marginTop: '100px',
    },
    expertContenu: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      marginTop: '40px',
    },
    expertBox: {
      width: '350px',
      margin: '20px',
      border: '20px solid white',
      boxShadow: '10px 5px 25px rgba(0,0,0,0.8)',
      '@media (max-width: 768px)': {
        width: '90%',
        margin: '20px auto',
      },
    },
  };

  return (
    <div style={styles.global}>
      <section className="banniere" style={styles.banniere} id="banniere">
        <div className="contenu1" style={styles.contenu1}>
          <h2 style={styles.banniereH2}>Retrouvez toutes les nouveautés</h2>
          <p style={{...styles.p, color: '#fff', fontSize: '1.2em'}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At porro, ipsa totam molestiae tempora est soluta quaerat? Expedita ut earum suscipit quidem natus, nesciunt accusantium maxime iusto hic architecto excepturi.
          </p>
          <a href="#" className="btn1" style={styles.btn1}>Notre menu</a>
          <a href="#" className="btn2" style={styles.btn2}>Visitez plus</a>
        </div>
      </section>

      <section className="apropos" style={styles.section} id="apropos">
        <div className="row" style={styles.row}>
          <div className="col50" style={styles.col50}>
            <h2 className="titre-texte" style={styles.titreTexte}>
              <span style={styles.spanOrange}>A</span> Propos De Nous
            </h2>
            <p style={styles.p}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet quas aliquam repellat officia atque ullam, nostrum quibusdam eaque,
              commodi enim nemo facere illum blanditiis. Optio minima necessitatibus voluptatem doloribus porro.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam excepturi earum fuga tempore harum aut,
              iste nemo asperiores omnis perferendis tempora natus eaque quasi minima deserunt, dolorum placeat ea. Iusto.
            </p>
          </div>
          <div className="col50" style={styles.col50}>
            <div className="img">
              <img src="../Photos/download-67.jpg" alt="image" style={{...styles.imgResponsive, height: '450px', width: '100%', objectFit: 'cover'}} />
            </div>
          </div>
        </div>
      </section>

      <section className="menu" style={{...styles.section, ...styles.menu}} id="menu">
        <div className="titre" style={styles.titre}>
          <div className="col50" style={styles.col50}>
            <h2 className="titre-texte" style={styles.titreTexte}>
              <span style={styles.spanOrange}>M</span>enu
            </h2>
            <p style={styles.p}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet quas aliquam repellat officia atque ullam, nostrum quibusdam eaque,</p>
          </div>
        </div>
        
        <div className="contenu" style={styles.contenu}>
          {[
            {img: "../Photos/download-48.jpg", title: "222"},
            {img: "../Photos/download-37.jpg", title: "Prison break"},
            {img: "../Photos/download-57.jpg", title: "Society"},
            {img: "../Photos/download-64.jpg", title: "Charlie Chaplin"},
            {img: "../Photos/images-57.jpg", title: "Squad-Game"},
            {img: "../Photos/images-64.jpg", title: "Kally's Mashup"},
            {img: "../Photos/images-76.jpg", title: "Green ish"},
            {img: "../Photos/images-67.jpg", title: "Catalina"},
            {img: "../Photos/download-77.jpg", title: "Alice in bodlands"},
          ].map((item, index) => (
            <div className="box" key={index} style={styles.box}>
              <div className="inbox" style={styles.inbox}>
                <img src={item.img} alt="" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
              </div>
              <div className="text" style={styles.text}>
                <h3>{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
        
        <div className="titre" style={styles.titre}>
          <a href="#" className="btn1" style={styles.btn1}>Voir plus</a>
        </div>
      </section>

      <section className="expert" style={{...styles.section, ...styles.expert}} id="expert">
        <div className="titre" style={styles.titre}>
          <div className="col50" style={styles.col50}>
            <h2 className="titre-texte" style={styles.titreTexte}>
              Plus <span style={styles.spanOrange}>R</span>écents
            </h2>
            <p style={styles.p}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet quas aliquam repellat officia atque ullam, nostrum quibusdam eaque,</p>
          </div>
        </div>
        
        <div className="expert-contenu" style={styles.expertContenu}>
          <div className="expert-box" style={styles.expertBox}>
            <div className="inbox" style={styles.inbox}>
              <img src="../Photos/images-63.jpg" alt="" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
            </div>
            <div className="text" style={styles.text}>
              <h3>Bia</h3>
            </div>
          </div>
          
          <div className="expert-box" style={styles.expertBox}>
            <div className="inbox" style={styles.inbox}>
              <img src="../Photos/images-48.jpg" alt="" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
            </div>
            <div className="text" style={styles.text}>
              <h3>Macgyver</h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Comique;