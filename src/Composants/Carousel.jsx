import React, { useState, useEffect } from "react";

const Carousel = () => {
  const images = [
    "/Photos/download-1.jpg",
    "/Photos/download-2.jpg",
    "/Photos/download-3.jpg",
    "/Photos/download-6.jpg",
    "/Photos/images-60.jpg",
    "/Photos/images-44.jpg",
    "/Photos/images-33.jpg",
    "/Photos/images-13.jpg",
    "/Photos/images-22.jpg",
    "/Photos/images-8.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Défilement automatique
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToIndex = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div style={styles.carouselContainer}>
      {/* SLIDER */}
      <div
        style={{
          ...styles.slider,
          transform: `translateX(-${currentIndex * 100}%)`
        }}
      >
        {images.map((src, index) => (
          <img key={index} src={src} alt={`Slide ${index}`} style={styles.image} />
        ))}
      </div>

      {/* FLÈCHES */}
      <button style={{ ...styles.arrow, left: "10px" }} onClick={goToPrev}>
        ❮
      </button>
      <button style={{ ...styles.arrow, right: "10px" }} onClick={goToNext}>
        ❯
      </button>

      {/* POINTS */}
      <div style={styles.dotsContainer}>
        {images.map((_, index) => (
          <span
            key={index}
            onClick={() => goToIndex(index)}
            style={{
              ...styles.dot,
              backgroundColor: currentIndex === index ? "#333" : "#bbb"
            }}
          />
        ))}
          </div>
    </div>
  );
};

// Styles inline
const styles = {
  carouselContainer: {
    width: "100%",
    margin: "auto",
    overflow: "hidden",
    position: "relative",
  },
  slider: {
    display: "flex",
    transition: "transform 0.5s ease-in-out",
    width: "100%",
  },
  image: {
    minWidth: "100%",
    height: "auto",
    objectFit: "cover",
    height : '400px'
  },
  arrow: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    border: "none",
    color: "white",
    fontSize: "2rem",
    padding: "0.3em 0.6em",
    cursor: "pointer",
    zIndex: 2,
    borderRadius: "50%",
  },
  dotsContainer: {
    position: "absolute",
    bottom: "15px",
    left: "50%",
    transform: "translateX(-50%)",
    display: "flex",
    gap: "8px",
  },
  dot: {
    width: "12px",
    height: "12px",
    borderRadius: "50%",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
};

export default Carousel;
