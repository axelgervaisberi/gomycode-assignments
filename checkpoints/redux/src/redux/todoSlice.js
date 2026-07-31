import { createSlice } from '@reduxjs/toolkit';

/**
 * Redux Slice for managing global ToDo state
 * Attributes for each task: id, description, isDone
 */
const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    tasks: [
      { id: '1', description: 'Learn React-Redux Architecture', isDone: true },
      { id: '2', description: 'Implement Redux Checkpoint ToDo App', isDone: false },
      { id: '3', description: 'Review Redux Toolkit actions & reducers', isDone: false }
    ],
    filter: 'all' // Options: 'all', 'done', 'notDone'
  },
  reducers: {
    // Add a new task to the global state
    addTask: (state, action) => {
      const newTask = {
        id: String(Date.now()),
        description: action.payload,
        isDone: false
      };
      state.tasks.unshift(newTask);
    },

    // Toggle task completion status (isDone)
    toggleTaskStatus: (state, action) => {
      const task = state.tasks.find(t => t.id === action.payload);
      if (task) {
        task.isDone = !task.isDone;
      }
    },

    // Edit a task description
    editTask: (state, action) => {
      const { id, description } = action.payload;
      const task = state.tasks.find(t => t.id === id);
      if (task) {
        task.description = description;
      }
    },

    // Set filter status
    setFilterStatus: (state, action) => {
      state.filter = action.payload;
    }
  }
});

export const { addTask, toggleTaskStatus, editTask, setFilterStatus } = todoSlice.actions;
export default todoSlice.reducer;
