import React from 'react';
import { Row, Col, Form, InputGroup } from 'react-bootstrap';
import { FaSearch, FaStar } from 'react-icons/fa';

/**
 * Filter Component
 * Enables users to filter movies by title and rating.
 */
const Filter = ({ titleFilter, ratingFilter, onTitleChange, onRatingChange }) => {
  return (
    <div className="bg-white p-4 rounded-4 shadow-sm mb-5">
      <Row className="g-3 align-items-center">
        {/* Title Search Input */}
        <Col md={8}>
          <Form.Group controlId="titleFilter">
            <Form.Label className="fw-semibold text-dark">Search Movie Title</Form.Label>
            <InputGroup>
              <InputGroup.Text className="bg-light border-end-0">
                <FaSearch className="text-muted" />
              </InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Type movie title..."
                value={titleFilter}
                onChange={(e) => onTitleChange(e.target.value)}
                className="border-start-0 bg-light"
              />
            </InputGroup>
          </Form.Group>
        </Col>

        {/* Rating Select Filter */}
        <Col md={4}>
          <Form.Group controlId="ratingFilter">
            <Form.Label className="fw-semibold text-dark">Minimum Rating</Form.Label>
            <InputGroup>
              <InputGroup.Text className="bg-light border-end-0">
                <FaStar className="text-warning" />
              </InputGroup.Text>
              <Form.Select
                value={ratingFilter}
                onChange={(e) => onRatingChange(Number(e.target.value))}
                className="border-start-0 bg-light"
              >
                <option value={0}>All Ratings</option>
                <option value={1}>1+ Stars ⭐</option>
                <option value={2}>2+ Stars ⭐⭐</option>
                <option value={3}>3+ Stars ⭐⭐⭐</option>
                <option value={4}>4+ Stars ⭐⭐⭐⭐</option>
                <option value={5}>5 Stars ⭐⭐⭐⭐⭐</option>
              </Form.Select>
            </InputGroup>
          </Form.Group>
        </Col>
      </Row>
    </div>
  );
};

export default Filter;
