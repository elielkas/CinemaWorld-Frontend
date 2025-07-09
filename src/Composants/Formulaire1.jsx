import React from "react";
import { useNavigate } from "react-router-dom";

const Formulaire1 = () => {
    const navigate = useNavigate();
    const [isHovered, setIsHovered] = React.useState(false);
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const styles = {
        container: {
            width: '90%',
            maxWidth: '325px',
            height: 'auto',
            background: 'linear-gradient(to top, rgba(0,0,0,0.8) 50%, rgba(0,0,0,0.8) 50%)',
            textAlign: 'center',
            borderRadius: '10px',
            padding: '2rem',
            margin: '6rem auto',
            color: '#fff',
            boxSizing: 'border-box',
        },
        title: {
            fontFamily: 'sans-serif',
            color: '#ff7200',
            fontSize: '1.5rem',
            backgroundColor: '#fff',
            borderRadius: '10px',
            margin: '0.5rem auto',
            padding: '0.5rem',
            maxWidth: '100%',
        },
        input: {
            width: '100%',
            height: '2.5rem',
            background: 'transparent',
            border: 'none',
            borderBottom: '1px solid #ff7200',
            color: '#fff',
            fontSize: '1rem',
            letterSpacing: '1px',
            marginTop: '1.5rem',
            fontFamily: 'sans-serif',
            outline: 'none',
        },
        button: {
            width: '100%',
            height: '2.5rem',
            background: '#ff7200',
            border: 'none',
            marginTop: '2rem',
            fontSize: '1.1rem',
            borderRadius: '10px',
            cursor: 'pointer',
            transition: '0.4s ease',
            color: '#000',
            fontWeight: 'bold',
        },
        buttonHover: {
            background: '#fff',
            color: '#ff7200',
        },
        smallText: {
            fontFamily: 'Arial, Helvetica, sans-serif',
            fontSize: '1rem',
            paddingTop: '1rem',
            textAlign: 'center',
        },
        link: {
            color: 'orange',
            textDecoration: 'none',
            fontWeight: 'bold',
            cursor: 'pointer',
        },
        socialIcons: {
            marginTop: '1.2rem',
            display: 'flex',
            justifyContent: 'center',
            gap: '0.8rem',
            flexWrap: 'wrap',
        },
        icon: {
            width: '2.5rem',
            height: '2.5rem',
            borderRadius: '50%',
            objectFit: 'cover',
        },
    };

    const handleCreateAccountClick = (e) => {
        e.preventDefault();
        navigate('/inscription');
    };

    // ... (le reste du code reste identique jusqu'à handleSubmit)

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (!email || !password) {
            alert("Veuillez remplir tous les champs");
            return;
        }
    
        try {
            const response = await fetch('http://localhost/MonProjetDeSiteWeb/CinemaWord/BackEnd/login.php', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });
    
            // Vérifier si la réponse est OK
            if (!response.ok) {
                throw new Error(`Erreur HTTP: ${response.status}`);
            }
    
            const data = await response.json();
            
            console.log('Réponse du serveur:', data); // Pour débogage
            if (data.success) {
                localStorage.setItem("role", data.role); // 'admin' ou 'utilisateur'
                localStorage.setItem("email", email); // Ajout de l'email
                navigate('/main-layout');
              }
              
            

        } catch (error) {
            console.error('Erreur de connexion:', error);
            alert("Erreur de connexion au serveur. Voir la console pour plus de détails.");
        }
    };

    console.log('État actuel:', {
        email,
        password,
        localStorage: {
            userType: localStorage.getItem('userType'),
            isAuthenticated: localStorage.getItem('isAuthenticated')
        }
    });


    return (
        <div style={styles.container}>
            <form onSubmit={handleSubmit}>
                <div style={styles.title}>Se Connecter</div>

                <input type="email" name="email" placeholder="Entrer votre e-mail" style={styles.input} required value={email} onChange={(e) => setEmail(e.target.value)}/>
                <input type="password" name="mdp" placeholder="Entrer votre mot de passe" style={styles.input} required value={password} onChange={(e) => setPassword(e.target.value)}/>

                <button
                    type="submit"
                    style={{
                        ...styles.button,
                        ...(isHovered ? styles.buttonHover : {}),
                    }}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    Envoyer
                </button>

                <p style={styles.smallText}>
                    Vous n'avez pas de compte ?<br />
                    <span style={styles.link} onClick={handleCreateAccountClick}>
                        Créer un compte
                    </span>{" "}
                    Maintenant
                </p>

                <p style={styles.smallText}>Se Connecter avec</p>

                <div style={styles.socialIcons}>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <img src="/Photos/IMG_20240306_203842.jpg" alt="Facebook" style={styles.icon} />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <img src="/Photos/PhotosIMG_20240306_203842.jpg" alt="Instagram" style={styles.icon} />
                    </a>
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                        <img src="/Photos/IMG_20240306_204005.jpg" alt="YouTube" style={styles.icon} />
                    </a>
                    <a href="https://telegram.org" target="_blank" rel="noopener noreferrer">
                        <img src="/Photos/download-2.png" alt="Telegram" style={styles.icon} />
                    </a>
                    <a href="https://google.com" target="_blank" rel="noopener noreferrer">
                        <img src="/Photos/download-7.png" alt="Google" style={styles.icon} />
                    </a>
                </div>
            </form>

            <style>
                {`
                    ::placeholder {
                        color: white;
                        opacity: 1;
                    }
                `}
            </style>
        </div>
    );
};

export default Formulaire1;
