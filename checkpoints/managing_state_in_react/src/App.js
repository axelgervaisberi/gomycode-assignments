import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import './App.css';

const LOCAL_STORAGE_KEY = 'gomycode_todo_tasks';

/**
 * Main App Component
 * Manages tasks state, localStorage sync, filter state, and CRUD handlers.
 */
function App() {
  // Initialize tasks state from localStorage
  const [tasks, setTasks] = useState(() => {
    try {
      const savedTasks = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (savedTasks) {
        return JSON.parse(savedTasks);
      }
    } catch (error) {
      console.error('Error loading tasks from localStorage:', error);
    }
    // Default initial tasks if localStorage is empty
    return [
      {
        id: '1',
        name: 'Complete React State Checkpoint',
        description: 'Implement TaskForm, TaskList, TaskItem, form validation, and localStorage persistence.',
        completed: true,
        createdAt: new Date().toISOString()
      },
      {
        id: '2',
        name: 'Review Code Comments & Documentation',
        description: 'Ensure clean comments and updated README file.',
        completed: false,
        createdAt: new Date().toISOString()
      }
    ];
  });

  const [editingTask, setEditingTask] = useState(null);
  const [filter, setFilter] = useState('all');

  // Persist tasks state changes to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks));
    } catch (error) {
      console.error('Error saving tasks to localStorage:', error);
    }
  }, [tasks]);

  // Handler for adding or updating a task
  const handleSaveTask = (taskToSave) => {
    if (editingTask) {
      // Update existing task
      setTasks(tasks.map((t) => (t.id === taskToSave.id ? taskToSave : t)));
      setEditingTask(null);
    } else {
      // Add new task to the list
      setTasks([taskToSave, ...tasks]);
    }
  };

  // Handler for toggling task completion status
  const handleToggleComplete = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Handler for setting task in edit mode
  const handleEditTask = (task) => {
    setEditingTask(task);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handler for cancelling edit mode
  const handleCancelEdit = () => {
    setEditingTask(null);
  };

  // Handler for deleting a task
  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
    if (editingTask && editingTask.id === taskId) {
      setEditingTask(null);
    }
  };

  // Filter tasks based on selected tab ('all', 'active', 'completed')
  const filteredTasks = tasks.filter((task) => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  });

  const activeCount = tasks.filter((t) => !t.completed).length;
  const completedCount = tasks.filter((t) => t.completed).length;

  return (
    <div className="App min-vh-100 py-5">
      <Container style={{ maxWidth: '900px' }}>
        {/* App Header */}
        <div className="text-center text-white mb-5">
          <h1 className="display-4 fw-bold mb-2">📋 To-Do List Application</h1>
          <p className="lead text-light opacity-75">
            Manage your daily tasks with form validation, editing, completion tracking, and browser storage persistence.
          </p>
        </div>

        <Row className="g-4">
          {/* Task Form Column */}
          <Col lg={5}>
            <TaskForm
              onSaveTask={handleSaveTask}
              editingTask={editingTask}
              onCancelEdit={handleCancelEdit}
            />
          </Col>

          {/* Task List Column */}
          <Col lg={7}>
            <TaskList
              tasks={filteredTasks}
              filter={filter}
              onFilterChange={setFilter}
              onToggleComplete={handleToggleComplete}
              onEditTask={handleEditTask}
              onDeleteTask={handleDeleteTask}
              totalTasks={tasks.length}
              activeTasksCount={activeCount}
              completedTasksCount={completedCount}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
