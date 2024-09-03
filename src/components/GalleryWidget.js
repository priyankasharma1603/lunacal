import React, { useState } from 'react';
import './GalleryWidget.css';

const GalleryWidget = () => {
  // Assuming the image is located in the 'public/assets' folder
  const [images, setImages] = useState([
    { id: 1, url: '/assets/sample-image.jpg' },
    { id: 2, url: '/assets/sample-image.jpg' },
    { id: 3, url: '/assets/sample-image.jpg' },
  ]);
  const [hoveredImage, setHoveredImage] = useState(null);

  const addImage = () => {
    // Logic to add a new image (replace with your own implementation)
    setImages([...images, { id: images.length + 1, url: '/assets/sample-image.jpg' }]);
  };

  const handleMouseEnter = (id) => {
    setHoveredImage(id);
  };

  const handleMouseLeave = () => {
    setHoveredImage(null);
  };

  return (
    <div className="widget gallery-widget">
      <div className="gallery-header">
        <button className="gallery-title">Gallery</button>
        <button className="add-image-btn" onClick={addImage}>+ ADD IMAGE</button>
        <div className="controls">
          {/* Arrow buttons */}
          <button className="arrow-btn left-arrow">◀</button>
          <button className="arrow-btn right-arrow">▶</button>
        </div>
      </div>
      <div className="gallery-images">
        {images.map((img) => (
          <div
            key={img.id}
            className="image-item"
            onMouseEnter={() => handleMouseEnter(img.id)}
            onMouseLeave={handleMouseLeave}
          >
            <img src={img.url} alt={`Gallery item ${img.id}`} />
            {hoveredImage === img.id && (
              <div className="image-hover-overlay">
                {/* Overlay content */}
                <p>View Image</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
    
  );
  
};

export default GalleryWidget;
