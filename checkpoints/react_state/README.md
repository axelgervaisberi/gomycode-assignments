# React State Checkpoint

A React application featuring a class-based component (`App.js`), state management for a person object, profile toggle button, and component lifecycle timer using `componentDidMount` and `componentWillUnmount`.

## Features

- **Class Component**: Transformed `App.js` into `class App extends Component`.
- **Person State**: Contains `person` object (`fullName`, `bio`, `imgSrc`, `profession`).
- **Profile Toggle**: Button that toggles `shows` boolean state to show/hide profile details.
- **Component Lifecycle Timer**: Tracks time interval since mount using `componentDidMount` (`setInterval`) and cleans up with `componentWillUnmount` (`clearInterval`).

## How to Run

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start development server:
   ```bash
   npm start
   ```
