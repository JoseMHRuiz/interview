import React from 'react';
import { Container } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
  return (
    <>
      <div className='empty-container'></div>
      <div className='footer'>
        <Container>
          <p>Made for GuideSmiths by J. M. Henche</p>
        </Container>
      </div>
    </>
  );
};

export default Footer;
