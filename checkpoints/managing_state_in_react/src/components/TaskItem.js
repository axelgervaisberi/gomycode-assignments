import React, { useState } from 'react';
import { Card, Button, Badge, Modal } from 'react-bootstrap';
import { FaCheckCircle, FaRegCircle, FaEdit, FaTrash } from 'react-icons/fa';

/**
 * TaskItem Component
 * Renders individual task details with options to toggle completion, edit, and delete with confirmation.
 */
const TaskItem = ({ task, onToggleComplete, onEditTask, onDeleteTask }) => {
  const [showConfirm, setShowConfirm] = useState(false);

  const handleConfirmDelete = () => {
    onDeleteTask(task.id);
    setShowConfirm(false);
  };

  return (
    <>
      <Card
        className={`mb-3 border-0 shadow-sm rounded-4 overflow-hidden task-item ${
          task.completed ? 'bg-light text-muted border-start border-success border-5' : 'bg-white border-start border-primary border-5'
        }`}
      >
        <Card.Body className="p-4 d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3">
          {/* Task Info & Completion Toggle */}
          <div className="d-flex align-items-start gap-3 flex-grow-1">
            <Button
              variant="link"
              className="p-0 text-decoration-none border-0 fs-3"
              onClick={() => onToggleComplete(task.id)}
              title={task.completed ? "Mark as Active" : "Mark as Completed"}
            >
              {task.completed ? (
                <FaCheckCircle className="text-success" />
              ) : (
                <FaRegCircle className="text-secondary" />
              )}
            </Button>

            <div>
              <div className="d-flex align-items-center gap-2 mb-1">
                <h5
                  className={`mb-0 fw-bold cursor-pointer ${
                    task.completed ? 'text-decoration-line-through text-muted' : 'text-dark'
                  }`}
                  onClick={() => onEditTask(task)}
                >
                  {task.name}
                </h5>

                <Badge bg={task.completed ? "success" : "primary"} className="rounded-pill">
                  {task.completed ? "Completed" : "Active"}
                </Badge>
              </div>

              <p
                className={`mb-0 ${
                  task.completed ? 'text-decoration-line-through text-muted' : 'text-secondary'
                }`}
                style={{ fontSize: '0.95rem' }}
              >
                {task.description}
              </p>
            </div>
          </div>

          {/* Task Actions */}
          <div className="d-flex align-items-center gap-2 ms-md-auto">
            <Button
              variant="outline-warning"
              size="sm"
              className="rounded-circle p-2"
              onClick={() => onEditTask(task)}
              title="Edit Task"
            >
              <FaEdit size={16} />
            </Button>

            <Button
              variant="outline-danger"
              size="sm"
              className="rounded-circle p-2"
              onClick={() => setShowConfirm(true)}
              title="Delete Task"
            >
              <FaTrash size={16} />
            </Button>
          </div>
        </Card.Body>
      </Card>

      {/* Delete Confirmation Modal Prompt */}
      <Modal show={showConfirm} onHide={() => setShowConfirm(false)} centered>
        <Modal.Header closeButton className="bg-danger text-white">
          <Modal.Title className="fw-bold fs-5">Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body className="py-4">
          Are you sure you want to delete the task <strong>"{task.name}"</strong>? This action cannot be undone.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowConfirm(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleConfirmDelete}>
            Delete Task
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default TaskItem;
