import React from "react";

const SavoirPlus = () => {
  return (
    <div style={styles.container}>
      {/* Section Informations légales */}
      <div style={styles.section}>
        <div style={styles.titleContainer}>
          <h2 style={styles.sectionTitle}>Informations <br /> légales</h2>
          <p style={styles.sectionSubtitle}>
            Comme vous vous le savez déjà, nous sommes une entreprise de divertissement dans le secteur du cinéma et multi-média.
            Nous sommes une plateforme de publication et publicité pour des nouveautés des films et séries populaires sur la planète.
          </p>
        </div>

        <div style={styles.aboutContainer}>
          <div style={styles.aboutText}>
            <h3 style={styles.aboutHeading}>NOTRE SIÈGE ET DIFFÉRENTS BUREAUX PHYSIQUES</h3>
            <p style={styles.aboutParagraph}>
              Tout d'abord vous devez savoir que nous sommes une entreprise anonyme dont le siège social se trouve à Bel-Air/New-York.
              Nos différentes agences sont réparties dans différents pays comme TANZANIA/Afrique, Chine/Asie, Paris/Europe, Californie/Amérique, ...
            </p>
          </div>
          <div style={styles.aboutImage}>
            <img
              src="/Photos/download-3.jpg"
              alt="Siège social"
              style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "8px" , maxHeight:"450px" }}
            />
          </div>
        </div>
      </div>

      {/* Section Services */}
      <div style={styles.section}>
        <div style={styles.titleContainer}>
          <h2 style={styles.sectionTitle}>Services</h2>
          <p style={styles.sectionSubtitle}>Nous nous plongeons dans différentes tâches dont :</p>
        </div>

        <div style={styles.servicesGrid}>
          {services.map((service, index) => (
            <div key={index} style={styles.serviceCard}>
              <div style={styles.serviceImage}>
                <img
                  src={service.imageSrc}
                  alt={service.imageAlt}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                <div style={styles.serviceOverlay}>
                  <span style={styles.serviceTitle}>{service.title}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section Nos Préférés */}
      <div style={styles.section}>
        <div style={styles.titleContainer}>
          <h2 style={styles.sectionTitle}>NOS PRÉFÉRÉS</h2>
          <p style={styles.sectionSubtitle}>Parmi les films publiés, nous en avons nos films cultes</p>
        </div>

        <div style={styles.blogGrid}>
          {blogs.map((blog, index) => (
            <div key={index} style={styles.blogCard}>
              <div style={styles.blogImageContainer}>
                <img
                  src={blog.imageSrc}
                  alt={blog.imageAlt}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                <span style={styles.blogDate}>{blog.date}</span>
              </div>
              <div style={styles.blogMeta}>
                <span style={styles.blogAuthor}>Posté par : {blog.author}</span>
                <div style={styles.blogStats}>
                  <span style={styles.blogStat}><strong>{blog.comments}</strong> Commentaires</span>
                  <span style={styles.blogStat}><strong>{blog.likes}</strong> Likes</span>
                </div>
              </div>
              <h3 style={styles.blogTitle}>{blog.title}</h3>
              <p style={styles.blogDescription}>{blog.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Données des services avec images
const services = [
  { title: "La distribution", imageAlt: "Image distribution", imageSrc: "/Photos/images-51.jpg" },
  { title: "La production", imageAlt: "Image production", imageSrc: "/Photos/download.jpg" },
  { title: "La publicité", imageAlt: "Image publicité", imageSrc: "/Photos/banner2.jpg" },
  { title: "Le divertissement", imageAlt: "Image divertissement", imageSrc: "/Photos/images-15.jpg" },
  { title: "La cotation", imageAlt: "Image cotation", imageSrc: "/Photos/images-1.jpg" },
  { title: "L'organisation", imageAlt: "Image organisation", imageSrc: "/Photos/download-1.jpg" }
];

// Données des blogs avec images
const blogs = [
  {
    imageAlt: "Tour Tanzania",
    imageSrc: "/Photos/download-35.jpg",
    date: "10 August 2015",
    author: "notre entreprise de TANZANIA",
    comments: "200K",
    likes: "150K",
    title: "TOUR POUR TANZANIA",
    description: "Notre entreprise au niveau de la distribution des films est incroyablement irréprochable"
  },
  {
    imageAlt: "Tour Paris",
    imageSrc: "/Photos/images-78.jpg",
    date: "12 August 2016",
    author: "notre entreprise de Paris",
    comments: "96K",
    likes: "120K",
    title: "TOUR POUR PARIS",
    description: "Nous avons une construction incroyable pour l'amélioration de nos productions dans ce secteur"
  },
  {
    imageAlt: "Tour Japon",
    imageSrc: "/Photos/images-57.jpg",
    date: "14 June 2017",
    author: "UFV de Japon",
    comments: "555K",
    likes: "650K",
    title: "TOUR POUR JAPON",
    description: "Le tour pour Japon a été le plus rentable sans nul doute à 2017 par la publication de cette série culte Squid-Games"
  },
  {
    imageAlt: "Tour Californie",
    imageSrc: "/Photos/download-81.jpg",
    date: "15 December 2019",
    author: "l'entreprise de WORKSHOP FOR THE WORLD",
    comments: "345K",
    likes: "433K",
    title: "TOUR POUR CALIFORNIE/USA",
    description: "Pour ça, on peut seulement dire que c'est le berceau du cinéma"
  },
  {
    imageAlt: "Tour Brezile",
    imageSrc: "/Photos/download-101.jpg",
    date: "17 December 2019",
    author: "l'entreprise de BRAZILIA FOR THE WORLD",
    comments: "345K",
    likes: "433K",
    title: "TOUR POUR RIO DE PAROMA/BREZILE",
    description: "Pour ça, on peut seulement dire que c'est le berceau du foot"
  }
];

// Styles CSS inline
const styles = {
  container: {
    fontFamily: "'Arial', sans-serif",
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "20px",
    color: "#333",
  },
  section: {
    marginBottom: "60px",
  },
  titleContainer: {
    textAlign: "center",
    marginBottom: "40px",
  },
  sectionTitle: {
    fontSize: "2.3rem",
    color: "#ff7200",
    marginBottom: "15px",
  },
  sectionSubtitle: {
    fontSize: "1.1rem",
    color: "black",
    maxWidth: "800px",
    margin: "0 auto",
    lineHeight: "1.6",
  },
  aboutContainer: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    gap: "30px",
    marginTop: "30px",
  },
  aboutText: {
    flex: "1 1 300px",
    minWidth: "300px",
  },
  aboutHeading: {
    fontSize: "1.5rem",
    color: "#4040c0",
    marginBottom: "20px",
  },
  aboutParagraph: {
    fontSize: "1rem",
    lineHeight: "1.6",
    color: "#555",
  },
  aboutImage: {
    flex: "1 1 300px",
    minHeight: "300px",
    backgroundColor: "#f5f5f5",
    borderRadius: "8px",
    overflow: "hidden",
  },
  servicesGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
    gap: "20px",
  },
  serviceCard: {
    borderRadius: "8px",
    overflow: "hidden",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  },
  serviceImage: {
    position: "relative",
    height: "200px",
    backgroundColor: "#f5f5f5",
  },
  serviceOverlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(64, 64, 192, 0.8)",
    padding: "15px",
    textAlign: "center",
  },
  serviceTitle: {
    color: "white",
    fontWeight: "bold",
    fontSize: "1.1rem",
  },
  blogGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
    gap: "20px",
  },
  blogCard: {
    backgroundColor: "#f9f9f9",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.05)",
  },
  blogImageContainer: {
    position: "relative",
    height: "200px",
    marginBottom: "15px",
    borderRadius: "8px",
    overflow: "hidden",
  },
  blogDate: {
    position: "absolute",
    top: "0px",
    left: "0px",
    backgroundColor: "rgb(64, 64, 192)",
    color: "white",
    padding: "5px 10px",
    borderRadius: "4px",
    fontSize: "1.4rem",
  },
  blogMeta: {
    fontSize: "0.9rem",
    color: "#666",
    marginBottom: "10px",
  },
  blogAuthor: {
    display: "block",
    marginBottom: "5px",
  },
  blogStats: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "0.85rem",
  },
  blogStat: {
    color: "#ff7200",
  },
  blogTitle: {
    fontSize: "1.3rem",
    color: "#333",
    marginBottom: "10px",
  },
  blogDescription: {
    fontSize: "1rem",
    color: "#555",
    lineHeight: "1.5",
  },
};

export default SavoirPlus;