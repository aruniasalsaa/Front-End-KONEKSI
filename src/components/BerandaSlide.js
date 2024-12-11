import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import SlideImage from './SlideImages';
import { Container } from 'react-bootstrap';

function BerandaEvents({ images }) {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Container className='beranda-container'>
      <Carousel activeIndex={index} onSelect={handleSelect} className='slide-style'>
        {images.map((image) => (
          <Carousel.Item 
            key={image.id}
            onClick={() => navigate(`/detail-acara/${image.id}`)}
            style={{ cursor: 'pointer' }}
          >
            <SlideImage image={image.src} text={image.text} />
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
}

export default BerandaEvents;
