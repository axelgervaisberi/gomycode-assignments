import React from 'react';
import { Row, Col, Alert } from 'react-bootstrap';
import MovieCard from './MovieCard';

/**
 * MovieList Component
 * Maps over filtered movies array and renders MovieCard components in a grid.
 */
const MovieList = ({ movies }) => {
  if (!movies || movies.length === 0) {
    return (
      <Alert variant="warning" className="text-center my-5 p-4 rounded-4 shadow-sm">
        <Alert.Heading>No Movies Found!</Alert.Heading>
        <p className="mb-0">Try adjusting your search title or rating filter to see more movies.</p>
      </Alert>
    );
  }

  return (
    <Row className="g-4">
      {movies.map((movie, index) => (
        <Col key={index} xs={12} sm={6} md={4} lg={3}>
          <MovieCard movie={movie} />
        </Col>
      ))}
    </Row>
  );
};

export default MovieList;
