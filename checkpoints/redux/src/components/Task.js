import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Card, Button, Badge, Modal, Form } from 'react-bootstrap';
import { FaCheckCircle, FaRegCircle, FaEdit } from 'react-icons/fa';
import { toggleTaskStatus, editTask } from '../redux/todoSlice';

/**
 * Task Component
 * Displays individual task with attributes: id, description, isDone.
 * Supports toggling isDone status and editing description.
 */
const Task = ({ task }) => {
  const { id, description, isDone } = task;
  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);
  const [newDescription, setNewDescription] = useState(description);

  const handleToggle = () => {
    dispatch(toggleTaskStatus(id));
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    if (!newDescription.trim()) return;

    dispatch(editTask({ id, description: newDescription.trim() }));
    setShowModal(false);
  };

  return (
    <>
      <Card
        className={`mb-3 border-0 shadow-sm rounded-4 task-item ${
          isDone ? 'bg-light text-muted border-start border-success border-5' : 'bg-white border-start border-primary border-5'
        }`}
      >
        <Card.Body className="p-4 d-flex justify-content-between align-items-center gap-3">
          <div className="d-flex align-items-center gap-3 flex-grow-1">
            <Button
              variant="link"
              className="p-0 text-decoration-none border-0 fs-3"
              onClick={handleToggle}
              title={isDone ? "Mark as Not Done" : "Mark as Done"}
            >
              {isDone ? (
                <FaCheckCircle className="text-success" />
              ) : (
                <FaRegCircle className="text-secondary" />
              )}
            </Button>

            <div>
              <h5 className={`mb-1 fw-bold ${isDone ? 'text-decoration-line-through text-muted' : 'text-dark'}`}>
                {description}
              </h5>
              <Badge bg={isDone ? "success" : "warning"} text={isDone ? "white" : "dark"}>
                {isDone ? "Done" : "Not Done"}
              </Badge>
            </div>
          </div>

          <Button
            variant="outline-primary"
            size="sm"
            className="rounded-circle p-2"
            onClick={() => {
              setNewDescription(description);
              setShowModal(true);
            }}
            title="Edit Task"
          >
            <FaEdit size={16} />
          </Button>
        </Card.Body>
      </Card>

      {/* Edit Task Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title className="fw-bold">Edit Task</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleEditSubmit}>
          <Modal.Body>
            <Form.Group controlId="editDescription">
              <Form.Label className="fw-semibold">Task Description</Form.Label>
              <Form.Control
                type="text"
                value={newDescription}
                onChange={(e) => setNewDescription(e.target.value)}
                required
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowModal(false)}>
              Cancel
            </Button>
            <Button variant="primary" type="submit">
              Save Changes
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};

export default Task;
