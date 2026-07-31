import React from 'react';
import { Card, Badge } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';

/**
 * MovieCard Component
 * Displays movie poster, title, description, and star rating.
 */
const MovieCard = ({ movie }) => {
  const { title, description, posterURL, rating } = movie;

  // Helper to render star rating icons
  const renderStars = (ratingValue) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <FaStar
          key={i}
          color={i <= ratingValue ? '#ffc107' : '#e4e5e9'}
          className="me-1"
        />
      );
    }
    return stars;
  };

  return (
    <Card className="h-100 shadow border-0 rounded-4 overflow-hidden text-dark movie-card">
      <div className="position-relative">
        <Card.Img
          variant="top"
          src={posterURL}
          alt={title}
          style={{ height: '350px', objectFit: 'cover' }}
        />
        <Badge
          bg="dark"
          className="position-absolute top-0 end-0 m-3 px-3 py-2 fs-6 rounded-pill shadow-sm"
        >
          ⭐ {rating}/5
        </Badge>
      </div>

      <Card.Body className="d-flex flex-column p-4">
        <Card.Title className="fw-bold fs-4 mb-2">{title}</Card.Title>
        
        <div className="mb-3 d-flex align-items-center">
          {renderStars(rating)}
        </div>

        <Card.Text className="text-muted flex-grow-1" style={{ fontSize: '0.95rem' }}>
          {description}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default MovieCard;
