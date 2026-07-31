import React from 'react';
import { Alert, Nav, Badge } from 'react-bootstrap';
import TaskItem from './TaskItem';

/**
 * TaskList Component
 * Displays tasks list filtered by status (All, Active, Completed).
 */
const TaskList = ({
  tasks,
  filter,
  onFilterChange,
  onToggleComplete,
  onEditTask,
  onDeleteTask,
  totalTasks,
  activeTasksCount,
  completedTasksCount
}) => {
  return (
    <div>
      {/* Filter Navigation Tabs */}
      <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center mb-4 gap-3 bg-white p-3 rounded-4 shadow-sm">
        <Nav variant="pills" activeKey={filter} onSelect={(selectedKey) => onFilterChange(selectedKey)}>
          <Nav.Item>
            <Nav.Link eventKey="all" className="rounded-pill px-3">
              All <Badge bg="dark" className="ms-1">{totalTasks}</Badge>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="active" className="rounded-pill px-3">
              Active <Badge bg="primary" className="ms-1">{activeTasksCount}</Badge>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="completed" className="rounded-pill px-3">
              Completed <Badge bg="success" className="ms-1">{completedTasksCount}</Badge>
            </Nav.Link>
          </Nav.Item>
        </Nav>

        <div className="text-muted small">
          Click task name or edit button to update details
        </div>
      </div>

      {/* Empty State */}
      {tasks.length === 0 ? (
        <Alert variant="info" className="text-center p-5 rounded-4 shadow-sm">
          <Alert.Heading className="fw-bold">No Tasks Found!</Alert.Heading>
          <p className="mb-0">
            {filter === 'all'
              ? 'Your task list is empty. Add a new task above to get started!'
              : `No ${filter} tasks right now.`}
          </p>
        </Alert>
      ) : (
        /* Task Cards List */
        tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onToggleComplete={onToggleComplete}
            onEditTask={onEditTask}
            onDeleteTask={onDeleteTask}
          />
        ))
      )}
    </div>
  );
};

export default TaskList;
