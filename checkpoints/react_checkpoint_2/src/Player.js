import React from 'react';
import { Card, Badge } from 'react-bootstrap';

/**
 * Player Component
 * Renders a React-Bootstrap card for an individual player.
 * Uses destructured props, inline styling, and default props.
 */
const Player = ({ name, team, nationality, jerseyNumber, age, imageUrl }) => {
  // Inline styles for the component
  const cardStyle = {
    width: '18rem',
    margin: '15px',
    borderRadius: '15px',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)',
    border: 'none',
    overflow: 'hidden',
    backgroundColor: '#ffffff',
    transition: 'transform 0.3s ease'
  };

  const imageStyle = {
    height: '240px',
    objectFit: 'cover'
  };

  const headerBadgeStyle = {
    position: 'absolute',
    top: '12px',
    right: '12px',
    fontSize: '1rem',
    padding: '6px 12px',
    borderRadius: '20px',
    backgroundColor: '#0d6efd',
    color: '#fff'
  };

  return (
    <Card style={cardStyle} className="h-100 position-relative">
      <Badge style={headerBadgeStyle}>#{jerseyNumber}</Badge>
      <Card.Img variant="top" src={imageUrl} alt={name} style={imageStyle} />
      <Card.Body style={{ padding: '20px' }}>
        <Card.Title style={{ fontSize: '1.4rem', fontWeight: 'bold', marginBottom: '10px' }}>
          {name}
        </Card.Title>
        <Card.Subtitle style={{ color: '#6c757d', marginBottom: '15px', fontWeight: '500' }}>
          {team}
        </Card.Subtitle>
        <Card.Text style={{ fontSize: '0.95rem', color: '#495057' }}>
          <strong>Nationality:</strong> {nationality}<br />
          <strong>Age:</strong> {age} years old
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

// Default props definition
Player.defaultProps = {
  name: "Unknown Player",
  team: "Free Agent",
  nationality: "Global",
  jerseyNumber: 0,
  age: 20,
  imageUrl: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=500&auto=format&fit=crop&q=80"
};

export default Player;
