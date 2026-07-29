# React Checkpoint 02 - FIFA Player Cards

A React application built with React-Bootstrap rendering a collection of FIFA Player cards using destructured props, default props, array mapping, the spread operator, and inline styling.

## Features

- **Player Data (`players.js`)**: Array of player JSON objects containing name, team, nationality, jersey number, age, and image URL.
- **Player Component (`Player.js`)**: Renders a React-Bootstrap Card using destructured props, `defaultProps`, and inline styles.
- **PlayersList Component (`PlayersList.js`)**: Maps through players and passes props via the spread operator (`{...player}`).

## How to Run

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start development server:
   ```bash
   npm start
   ```
