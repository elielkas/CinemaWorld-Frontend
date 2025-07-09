import React, { useState } from 'react';

const Action = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [comments, setComments] = useState({});
  const [inputValues, setInputValues] = useState({});

  const actionData = [
    {
      title: 'Mad Max: Fury Road',
      description: 'Dans un désert post-apocalyptique, Max fait équipe avec Furiosa pour fuir un tyran.',
      image: '../Photos/download-9.jpg',
    },
    {
      title: 'John Wick',
      description: 'Un ancien tueur à gages reprend du service après que son chien ait été tué.',
      image: '../Photos/images-57.jpg',
    },
    {
      title: 'Die Hard',
      description: 'Un policier de New York affronte des terroristes dans un gratte-ciel.',
      image: '../Photos/download-4.jpg',
    },
    {
      title: 'Squid Games',
      description: "Dans un camps caché, des adultes jouent aux jeux mortels pour l'argent",
      image: '../Photos/images-57.jpg',
    },
    {
      title: 'MacGyver',
      description: "Les exploits dans les missions sécrets d'un jeune prodige de la science",
      image: '../Photos/images-47.jpg',
    },
    {
      title: 'La Casa De Papel',
      description: "Brancage dans la fabrique de la monnaie de l'Espange orcherstré par un génie",
      image: '../Photos/download-40.jpg',
    },
    {
      title: 'The Hacker',
      description: "Un génie en informatique qui contraie à la ciber-criminalité pour sauver sa famille",
      image: '../Photos/images-53.jpg',
    },
    {
      title: 'Into The BadLand',
      description: "Un armarcien qui tue au compte de son baron sans poser des questions",
      image: '../Photos/download-97.jpg',
    },
    {
      title: 'The Dark Knight',
      description: 'Batman affronte le Joker, un criminel anarchiste, pour sauver Gotham.',
      image: '../Photos/download-2.jpg',
    },
  ];

  const handleCommentChange = (title, value) => {
    setInputValues({ ...inputValues, [title]: value });
  };

  const handleCommentSubmit = (title) => {
    if (!inputValues[title]) return;
    const newComment = inputValues[title];
    const updatedComments = {
      ...comments,
      [title]: [...(comments[title] || []), newComment],
    };
    setComments(updatedComments);
    setInputValues({ ...inputValues, [title]: '' });
  };

  const filteredData = actionData.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ padding: '20px' }}>
      <h2>Films d'action</h2>
      <input
        type="text"
        placeholder="Rechercher..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          width: '100%',
          padding: '8px',
          marginBottom: '20px',
          border: '1px solid #ccc',
          borderRadius: '4px'
        }}
      />

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {filteredData.map((item, index) => (
          <div
            key={index}
            style={{
              border: '1px solid #ccc',
              padding: '10px',
              width: '278px',
              borderRadius: '8px',
              backgroundColor: '#f9f9f9'
            }}
          >
            <img
              src={item.image}
              alt={item.title}
              style={{ width: '100%', borderRadius: '4px' }}
            />
            <h3>{item.title}</h3>
            <p>{item.description}</p>

            {/* Commentaires */}
            <div style={{ marginTop: '10px' }}>
              <div style={{ display: 'flex', gap: '5px' }}>
                <input
                  type="text"
                  value={inputValues[item.title] || ''}
                  onChange={(e) => handleCommentChange(item.title, e.target.value)}
                  placeholder="Ajouter un commentaire"
                  style={{ flex: 1, padding: '5px' }}
                />
                <button
                  onClick={() => handleCommentSubmit(item.title)}
                  style={{
                    padding: '5px 10px',
                    backgroundColor: '#007BFF',
                    color: 'white',
                    border: 'none',
                    cursor: 'pointer',
                    borderRadius: '4px'
                  }}
                >
                  Envoyer
                </button>
              </div>

              <div style={{ marginTop: '10px' }}>
                {comments[item.title]?.map((comment, idx) => (
                  <p
                    key={idx}
                    style={{
                      backgroundColor: '#eef',
                      padding: '5px',
                      borderRadius: '5px',
                      marginBottom: '5px'
                    }}
                  >
                    {comment}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Action;

