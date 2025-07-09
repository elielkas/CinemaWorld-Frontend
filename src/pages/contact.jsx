import React, { useEffect, useState } from "react";

const Contact = () => {
  // Pour la modification de la photo
  const [newPhoto, setNewPhoto] = useState(null);

  const [userInfo, setUserInfo] = useState(null);
  const [editingField, setEditingField] = useState(null);
  const [newValue, setNewValue] = useState("");
  const [loading, setLoading] = useState(true);
  const role = localStorage.getItem("role");
  const email = localStorage.getItem("email");

  useEffect(() => {
    const fetchUserInfo = async () => {
      if (!role || !email) {
        alert("Utilisateur non authentifié.");
        setLoading(false);
        return;
      }

      try {
        const response = await fetch("http://localhost/MonProjetDeSiteWeb/CinemaWord/BackEnd/Afficher.php", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, role }),
        });

        const data = await response.json();
        if (data.success) {
          setUserInfo(data.user);
        } else {
          alert(data.message || "Erreur lors de la récupération des données.");
        }
      } catch (err) {
        console.error("Erreur de requête:", err);
        alert("Erreur de connexion au serveur.");
      } finally {
        setLoading(false);
      }
    };

    fetchUserInfo();
  }, [role, email]);

  const handleModify = (field) => {
    setEditingField(field);
    setNewValue(userInfo[field]);
  };

  const handleSave = async () => {
    try {
      const response = await fetch("http://localhost/MonProjetDeSiteWeb/CinemaWord/BackEnd/Modifier.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          role,
          field: editingField,
          value: newValue,
        }),
      });

      const data = await response.json();
      if (data.success) {
        setUserInfo({ ...userInfo, [editingField]: newValue });
        setEditingField(null);
      } else {
        alert(data.message || "Erreur de mise à jour.");
      }
    } catch (err) {
      console.error("Erreur de modification :", err);
      alert("Échec de la mise à jour.");
    }
  };

  //Pour la modification de la photo
  const handlePhotoUpload = async (file) => {
    if (!file) return;
  
    const formData = new FormData();
    formData.append("photo", file);
    formData.append("email", email);
    formData.append("role", role);
  
    try {
      const response = await fetch("http://localhost/MonProjetDeSiteWeb/CinemaWord/BackEnd/ModifierPhoto.php", {
        method: "POST",
        body: formData,
      });
  
      const data = await response.json();
      if (data.success && data.photoPath) {
        setUserInfo({ ...userInfo, photo: data.photoPath });
        alert("Photo mise à jour !");
      } else {
        alert(data.message || "Erreur lors du téléchargement.");
      }
    } catch (err) {
      console.error("Erreur upload photo:", err);
      alert("Échec du téléchargement.");
    }
  };
  

  if (loading) return <p style={{ textAlign: "center" }}>Chargement...</p>;
  if (!userInfo) return <p style={{ textAlign: "center" }}>Aucune information disponible.</p>;


  
  const renderEditableField = (label, field, type = "text") => (
    <p>
      <strong>{label} :</strong>{" "}
      {editingField === field ? (
        <>
          <input
            type={type}
            value={newValue}
            onChange={(e) => setNewValue(e.target.value)}
          />
          <button onClick={handleSave}>✔</button>
          <button onClick={() => setEditingField(null)}>✖</button>
        </>
      ) : (
        <>
          {type === "password" ? "********" : userInfo[field]}{" "}
          <button onClick={() => handleModify(field)}>Modifier</button>
        </>
      )}
    </p>
  );
  

  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h1>Profil</h1>
        {userInfo.photo && (
          <div style={{ marginBottom: "1rem" }}>
            <img
              src={`http://localhost/MonProjetDeSiteWeb/CinemaWord/${userInfo.photo}`}
              alt="Photo de profil"
              style={{width: "150px", height: "150px", borderRadius: "50%", objectFit: "cover",}}
            />
            <form onSubmit={(e) => e.preventDefault()} style={{ marginTop: "0.5rem" }}>
              <div>
                <input type="file" accept="image/*" style={{ display: "none" }} id="photoUpload"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) {
                      setNewPhoto(file);
                      handlePhotoUpload(file); // uploader automatiquement
                    }
                  }}
                />
                <button type="button" onClick={() => document.getElementById('photoUpload').click()}>
                  Modifier la photo
                </button>
              </div>

            </form>
          </div>
        )}
        {renderEditableField("Nom", "nom")}
        {renderEditableField("Email", "email", "email")}
        {renderEditableField("Mot de passe", "motdepasse", "password")}
        {/*{renderEditableField("Photo (URL)", "photo")}*/}

    </div>
  );
};

export default Contact;
