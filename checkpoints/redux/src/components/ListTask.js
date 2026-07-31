import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Nav, Badge, Alert } from 'react-bootstrap';
import Task from './Task';
import { setFilterStatus } from '../redux/todoSlice';

/**
 * ListTask Component
 * Filters and renders list of tasks from Redux store.
 */
const ListTask = () => {
  const dispatch = useDispatch();
  const { tasks, filter } = useSelector((state) => state.todos);

  // Filter logic
  const filteredTasks = tasks.filter((task) => {
    if (filter === 'done') return task.isDone;
    if (filter === 'notDone') return !task.isDone;
    return true; // 'all'
  });

  const totalCount = tasks.length;
  const doneCount = tasks.filter(t => t.isDone).length;
  const notDoneCount = tasks.filter(t => !t.isDone).length;

  return (
    <div>
      {/* Filter Tabs */}
      <div className="bg-white p-3 rounded-4 shadow-sm mb-4 d-flex flex-column flex-sm-row justify-content-between align-items-center gap-3">
        <Nav
          variant="pills"
          activeKey={filter}
          onSelect={(selectedFilter) => dispatch(setFilterStatus(selectedFilter))}
        >
          <Nav.Item>
            <Nav.Link eventKey="all" className="rounded-pill px-3">
              All <Badge bg="dark" className="ms-1">{totalCount}</Badge>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="done" className="rounded-pill px-3">
              Done <Badge bg="success" className="ms-1">{doneCount}</Badge>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="notDone" className="rounded-pill px-3">
              Not Done <Badge bg="warning" text="dark" className="ms-1">{notDoneCount}</Badge>
            </Nav.Link>
          </Nav.Item>
        </Nav>

        <span className="text-muted small">Filter tasks by status</span>
      </div>

      {/* Render Filtered Tasks */}
      {filteredTasks.length === 0 ? (
        <Alert variant="info" className="text-center p-5 rounded-4 shadow-sm">
          <Alert.Heading className="fw-bold">No Tasks Available</Alert.Heading>
          <p className="mb-0">
            {filter === 'all'
              ? 'Your task list is empty. Add a new task above!'
              : `No tasks marked as "${filter}".`}
          </p>
        </Alert>
      ) : (
        filteredTasks.map((task) => <Task key={task.id} task={task} />)
      )}
    </div>
  );
};

export default ListTask;
