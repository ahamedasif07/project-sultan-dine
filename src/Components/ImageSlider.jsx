import { useState } from "react";
import "./ImageSlider.css"; // Import your CSS styles

const ImageSlider = () => {
  const [mainImage, setMainImage] = useState("/path/to/defaultImage.jpg");

  const images = [
    { id: 1, src: "/path/to/image1.jpg" },
    { id: 2, src: "/path/to/image2.jpg" },
    { id: 3, src: "/path/to/image3.jpg" },
  ];

  return (
    <div className="slider-container">
      <div className="big-image-container">
        <img src={mainImage} alt="Main display" className="big-image" />
      </div>
      <div className="thumbnail-container">
        {images.map((image) => (
          <img
            key={image.id}
            src={image.src}
            alt={`Thumbnail ${image.id}`}
            className="thumbnail"
            onMouseEnter={() => setMainImage(image.src)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
