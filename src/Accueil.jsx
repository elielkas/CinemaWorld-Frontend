import React from "react";
import Carousel from "./Composants/Carousel";
import Footer from "./Composants/Footer";
import DernierSortie from "./Composants/DernierSortie";
import ContentAccueil from "./ContentAccueil";
import Livres from "./Composants/Livres";

const Accueil = () => {
  // Exemple de styles inline bien organisés (facultatif mais conseillé si pas de CSS modules)
  const styles = {
    pageContainer: {
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#f9f9f9",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between"
    },
    main: {
      flexGrow: 1,
      padding: "20px",
      textAlign: "center"
    },
  };
  return (
    <div style={styles.pageContainer}>
      <main style={styles.main}>
        <Carousel />

        <DernierSortie />

        <Livres />

        <ContentAccueil />
      </main>
      <Footer />
    </div>
  );
};
export default Accueil;