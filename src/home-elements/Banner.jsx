import React from 'react';
import { Container } from 'react-bootstrap';
import { banner } from '../data/banner'; // import the banner array from another JS file

function MyComponent() {
  const isMobile = window.innerWidth <= 768; // Check if the screen width is less than or equal to 768px (adjust this as needed)
  const bannerImage = isMobile ? banner[0].banner_mob : banner[0].banner_desktop;

  return (
    
        <Container>
      <img src={bannerImage} alt="Banner" style={{ width: '100%' }} />
     </Container>
  );
}

export default MyComponent;
