import React, { useEffect, useState } from "react";

const Comptes = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost/MonProjetDeSiteWeb/CinemaWord/BackEnd/AfficherToutUtilisateurs.php")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) setUsers(data.users);
        else alert(data.message || "Erreur lors du chargement des comptes.");
      })
      .catch((err) => {
        console.error(err);
        alert("Erreur serveur lors du chargement des comptes.");
      });
  }, []);

  const handleDelete = (email) => {
    const confirmDelete = window.confirm("Êtes-vous sûr de vouloir supprimer ce compte ?");
    if (!confirmDelete) return;

    fetch("http://localhost/MonProjetDeSiteWeb/CinemaWord/BackEnd/EffacerUtilisateur.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          alert("Compte supprimé !");
          setUsers(users.filter((user) => user.email !== email)); // Mise à jour de l'affichage
        } else {
          alert(data.message || "Erreur lors de la suppression.");
        }
      })
      .catch((err) => {
        console.error(err);
        alert("Erreur serveur lors de la suppression.");
      });
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Liste des comptes utilisateurs</h2>
      {users.length === 0 ? (
        <p>Aucun compte trouvé.</p>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.email} style={{ marginBottom: "10px"}}>
              <strong>{user.nom}</strong> – {user.email}
              <button
                onClick={() => handleDelete(user.email)}
                style={{
                  marginLeft: "10px", 
                  backgroundColor: "red", 
                  color: "white", 
                  border: "none",
                  padding: "5px 10px",
                  cursor: "pointer",
                  borderRadius: "5px",
                }}
              >
                Supprimer
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Comptes;
