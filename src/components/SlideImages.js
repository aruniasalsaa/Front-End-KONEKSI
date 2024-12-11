import React from 'react';
import { Image } from 'react-bootstrap';

function SlideImage({ image }) {
  return (
    <div className="carousel-image-container">
      <Image src={image} />
    </div>
  );
}
export default SlideImage;
