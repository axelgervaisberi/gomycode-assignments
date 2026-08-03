# React Debugging Checkpoint

A React application demonstrating component state management, prop inspection, and array state debugging using the **React Developer Tools** browser extension.

## Features & Debugged Scenarios

- **`Counter.js`**: Debugged state closures and batching issues using functional state updates (`setCount(prev => prev + 1)`).
- **`UserProfile.js`**: Debugged missing props and `undefined` property crashes using default prop fallbacks and optional chaining.
- **`ItemList.js`**: Debugged array direct mutation and DOM reconciliation bugs using immutable state updates (`[...items]`, `map`, `filter`) and unique `key={item.id}` props.
- **`DEBUGGING_REPORT.md`**: Comprehensive debugging report documenting DevTools inspection steps, bug diagnoses, code diffs, and verification steps.

## How to Run

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start development server:
   ```bash
   npm start
   ```

3. Open React Developer Tools in Chrome or Firefox (Press `F12` &rarr; `Components` or `Profiler` tabs) to inspect live state and props.
