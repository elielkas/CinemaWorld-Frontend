import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.sec}>
        {/* Section Réseaux Sociaux et Applis */}
        <div style={styles.div1}>
          <p style={styles.paragraph}>Continuez à nous suivre !</p>
          <div style={styles.iconsSocial}>
            <img src="/Photos/IMG_20240306_204005.jpg" alt="social-1" style={styles.iconImage} />
            <img src="/Photos/PhotosIMG_20240306_203842.jpg" alt="social-2" style={styles.iconImage} />
            <img src="/Photos/IMG_20240306_203842.jpg" alt="social-3" style={styles.iconImage} />
          </div>
          <p style={styles.paragraph}>Télécharger l'application</p>
          <div style={styles.iconsSocial2}>
            <img src="/Photos/download-1.png" alt="app-1" style={styles.downloadImage} />
            <img src="/Photos/download-45.jpg" alt="app-2" style={{ ...styles.downloadImage, marginLeft: 10 }} />
          </div>
        </div>

        <hr style={styles.hr} />

        {/* Section Liens */}
        <div style={styles.div2}>
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 style={styles.heading}>{section.title}</h3>
              <div style={styles.linkList}>
                {section.links.map((link, i) => (
                  <a key={i} href="#" style={styles.link}>
                    {link}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <hr style={styles.hr} />

        {/* Section Bas de page */}
        <div style={styles.div3}>
          <p style={styles.footerText}>
            Pour votre divertissement, merci de consulter chaque jour un de nos services. www.CinémaWorld.fr
          </p>
          <p style={styles.copyText}>&copy;2024 El-kas</p>
        </div>
      </div>
    </footer>
  );
};

// ================= Styles Inline =================
const styles = {
  footer: {
    backgroundColor: "#383737",
    color: "#fff",
    marginTop: 20,
    padding: "25px 10%",
    width: "100%",
    boxSizing: "border-box",
  },
  sec: {
    margin: "0 10px",
    marginLeft: 25,
  },
  div1: {
    marginBottom: 30,
  },
  paragraph: {
    fontSize: 15,
    marginBottom: 10,
  },
  iconsSocial: {
    display: "flex",
    gap: 10,
    margin: "15px 0",
  },
  iconsSocial2: {
    display: "flex",
    flexWrap: "wrap",
    gap: 10,
    margin: "15px 0",
  },
  iconImage: {
    height: 50,
    border: "1px solid #fff",
    cursor: "pointer",
    borderRadius: 4,
    marginTop: 20,
  },
  downloadImage: {
    width: 200,
    borderRadius: 10,
    border: "1px solid #fff",
    marginTop: 15,
    cursor: "pointer",
  },
  hr: {
    border: "none",
    borderTop: "1px solid #fff",
    margin: "15px 0",
  },
  div2: {
    marginTop: 20,
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: 20,
  },
  heading: {
    marginBottom: 10,
    textTransform: "capitalize",
  },
  linkList: {
    display: "flex",
    flexDirection: "column",
  },
  link: {
    fontSize: 13,
    color: "#fff",
    textDecoration: "none",
    marginBottom: 5,
    transition: "0.5s",
  },
  div3: {
    marginTop: 20,
    textAlign: "center",
  },
  footerText: {
    fontSize: 13,
  },
  copyText: {
    fontSize: 12,
    color: "#999",
    marginTop: 10,
  },
};

// ================ Données Dynamiques ================
const footerLinks = [
  {
    title: "films",
    links: ["Actualités du moment", "Catégories", "Plus suivis"],
  },
  {
    title: "séries",
    links: ["Actualités du moment", "Catégories", "Plus suivis"],
  },
  {
    title: "théatres",
    links: ["Actualités du moment", "Catégories", "Plus suivis"],
  },
  {
    title: "informations légales",
    links: ["Infos sur le concepteur", "Infos sur le site", "Infos sur les clients"],
  },
];

export default Footer;
