import React from 'react';
import { Container } from 'react-bootstrap';
// Import PlayersList component
import PlayersList from './PlayersList';
import './App.css';

/**
 * Root App Component
 * Renders the FIFA Ultimate Team Player Cards header and PlayersList component.
 */
function App() {
  return (
    <div className="App min-vh-100 py-5" style={{ background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)' }}>
      <Container className="text-center text-white mb-4">
        <h1 className="display-4 fw-bold mb-2">FIFA Ultimate Team</h1>
        <p className="lead text-light opacity-75">Explore top world-class football players and their attributes</p>
      </Container>
      
      {/* Render PlayersList */}
      <PlayersList />
    </div>
  );
}

export default App;
