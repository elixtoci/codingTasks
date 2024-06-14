import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import './NavigationMenu.css'; // Import custom CSS for NavigationMenu

const NavigationMenu = () => {
  return (
    <Navbar bg="light" expand="lg" className="navbar-spacing">
      {/* Custom styling for the brand */}
      <Navbar.Brand as={Link} to="/" className="brand">
        <div>
          <span>CLOTHING STORE</span>
        </div>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/products">Products</Nav.Link>
          <Nav.Link as={Link} to="/about">About</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationMenu;
