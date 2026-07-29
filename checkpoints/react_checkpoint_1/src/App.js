import React from 'react';
import { Card, Container, Button } from 'react-bootstrap';
// Import child components
import Name from './components/Name';
import Price from './components/Price';
import Description from './components/Description';
import Image from './components/Image';
import './App.css';

// Variable to define user's first name (change to "" to test "Hello, there!")
const firstName = "Axel";

// User avatar image URL displayed when first name is provided
const avatarUrl = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80";

function App() {
  return (
    <div className="App py-5 bg-light min-vh-100 d-flex flex-column align-items-center justify-content-center">
      <Container className="d-flex flex-column align-items-center">
        
        {/* Product Card incorporating Image, Name, Price, and Description components */}
        <Card className="product-card shadow-lg border-0 rounded-4 overflow-hidden mb-4" style={{ maxWidth: '420px', width: '100%' }}>
          <Image />
          <Card.Body className="p-4 text-center">
            <Name />
            <Price />
            <Description />
            <Button variant="primary" size="lg" className="w-100 mt-2 font-weight-bold rounded-pill shadow-sm">
              Add to Cart
            </Button>
          </Card.Body>
        </Card>

        {/* Greeting message and profile avatar rendering */}
        <div className="greeting-section text-center p-3 bg-white rounded-4 shadow-sm" style={{ maxWidth: '420px', width: '100%' }}>
          <h3 className="mb-2 text-dark font-weight-bold">
            {firstName ? `Hello, ${firstName}!` : "Hello, there!"}
          </h3>
          {firstName && (
            <div className="mt-3">
              <img
                src={avatarUrl}
                alt={`${firstName}'s avatar`}
                className="rounded-circle border border-3 border-primary shadow-sm"
                style={{ width: '80px', height: '80px', objectFit: 'cover' }}
              />
            </div>
          )}
        </div>

      </Container>
    </div>
  );
}

export default App;
