import React, { useState } from 'react';

const novelasData = [
  {
    title: 'A pension, The revenge',
    img: '../Photos/images-66.jpg',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum ipsum animi saepe facere placeat provident nulla.',
  },
  {
    title: 'Amour à Manathan',
    img: '../Photos/download-82.jpg',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum ipsum animi saepe facere placeat provident nulla.',
  },
  {
    title: 'Terra des reyes',
    img: '../Photos/download-79.jpg',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum ipsum animi saepe facere placeat provident nulla.',
  },
  {
    title: 'Marina',
    img: '../Photos/download-85.jpg',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum ipsum animi saepe facere placeat provident nulla.',
  },
  {
    title: 'L\'arome de l\'amour',
    img: '../Photos/download-84.jpg',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum ipsum animi saepe facere placeat provident nulla.',
  },
  {
    title: 'Ne me quitte pas',
    img: '../Photos/images-70.jpg',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum ipsum animi saepe facere placeat provident nulla.',
  },
  {
    title: 'Marimar',
    img: '../Photos/images-68.jpg',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum ipsum animi saepe facere placeat provident nulla.',
  },
  {
    title: 'Vincenzo',
    img: '../Photos/images-54.jpg',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum ipsum animi saepe facere placeat provident nulla.',
  },
  {
    title: 'Avant toi',
    img: '../Photos/download-78.jpg',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum ipsum animi saepe facere placeat provident nulla.',
  },
  {
    title: 'Catalina',
    img: '../Photos/download-83.jpg',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum ipsum animi saepe facere placeat provident nulla.',
  },
];

const Novelas = () => {
  const [likes, setLikes] = useState(Array(novelasData.length).fill(0));

  const handleLike = (index) => {
    const newLikes = [...likes];
    newLikes[index] += 1;
    setLikes(newLikes);
  };

  const containerStyle = {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  };

  const titleStyle = {
    textAlign: 'center',
    textTransform: 'uppercase',
    marginBottom: '10px',
  };

  const wrapperStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: '20px',
  };

  const cardStyle = {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    maxWidth: '48%',
    minWidth: '300px',
    border: '1px solid #ccc',
    padding: '10px',
    boxSizing: 'border-box',
    background: '#f9f9f9',
  };

  const imgStyle = {
    width: '100%',
    height: '250px',
    objectFit: 'cover',
    marginBottom: '10px',
  };

  const descStyle = {
    fontSize: '14px',
    marginBottom: '5px',
  };

  const likeButtonStyle = {
    marginTop: '10px',
    padding: '8px 12px',
    backgroundColor: '#a52a2a',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    alignSelf: 'flex-start',
  };

  const likeCountStyle = {
    marginTop: '5px',
    fontWeight: 'bold',
    color: '#555',
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Suivez tout de suite...</h1>
      <h2 style={{ paddingLeft: '5%' }}>Nos programmes de la semaine</h2>
      <div style={wrapperStyle}>
        {novelasData.map((novela, index) => (
          <div key={index} style={cardStyle}>
            <img src={novela.img} alt={novela.title} style={imgStyle} />
            <h2>{novela.title}</h2>
            <p style={descStyle}>{novela.description}</p>
            <p style={descStyle}>{novela.description}</p>
            <p style={descStyle}>La suite reste en venir</p>
            <button style={likeButtonStyle} onClick={() => handleLike(index)}>J’aime</button>
            <div style={likeCountStyle}>{likes[index]} like(s)</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Novelas;
