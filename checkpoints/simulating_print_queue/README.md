# Simulating a Print Queue Checkpoint

Printer queue simulation built with JavaScript using a First-In-First-Out (FIFO) queue data structure.

## Description

In an office setting, print requests sent to a shared printer are processed in the order they arrive. This project simulates that workflow using two main classes:
- `Queue`: Generic FIFO queue supporting `enqueue`, `dequeue`, `peek`, `isEmpty`, and `size`.
- `PrinterQueue`: Wraps `Queue` to manage print jobs containing a document name and page count.

## Project Structure

- `Queue.js`: Core queue class implementation.
- `PrinterQueue.js`: Printer queue manager class.
- `index.js`: Demonstration script showing jobs being queued and printed.
- `test.js`: Assertion test suite for queue operations.

## Running the Code

Run the simulation:
```bash
node index.js
```

Run tests:
```bash
node test.js
```
