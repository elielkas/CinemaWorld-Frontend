import React from "react";
import Action from "./SousComposants/Action";
import Comique from "./SousComposants/Comique";
import DessinAnime from "./SousComposants/DessinAnime";
import Fiction from "./SousComposants/Fiction";
import HighSchool from "./SousComposants/HighSchool";
import Legend from "./SousComposants/Legend";
import Novelas from "./SousComposants/Novelas";

const components = {
    Action: Action,
    Comique: Comique,
    DessinAnime: DessinAnime,
    Fiction: Fiction,
    HighSchool: HighSchool,
    Legend: Legend,
    Novelas: Novelas,
};

const MainContent2 = ({ activeComponent }) => {
    const styles = {
        content: {
            padding: '20px',
            overflowY: 'auto',
            height: '100%',
        },
    };

    const ActiveComponent = components[activeComponent] || Action;

    return (
        <main style={styles.content}>
            <ActiveComponent />
        </main>
    );
};

export default MainContent2;