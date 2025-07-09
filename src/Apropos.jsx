import React, { useState } from "react";
import Sidebar2 from "./Composants/Slidebar2";
import MainContent2 from "./Composants/MainContent2";
import Footer from "./Composants/Footer";

const Apropos = () => {
  const [activeComponent, setActiveComponent] = useState("Action"); // Par défaut sur Action

  const styles = {
    // ... (vos styles existants)
    page: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
    },
    contentContainer: {
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
    },
    sidebarWrapper: {
      flexBasis: '20%',
      position: 'sticky',
      top: 0,
      alignSelf: 'flex-start',
      height: 'calc(100vh - 60px)',
      overflowY: 'auto',
      backgroundColor: '#f0f0f0',
    },
    mainWrapper: {
      width: '80%',
      padding: '20px',
      boxSizing: 'border-box',
    },
  };

  return (
    <div style={styles.page}>
      <div style={styles.contentContainer}>
        <div style={styles.sidebarWrapper}>
          <Sidebar2 
            activeComponent={activeComponent} 
            setActiveComponent={setActiveComponent} 
          />
        </div>
        <div style={styles.mainWrapper}>
          <MainContent2 activeComponent={activeComponent} />
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Apropos;