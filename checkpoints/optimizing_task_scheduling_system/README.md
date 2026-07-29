# Task Scheduling System

A task scheduler module in Node.js for sorting, priority grouping, interval overlap detection, and memory estimation.

## Task Model

Each task contains:
- `name`: string
- `startTime`: number
- `endTime`: number
- `priority`: string ('High', 'Medium', 'Low')

## Functions & Complexity Analysis

### 1. `sortByStartTime(tasks)`
- **Description**: Sorts tasks chronologically by `startTime`.
- **Time Complexity**: O(N log N) using V8 Timsort.
- **Space Complexity**: O(N) to return a new sorted array.

### 2. `groupByPriority(tasks)`
- **Description**: Groups tasks by priority level into an object dictionary.
- **Time Complexity**: O(N) since we iterate through the list once.
- **Space Complexity**: O(N) to store grouped tasks in memory.

### 3. `findOverlappingTasks(tasks)`
- **Description**: Sorts intervals first, then scans adjacent intervals to detect overlapping time slots.
- **Time Complexity**: O(N log N + K) where K is the number of overlapping pairs found.
- **Space Complexity**: O(N) for sorted copy and overlap pairs.

### 4. `estimateMemoryUsage(tasks)`
- **Description**: Estimates approximate byte size based on JS object overhead and string lengths.
- **Time Complexity**: O(N)
- **Space Complexity**: O(1)

## How to Run Tests

```bash
node test.js
```
