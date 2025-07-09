import React, { useState } from 'react';

const Publier = () => {
  const [formData, setFormData] = useState({
    nom: '',
    categorie: 'Action', // Valeur par défaut
    commentaire: '',
    photo: null,
  });

  const [preview, setPreview] = useState(null);

  const categories = [
    'Action',
    'Legend',
    'Fiction',
    'Dessin Animé',
    'High-school',
    'Comique',
    'Novalas'
  ];

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
    form.append("categorie", formData.categorie);
    form.append("commentaire", formData.commentaire);
    if (formData.photo) form.append("photo", formData.photo);

    fetch('http://localhost/MonProjetDeSiteWeb/CinemaWord/BackEnd/PublierSerie.php', {
      method: 'POST',
      body: form
    })
      .then(async (res) => {
        const text = await res.text();
        try {
          const data = JSON.parse(text);
          if (data.success) {
            alert("Série publiée avec succès !");
            setFormData({ nom: '', categorie: 'Action', commentaire: '', photo: null });
            setPreview(null);
          } else {
            alert("Erreur : " + (data.message || "Échec de la publication."));
          }
        } catch (e) {
          console.error("Réponse non JSON :", text);
          alert("Erreur inattendue. Voir la console.");
        }
      })
      .catch(err => {
        console.error("Erreur fetch :", err);
        alert("Erreur réseau : " + err.message);
      });
  };

  return (
    <>
      <style>
        {`
          body {
            margin: 0;
            font-family: sans-serif;
            background: white;
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

          input[type="text"],
          textarea,
          select {
            flex: 1;
            padding: 8px;
            border: 1px solid #ccc;
            border-radius: 5px;
          }

          textarea {
            min-height: 80px;
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
        `}
      </style>

      <div className="inscription-container">
        <h1>Publier une Série/Film</h1>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <h2>Nouvelle Publication</h2>

          <div className="form-group">
            <img src="/Photos/icons/video-white.png" alt="Nom" />
            <input 
              type="text" 
              name="nom" 
              placeholder="Nom de la série/film" 
              required 
              value={formData.nom} 
              onChange={handleChange} 
            />
          </div>

          <div className="form-group">
            <img src="/Photos/icons/edit-white.png" alt="Catégorie" />
            <select name="categorie"
              value={formData.categorie}
              onChange={handleChange}
              required
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <img src="/Photos/icons/comment-white.png" alt="Commentaire" />
            <textarea 
              name="commentaire" 
              placeholder="Description" 
              required 
              value={formData.commentaire} 
              onChange={handleChange} 
            />
          </div>

          <div className="form-group upload-wrapper">
            <input 
              type="file" 
              name="photo" 
              id="fileUpload" 
              accept="image/*" 
              onChange={handleChange} 
              hidden 
            />
            <label htmlFor="fileUpload" className="upload-label">
              <img src={preview || '/Photos/icons/user-white.png'} alt="Ajouter une image" />
            </label>
          </div>

          <button type="submit">Publier</button>
        </form>
      </div>
    </>
  );
};

export default Publier;