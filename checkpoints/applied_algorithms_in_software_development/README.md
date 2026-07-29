# Applied Algorithms - Dijkstra's Algorithm Checkpoint

Implementation of Dijkstra's algorithm in JavaScript to find shortest paths in weighted graphs.

## Description

Dijkstra's algorithm finds the shortest distance from a starting node to all other reachable nodes in a weighted graph.

This implementation provides:
1. `dijkstra(graph, start)`: Returns an object containing the shortest distances from `start` to every node.
2. `dijkstraWithPaths(graph, start)`: Returns both shortest distances and reconstructed path node arrays.
3. `PriorityQueue.js`: Min-priority queue used for efficient node selection.

## Graph Format

Graphs are defined as adjacency objects mapping each vertex to its neighbors and edge weights:

```javascript
const graph = {
  'A': { 'B': 4, 'C': 2 },
  'B': { 'A': 4, 'C': 5, 'D': 10 },
  'C': { 'A': 2, 'B': 5, 'D': 3 },
  'D': { 'B': 10, 'C': 3 }
};
```

Running `dijkstra(graph, 'A')` returns:
```javascript
{ 'A': 0, 'B': 4, 'C': 2, 'D': 5 }
```

## Files

- `PriorityQueue.js`: Priority queue helper class.
- `dijkstra.js`: Dijkstra shortest path implementation functions.
- `index.js`: Demo script displaying shortest distances and paths.
- `test.js`: Assertion test suite.

## How to Run

Run the demo script:
```bash
node index.js
```

Run tests:
```bash
node test.js
```
