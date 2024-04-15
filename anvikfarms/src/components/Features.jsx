import React from 'react';
import styled from 'styled-components';

// Styled Components
const Section = styled.section`
  @media (max-width: 768px) {
    padding: 2rem 0.5rem; /* Smaller padding on mobile devices */
  }
  text-align: center;
`;

const Heading = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
  color: #333;
`;

const Description = styled.p`
  margin-bottom: 2rem;
  font-size: 1.2rem;
  line-height: 1.6;
  color: #555;
`;

const ImageGallery = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); /* Makes grid responsive */
  gap: 1rem;
  justify-content: center;
  padding: 1rem 0;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr); /* 2 images per row on mobile */
  }

  & img {
    width: 100%; /* Make width responsive */
    height: auto;
    border-radius: 8px;
  }
`;


// Component
const OurFarmComponent = () => {
  const images = [
    '/photo1.jpeg',
    '/photo2.jpeg',
    '/photo3.jpeg',
    '/photo4.jpeg',
    '/photo5.jpeg',
    '/photo6.jpeg',
  ];

  return (
    <Section>
      <Heading>OUR FARM</Heading>
      <Description>
        We are one of North Vancouver Island’s newest additions of places to stay and enjoy the beauty of tranquil nature. Nestled in a quiet corner of the desirable Sayward Valley, our property hosts over 60 acres of wandering trails, Mount H’kusam views, and private access to sandy beaches on the Salmon River. Delight your taste buds with seasonal garden produce and farm fresh eggs while savouring the time to unwind in a peaceful paradise. As our guest, you will find the perfect blend of relaxation and outdoor recreation.
      </Description>
      <ImageGallery>
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Our Farm View ${index + 1}`} />
        ))}
      </ImageGallery>
    </Section>
  );
};

export default OurFarmComponent;
