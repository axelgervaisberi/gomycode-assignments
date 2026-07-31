# Redux Checkpoint - ToDo Application

A React ToDo Application using Redux Toolkit (`@reduxjs/toolkit` and `react-redux`) for global state management.

## Features & Architecture

- **Global Redux Store (`src/redux/`)**:
  - `todoSlice.js`: State management with reducers for `addTask`, `toggleTaskStatus`, `editTask`, and `setFilterStatus`.
  - `store.js`: Redux store configuration.
- **Components**:
  - `Addtask.js`: Dispatches new tasks to the Redux store.
  - `Task.js`: Renders task attributes (`id`, `description`, `isDone`), handles status toggle, and opens edit modal.
  - `ListTask.js`: Filters tasks by status (`All`, `Done`, `Not Done`) and renders `Task` list.

## How to Run

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start development server:
   ```bash
   npm start
   ```
