import React from 'react';
import { Card, Badge, Button } from 'react-bootstrap';
import { FaStar, FaPlay } from 'react-icons/fa';
import { Link } from 'react-router-dom';

/**
 * MovieCard Component
 * Displays movie details and links to its description/trailer page.
 */
const MovieCard = ({ movie }) => {
  const { id, title, description, posterURL, rating } = movie;

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
          style={{ height: '340px', objectFit: 'cover' }}
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
          {description.length > 110 ? `${description.substring(0, 110)}...` : description}
        </Card.Text>

        {/* Navigation link to movie details page */}
        <Link to={`/movie/${id}`} className="text-decoration-none mt-auto">
          <Button variant="outline-primary" className="w-100 rounded-pill fw-bold d-flex align-items-center justify-content-center gap-2">
            <FaPlay size={12} /> View Trailer & Details
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default MovieCard;
