import "./StyleIndex.css"


const Entete = () => {
    return(
      <div id="StyleEntete">
        
        
            <div className="icon">
                <h2 className="logo">CinémaWorld</h2>
            </div>
            <div className="navbar">
                <div className="content">
                    <h1><br /><br />Bienvenue À Vous Tous!<br />
                    Suivez<br />
                    <span>CinémaWorld</span><br />
                    Pour Toujours
                    </h1>
                    <p className="par">
                    Nous sommes heureux de vous accueillir sur notre nouveau site web<br />
                    Ce site a été créé dans le cadre de divertissement et d'éducation.<br />
                    Comme prévu, nous retrouvons différents films et séries.
                    </p>
                    <button className="cn"><a href="#">REJOINDRE</a></button>
                </div>

                {/* Formulaire d'authentification */}
                <div className="form">
                    <form id="formulaire">
                        <h2>Se Connecter</h2>
                        <input type="email" name="email" placeholder="Entrer votre e-mail" id="eml" required/>
                        <input type="password" name="mdp" placeholder="Entrer votre mot de passe" id="pass"required/>
                        <button type="submit" className="btnn">Envoyer</button>
                        <p className="link"> Si vous n'avez pas de compte<br />
                            <a href="hero.jsx" target="_blank">Créer un compte</a> Now
                        </p>
                        <p className="liw">Se connecter avec</p>

                        <div className="icons">
                            <a href="#"><img src="/download-1.png" alt="icon1" /></a>
                            <a href="#"><img src="/Photos/PhotosIMG_20240306_203842.jpg" alt="icon2" /></a>
                            <a href="#"><img src="/Photos/IMG_20240306_204005.jpg" alt="icon3" /></a>
                            <a href="#"><img src="/Photos/download-2.png" alt="icon4" /></a>
                            <a href="#"><img src="/Photos/Netflix.jpg" alt="icon5" /></a>
                        </div>
                    </form>
                </div>
        </div>

      </div>
        )
    } 
    export default Entete