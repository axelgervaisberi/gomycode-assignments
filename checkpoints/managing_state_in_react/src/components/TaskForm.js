import React, { useState, useEffect } from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { FaPlus, FaCheck } from 'react-icons/fa';

/**
 * TaskForm Component
 * Handles creating new tasks and updating existing tasks with form validation.
 */
const TaskForm = ({ onSaveTask, editingTask, onCancelEdit }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [validated, setValidated] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Pre-fill form fields when an editing task is provided
  useEffect(() => {
    if (editingTask) {
      setName(editingTask.name || '');
      setDescription(editingTask.description || '');
      setErrorMsg('');
      setValidated(false);
    } else {
      setName('');
      setDescription('');
      setErrorMsg('');
      setValidated(false);
    }
  }, [editingTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setValidated(true);

    // Form validation: check both fields are filled
    if (!name.trim() || !description.trim()) {
      setErrorMsg('Both Task Name and Description are required!');
      return;
    }

    setErrorMsg('');

    onSaveTask({
      id: editingTask ? editingTask.id : String(Date.now()),
      name: name.trim(),
      description: description.trim(),
      completed: editingTask ? editingTask.completed : false,
      createdAt: editingTask ? editingTask.createdAt : new Date().toISOString()
    });

    // Reset form fields after successful save
    setName('');
    setDescription('');
    setValidated(false);
  };

  return (
    <Card className="shadow border-0 rounded-4 mb-4">
      <Card.Header className={`bg-${editingTask ? 'warning' : 'primary'} text-white fw-bold py-3 fs-5 rounded-top-4`}>
        {editingTask ? '✏️ Edit Task' : '➕ Add New Task'}
      </Card.Header>
      <Card.Body className="p-4">
        {errorMsg && <Alert variant="danger">{errorMsg}</Alert>}

        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="taskName">
            <Form.Label className="fw-semibold">Task Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="e.g. Complete React Checkpoint"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please enter a task name.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-4" controlId="taskDescription">
            <Form.Label className="fw-semibold">Task Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Provide task details..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please enter a task description.
            </Form.Control.Feedback>
          </Form.Group>

          <div className="d-flex gap-2">
            <Button
              variant={editingTask ? "warning" : "primary"}
              type="submit"
              className="fw-bold rounded-pill px-4"
            >
              {editingTask ? <><FaCheck /> Save Changes</> : <><FaPlus /> Add Task</>}
            </Button>

            {editingTask && (
              <Button
                variant="secondary"
                onClick={onCancelEdit}
                className="rounded-pill px-4"
              >
                Cancel Edit
              </Button>
            )}
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default TaskForm;
