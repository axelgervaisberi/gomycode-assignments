import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Card, Button, Badge, Row, Col } from 'react-bootstrap';
import { FaArrowLeft, FaStar } from 'react-icons/fa';

/**
 * MovieDetails Component
 * Displays full description, rating, embedded trailer video, and a Back to Home button.
 */
const MovieDetails = ({ movies }) => {
  const { id } = useParams();

  // Find the selected movie by id
  const movie = movies.find((m) => String(m.id) === String(id));

  if (!movie) {
    return (
      <Container className="my-5 text-center text-white">
        <h2 className="display-6 mb-4">Movie Not Found</h2>
        <p className="lead mb-4">The movie you are looking for does not exist.</p>
        <Link to="/">
          <Button variant="primary" size="lg" className="rounded-pill px-4">
            <FaArrowLeft className="me-2" /> Back to Home
          </Button>
        </Link>
      </Container>
    );
  }

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
    <Container className="py-5">
      {/* Navigation Back Button */}
      <div className="mb-4">
        <Link to="/">
          <Button variant="outline-light" size="lg" className="rounded-pill px-4 shadow-sm d-inline-flex align-items-center gap-2">
            <FaArrowLeft /> Back to Home
          </Button>
        </Link>
      </div>

      <Card className="shadow-lg border-0 rounded-4 overflow-hidden bg-white text-dark">
        <Row className="g-0">
          <Col md={5} lg={4}>
            <img
              src={movie.posterURL}
              alt={movie.title}
              className="w-100 h-100"
              style={{ minHeight: '400px', objectFit: 'cover' }}
            />
          </Col>
          
          <Col md={7} lg={8} className="p-4 p-lg-5 d-flex flex-column justify-content-between">
            <div>
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h1 className="display-5 fw-bold mb-0">{movie.title}</h1>
                <Badge bg="dark" className="fs-6 px-3 py-2 rounded-pill">
                  ⭐ {movie.rating}/5
                </Badge>
              </div>

              <div className="mb-4 d-flex align-items-center">
                {renderStars(movie.rating)}
              </div>

              <h4 className="fw-bold mb-2">Description</h4>
              <p className="text-secondary leading-relaxed mb-4 fs-5" style={{ lineHeight: '1.7' }}>
                {movie.description}
              </p>
            </div>
          </Col>
        </Row>

        {/* Embedded Trailer Section */}
        <Card.Footer className="bg-dark p-4 p-lg-5">
          <h3 className="text-white fw-bold mb-4 text-center">Official Trailer</h3>
          <div className="ratio ratio-16x9 rounded-4 overflow-hidden shadow">
            <iframe
              src={movie.trailerURL}
              title={`${movie.title} Trailer`}
              allowFullScreen
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </div>
        </Card.Footer>
      </Card>
    </Container>
  );
};

export default MovieDetails;
