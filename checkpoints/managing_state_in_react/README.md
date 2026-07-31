# Managing State in React Checkpoint - To-Do List Application

A React To-Do List application demonstrating React state management, form validation, full task CRUD operations (Add, Edit, Delete with confirmation, Toggle Complete), task filtering, and `localStorage` persistence.

## Features

- **Form Validation**: Ensures task title and description fields are non-empty before submission.
- **Full CRUD Operations**:
  - Add new tasks.
  - Edit existing tasks (pre-fills form fields).
  - Delete tasks with a confirmation modal prompt.
  - Mark tasks as completed/active.
- **Browser Storage Persistence**: Uses `localStorage` to load tasks on initial mount and save tasks whenever state changes.
- **Task Filtering**: Filter tasks by completion status (`All`, `Active`, `Completed`).
- **Visual Distinction**: Completed tasks are visually distinguished with strikethrough styling and green badges.

## Component Architecture

```
managing_state_in_react/
├── src/
│   ├── components/
│   │   ├── TaskForm.js    # Form for adding/editing tasks with validation
│   │   ├── TaskList.js    # Task list container & status filter tabs
│   │   └── TaskItem.js    # Individual task card & delete confirmation modal
│   ├── App.js             # Root component managing state & localStorage
│   ├── App.css
│   └── index.js
├── package.json
└── README.md
```

## How to Run

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start development server:
   ```bash
   npm start
   ```
