import React, { useEffect, useState } from 'react';

const DernierSortie = () => {
  const [films, setFilms] = useState([]);
  const [liked, setLiked] = useState({});

  // Chargement des films au montage
  useEffect(() => {
    fetch('http://localhost/MonProjetDeSiteWeb/CinemaWord/BackEnd/getDerniersFilms.php')
      .then((res) => res.json())
      .then((data) => {
        console.log('Films récupérés :', data);
        setFilms(data);

        // Initialiser l’état des likes locaux
        const initialLiked = {};
        data.forEach((film) => {
          initialLiked[film.id] = false;
        });
        setLiked(initialLiked);
      })
      .catch((err) => console.error('Erreur de chargement des films :', err));
  }, []);

  // Fonction pour liker ou deliker
  const toggleLike = async (id) => {
    const userLiked = !liked[id];
    const action = userLiked ? 'like' : 'unlike';

    try {
      const response = await fetch('http://localhost/MonProjetDeSiteWeb/CinemaWord/BackEnd/updateLike.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, action }),
      });

      const data = await response.json();
      console.log("Réponse de l'API :", data);

      if (data.success) {
        setFilms((prev) =>
          prev.map((film) =>
            film.id === id
              ? {
                  ...film,
                  likes: userLiked
                    ? Number(film.likes) + 1
                    : Number(film.likes) - 1,
                }
              : film
          )
        );
        setLiked((prev) => ({ ...prev, [id]: userLiked }));
      } else {
        console.error("Erreur lors de la mise à jour du like");
      }
    } catch (error) {
      console.error("Erreur lors de la requête fetch :", error);
    }
  };


  return (
    <section style={styles.section}>
      <h1 style={styles.h1}>Les dernières sorties de la semaine</h1>
      <div style={styles.gridContainer}>
        {films.map((film) => (
          <div key={film.id} style={styles.card}>
            <h3 style={styles.h3}>{film.nom}</h3>
            <img
              src={`http://localhost/MonProjetDeSiteWeb/CinemaWord/${film.photo}`}
              alt={film.nom}
              style={styles.image}
            />
            <div style={styles.buttonContainer}>
              <button
                style={{
                  ...styles.button,
                  backgroundColor: liked[film.id] ? '#1db954' : '#bb2337',
                }}
                onClick={() => toggleLike(film.id)}
              >
                {liked[film.id] ? 'Je retire mon like' : 'J’aime'}
              </button>
              <span style={styles.likeText}>
                {Number(film.likes)} like{Number(film.likes) !== 1 ? 's' : ''}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// 🎨 Styles CSS en JS
const styles = {
  section: {
    width: '100%',
    minHeight: '300px',
    boxSizing: 'border-box',
    padding: '0 4.2%',
    marginBottom: '45px',
  },
  h1: {
    fontSize: '40px',
    paddingTop: '50px',
    textAlign: 'center',
    textTransform: 'uppercase',
    fontFamily: "'Anton', sans-serif",
  },
  h3: {
    textTransform: 'uppercase',
    fontSize: '20px',
    marginBottom: '10px',
  },
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '20px',
    marginTop: '50px',
  },
  card: {
    backgroundColor: '#fbf5ee',
    boxShadow: '0 0 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '18px',
    padding: '20px',
    textAlign: 'center',
    transition: 'transform 0.25s',
  },
  image: {
    width: '240px',
    height: '220px',
    borderRadius: '10px',
    objectFit: 'cover',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '15px',
  },
  button: {
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    border: 'none',
    padding: '8px 15px',
    color: '#fff',
    textTransform: 'uppercase',
    borderRadius: '50px',
    transition: 'transform 0.2s ease-out',
  },
  likeText: {
    marginLeft: '15px',
    fontWeight: 'bold',
    color: '#333',
  },
};

export default DernierSortie;
