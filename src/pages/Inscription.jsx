import React, { useState } from 'react';

const Inscription = () => {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    mdp: '',
    photo: null,
  });

  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'photo') {
      const file = files[0];
      setFormData({ ...formData, photo: file });
      setPreview(URL.createObjectURL(file));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = new FormData();
    form.append("nom", formData.nom);
    form.append("email", formData.email);
    form.append("mdp", formData.mdp);
    if (formData.photo) form.append("photo", formData.photo);

      fetch('http://localhost/MonProjetDeSiteWeb/CinemaWord/BackEnd/inscription.php', {
        method: 'POST',
        body: form
      })
        .then(async (response) => {
          const text = await response.text();
          try {
            const data = JSON.parse(text);
            if (data.success) {
              alert("Inscription réussie !");
            } else {
              alert("Erreur : " + (data.message || "Inscription échouée"));
            }
          } catch (err) {
            console.error("Réponse non JSON :", text);
            alert("Erreur inattendue (réponse non JSON). Vérifie la console.");
          }
        })
        .catch(error => {
          console.error("Erreur de requête fetch :", error);
          alert("Une erreur est survenue : " + error.message);
        });

  };

  return (
    <>
      <style>{`
        body {
          margin: 0;
          font-family: sans-serif;
          background: linear-gradient(to top, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.5) 50%);
        }

        .inscription-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 20px;
        }

        form {
          width: 100%;
          max-width: 325px;
          background: linear-gradient(to top, rgba(0,0,0,0.8) 50%, rgba(0,0,0,0.8) 50%);
          padding: 25px;
          border-radius: 10px;
          box-sizing: border-box;
        }

        form h2 {
          text-align: center;
          color: #ff7200;
          font-size: 22px;
          background-color: #fff;
          border-radius: 10px;
          padding: 8px;
          margin-bottom: 20px;
        }

        .form-group {
          display: flex;
          align-items: center;
          margin-bottom: 15px;
        }

        .form-group img {
          width: 24px;
          height: 24px;
          margin-right: 10px;
        }

        input[type="email"],
        input[type="password"],
        input[type="text"] {
          flex: 1;
          padding: 8px;
          border: 1px solid #ccc;
          border-radius: 5px;
        }

        .upload-wrapper {
          justify-content: center;
        }

        .upload-label {
          display: inline-block;
          width: 120px;
          height: 120px;
          border-radius: 50%;
          overflow: hidden;
          cursor: pointer;
          border: 2px solid #ccc;
        }

        .upload-label img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        button {
          width: 100%;
          padding: 10px;
          background: #ff7200;
          color: #fff;
          font-weight: bold;
          border: none;
          border-radius: 10px;
          cursor: pointer;
          transition: 0.4s ease;
        }

        button:hover {
          background: #fff;
          color: #ff7200;
        }

        @media screen and (max-width: 480px) {
          .form-group {
            flex-direction: column;
            align-items: flex-start;
          }

          .form-group img {
            margin-bottom: 5px;
          }

          .upload-label {
            width: 100px;
            height: 100px;
          }
        }
      `}</style>


      {/*Code jsx*/}
      <div className="inscription-container">
        <h1>S'inscrire à CinemaWorld</h1>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <h2>Créer un compte</h2>

          <div className="form-group">
            <img src="/Photos/icons/user-white.png" alt="" />
            <input type="text" name="nom" placeholder="Entrer votre nom" required value={formData.nom} onChange={handleChange} />
          </div>

          <div className="form-group">
            <img src="/Photos/icons/mail-white.png" alt="" />
            <input type="email" name="email" placeholder="Entrer votre e-mail" required value={formData.email} onChange={handleChange} />
          </div>

          <div className="form-group">
            <img src="/Photos/icons/lock-white.png" alt="" />
            <input type="password" name="mdp" placeholder="Entrer votre mot de passe" required value={formData.mdp} onChange={handleChange} />
          </div>

          <div className="form-group upload-wrapper">
            <input type="file" name="photo" id="fileUpload" accept="image/*" onChange={handleChange} hidden />
            <label htmlFor="fileUpload" className="upload-label">
              <img src={preview || '/Photos/personCircle.png'} alt="Ajouter une photo" />
            </label>
          </div>

          <button type="submit">S'inscrire</button>
        </form>
      </div>
    </>
  );
};

export default Inscription;
