import React, { useState, useEffect } from 'react';

const fictionData = [
  // ... (vos objets title, img, description)
  {
    title: 'Inception',
    img: '../Photos/images-57.jpg',
    description: "Un voleur qui infiltre les rêves pour voler des secrets d'entreprise.",
  },
  {
    title: 'Interstellar',
    img: '../Photos/images-57.jpg',
    description: "Une équipe d'explorateurs voyage à travers un trou de ver pour sauver l'humanité.",
  },
  {
    title: 'Matrix',
    img: '../Photos/images-57.jpg',
    description: "Un pirate informatique découvre la vérité sur la réalité simulée qu'est la Matrice.",
  },
  {
    title: 'The Island',
    img: '../Photos/images-57.jpg',
    description: "Des clones tentent de fuir une vie de mensonge et de contrôle.",
  },
  {
    title: 'Blade Runner',
    img: '../Photos/images-57.jpg',
    description: "Un policier doit éliminer des androïdes rebelles dans un monde futuriste.",
  },
  {
    title: 'Blade Runner',
    img: '../Photos/images-57.jpg',
    description: "Un policier doit éliminer des androïdes rebelles dans un monde futuriste.",
  },
  {
    title: 'Blade Runner',
    img: '../Photos/images-57.jpg',
    description: "Un policier doit éliminer des androïdes rebelles dans un monde futuriste.",
  },
  {
    title: 'Blade Runner',
    img: '../Photos/images-57.jpg',
    description: "Un policier doit éliminer des androïdes rebelles dans un monde futuriste.",
  },
  {
    title: 'Blade Runner',
    img: '../Photos/images-57.jpg',
    description: "Un policier doit éliminer des androïdes rebelles dans un monde futuriste.",
  },
];

const Fiction = () => {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState(fictionData);

  useEffect(() => {
    const lower = search.toLowerCase();
    const filtered = fictionData.filter(item =>
      item.title.toLowerCase().includes(lower)
    );
    const rest = fictionData.filter(item =>
      !item.title.toLowerCase().includes(lower)
    );
    setResults([...filtered, ...rest]);
  }, [search]);

  return (
    <div style={{ padding: '10px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center' }}>Films de Science-Fiction</h1>

      <div style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
        <input
          type="text"
          value={search}
          placeholder="Rechercher un film"
          onChange={(e) => setSearch(e.target.value)}
          style={{ padding: '10px', flex: 1 }}
        />
        <button onClick={() => setSearch('')} style={{ padding: '10px 20px', backgroundColor: '#333', color: 'white' }}>
          ✕
        </button>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {results.map((item, index) => (
          <div key={index} style={{
            width: '285px',
            border: '1px solid #ccc',
            padding: '10px',
            backgroundColor: '#f9f9f9'
          }}>
            <img src={item.img} alt={item.title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fiction;