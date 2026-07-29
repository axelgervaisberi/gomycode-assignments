# Network Cable Optimization

An office computer network optimization tool built with JavaScript using Kruskal's and Prim's Minimum Spanning Tree (MST) algorithms.

## Problem Description

Given a set of office computers (vertices) and potential network cable connections with associated costs/lengths (weighted edges), compute the optimal cable layout that connects all computers with the minimum total cost and no loops/cycles.

## Algorithms Used

1. **Kruskal's Algorithm**
   - Sorts all available cable connections by cost.
   - Uses a **Disjoint Set (Union-Find)** with path compression to add the cheapest edge that does not form a cycle.
2. **Prim's Algorithm**
   - Starts from an initial computer node and greedily attaches the minimum-cost cable connecting a connected node to an unvisited computer.

## Output Provided

- **Selected Connections**: List of optimal cable links between computers.
- **Total Network Cost**: Minimum cost sum needed to connect all computers.

## How to Run Tests

```bash
node test.js
```
