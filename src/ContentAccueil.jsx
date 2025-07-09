import React from "react";

function ContentAccueil() {
  const videos = [
    { id: 1, src: "/videos/CobraKai.mp4", title: "Cobra Kai" },
    { id: 2, src: "/videos/Kuroko.mp4", title: "Kuroko" },
    { id: 3, src: "/videos/NarutoMadara.mp4", title: "Naruto" },
    { id: 4, src: "/videos/CobraKai.mp4", title: "Vidéo 4" },
    { id: 5, src: "/videos/CobraKai.mp4", title: "Vidéo 5" },
    { id: 6, src: "/videos/CobraKai.mp4", title: "Vidéo 6" },
    { id: 7, src: "/videos/CobraKai.mp4", title: "Vidéo 7" },
    { id: 8, src: "/videos/CobraKai.mp4", title: "Vidéo 8" },
  ];

  const containerStyle = {
    padding: "20px",
    maxWidth: "1200px",
    margin: "0 auto",
    borderTop: "2px solid black",
  };

  const titleStyle = {
    textAlign: "center",
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "20px",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "20px",
  };

  const videoCardStyle = {
    backgroundColor: "#fff",
    borderRadius: "8px",
    overflow: "hidden",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
    textAlign: "center",
  };

  const videoStyle = {
    width: "100%",
    height: "200px",
    objectFit: "cover",
  };

  const footerStyle = {
    padding: "10px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const titleTextStyle = {
    fontSize: "16px",
    fontWeight: "500",
  };

  const downloadButtonStyle = {
    backgroundColor: "#007bff",
    color: "#fff",
    padding: "6px 12px",
    border: "none",
    borderRadius: "4px",
    textDecoration: "none",
    fontSize: "14px",
    cursor: "pointer",
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>Films et Séries Populaires</h2>
      <div style={gridStyle}>
        {videos.map((video) => (
          <div key={video.id} style={videoCardStyle}>
            <video style={videoStyle} controls loop>
              <source src={video.src} type="video/mp4" />
              Votre navigateur ne supporte pas la lecture de vidéos.
            </video>
            <div style={footerStyle}>
              <span style={titleTextStyle}>{video.title}</span>
              <a href={video.src} download style={downloadButtonStyle}>Télécharger</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ContentAccueil;
