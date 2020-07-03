import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
      <Navbar.Brand>
        {' '}
        <Link to={'/'}>Phones</Link>{' '}
      </Navbar.Brand>
    </Navbar>
  );
};

export default Header;
