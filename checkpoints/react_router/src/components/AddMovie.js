import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { FaPlus } from 'react-icons/fa';

const AddMovie = ({ onAddMovie }) => {
  const [show, setShow] = useState(false);
  const [newMovie, setNewMovie] = useState({
    title: '',
    description: '',
    posterURL: '',
    trailerURL: '',
    rating: 5
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewMovie({
      ...newMovie,
      [name]: name === 'rating' ? Number(value) : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newMovie.title || !newMovie.description || !newMovie.posterURL || !newMovie.trailerURL) {
      alert('Please fill in all fields.');
      return;
    }

    onAddMovie(newMovie);
    setNewMovie({ title: '', description: '', posterURL: '', trailerURL: '', rating: 5 });
    handleClose();
  };

  return (
    <>
      <Button
        variant="primary"
        size="lg"
        onClick={handleShow}
        className="shadow-sm rounded-pill px-4 fw-bold d-flex align-items-center gap-2"
      >
        <FaPlus /> Add New Movie
      </Button>

      <Modal show={show} onHide={handleClose} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title className="fw-bold">Add a New Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="movieTitle">
              <Form.Label className="fw-semibold">Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                placeholder="Enter movie title"
                value={newMovie.title}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="movieDescription">
              <Form.Label className="fw-semibold">Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="description"
                placeholder="Enter movie summary..."
                value={newMovie.description}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="moviePosterURL">
              <Form.Label className="fw-semibold">Poster Image URL</Form.Label>
              <Form.Control
                type="url"
                name="posterURL"
                placeholder="https://example.com/poster.jpg"
                value={newMovie.posterURL}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="movieTrailerURL">
              <Form.Label className="fw-semibold">Trailer Embed URL (YouTube embed link)</Form.Label>
              <Form.Control
                type="url"
                name="trailerURL"
                placeholder="https://www.youtube.com/embed/..."
                value={newMovie.trailerURL}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-4" controlId="movieRating">
              <Form.Label className="fw-semibold">Rating (1 to 5 Stars)</Form.Label>
              <Form.Select
                name="rating"
                value={newMovie.rating}
                onChange={handleChange}
              >
                <option value={1}>1 Star ⭐</option>
                <option value={2}>2 Stars ⭐⭐</option>
                <option value={3}>3 Stars ⭐⭐⭐</option>
                <option value={4}>4 Stars ⭐⭐⭐⭐</option>
                <option value={5}>5 Stars ⭐⭐⭐⭐⭐</option>
              </Form.Select>
            </Form.Group>

            <div className="d-flex justify-content-end gap-2">
              <Button variant="secondary" onClick={handleClose}>
                Cancel
              </Button>
              <Button variant="primary" type="submit">
                Add Movie
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AddMovie;
