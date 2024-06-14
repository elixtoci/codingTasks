import React, { useState } from 'react';
import { Container, Button, Form } from 'react-bootstrap';
import './HomePage.css';

const HomePage = () => {
    const [username, setUsername] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
  
    const handleLogin = () => {
      if (username.trim() !== '') {
        setLoggedIn(true);
      }
    };
  
    const handleLogout = () => {
      setUsername('');
      setLoggedIn(false);
    };
  
    return (
      <div className="homepage-container">
        <Container className="homepage-content">
          {loggedIn ? (
            <div className="welcome-container">
              <h1>Welcome {username}!</h1>
              <Button variant="primary" onClick={handleLogout}>Logout</Button>
            </div>
          ) : (
            <Form className="login-form">
              <Form.Group>
                <Form.Control
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter your name"
                />
              </Form.Group>
              <br></br>
              <Button variant="primary" onClick={handleLogin} disabled={!username.trim()}>
                Login
              </Button>
            </Form>
          )}
        </Container>
      </div>
    );
  };
  
  export default HomePage;