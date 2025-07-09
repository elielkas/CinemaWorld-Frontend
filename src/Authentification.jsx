import React from "react";
import Presentation from "./Composants/Presentation";
import Formulaire1 from "./Composants/Formulaire1";

const Authentification = () => {
    const styles = {
        display : 'flex', 
        flexDirection : 'row', 
        minHeight : '100vh',
        backgroundImage : 'url(/Photos/images-17.jpg)',
        backgroundSize :'cover',
        backgroundPosition: 'center',
    };
    return(
        <div style={styles}>
            <Presentation/>
            <Formulaire1/>
        </div>
    );
};
export default Authentification;
