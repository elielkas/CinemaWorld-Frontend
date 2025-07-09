import React from "react";
import Publier from "./SousComposants/Publier";
import Comptes from "./SousComposants/Comptes";

const components = {
    Publier: Publier,
    Comptes: Comptes,
};

const MainContent = ({ activeComponent }) => {
    const styles = {
        content: {
            padding: '20px',
            overflowY: 'auto',
            height: '100%',
        },
    };

    const ActiveComponent = components[activeComponent] || Publier;

    return (
        <main style={styles.content}>
            <ActiveComponent />
        </main>
    );
};

export default MainContent;
