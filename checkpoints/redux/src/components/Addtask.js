import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Button, InputGroup, Card } from 'react-bootstrap';
import { FaPlus } from 'react-icons/fa';
import { addTask } from '../redux/todoSlice';

/**
 * Addtask Component
 * Dispatches new task to Redux global state.
 */
const Addtask = () => {
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description.trim()) return;

    dispatch(addTask(description.trim()));
    setDescription('');
  };

  return (
    <Card className="shadow border-0 rounded-4 mb-4">
      <Card.Body className="p-4">
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="addTaskInput">
            <Form.Label className="fw-bold text-dark fs-5 mb-3">Add New Task</Form.Label>
            <InputGroup>
              <Form.Control
                type="text"
                placeholder="Enter task description..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="py-2"
              />
              <Button variant="primary" type="submit" className="px-4 fw-bold d-flex align-items-center gap-2">
                <FaPlus /> Add Task
              </Button>
            </InputGroup>
          </Form.Group>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default Addtask;
