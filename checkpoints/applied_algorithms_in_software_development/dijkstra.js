const PriorityQueue = require('./PriorityQueue');

/**
 * Computes shortest distances from a starting vertex to all other vertices in a weighted graph.
 * 
 * @param {Object} graph - Adjacency list of weighted graph edges.
 * @param {string} start - The starting vertex.
 * @returns {Object} Shortest distance to each vertex.
 */
function dijkstra(graph, start) {
    if (!graph || typeof graph !== 'object') {
        throw new TypeError('Graph must be a valid object.');
    }
    if (!start || !(start in graph)) {
        throw new Error(`Start vertex "${start}" does not exist in graph.`);
    }

    const distances = {};
    const pq = new PriorityQueue();

    // Initialize distances
    for (const vertex in graph) {
        if (vertex === start) {
            distances[vertex] = 0;
            pq.enqueue(vertex, 0);
        } else {
            distances[vertex] = Infinity;
        }
    }

    while (!pq.isEmpty()) {
        const { element: currentVertex, priority: currentDist } = pq.dequeue();

        // Skip outdated distance entries
        if (currentDist > distances[currentVertex]) {
            continue;
        }

        const neighbors = graph[currentVertex] || {};
        for (const neighbor in neighbors) {
            const weight = neighbors[neighbor];
            const distance = currentDist + weight;

            // Found a shorter path to neighbor
            if (distance < distances[neighbor]) {
                distances[neighbor] = distance;
                pq.enqueue(neighbor, distance);
            }
        }
    }

    return distances;
}

/**
 * Computes shortest distances and reconstructs paths to each vertex.
 */
function dijkstraWithPaths(graph, start) {
    if (!graph || typeof graph !== 'object') {
        throw new TypeError('Graph must be a valid object.');
    }
    if (!start || !(start in graph)) {
        throw new Error(`Start vertex "${start}" does not exist in graph.`);
    }

    const distances = {};
    const previous = {};
    const pq = new PriorityQueue();

    for (const vertex in graph) {
        if (vertex === start) {
            distances[vertex] = 0;
            pq.enqueue(vertex, 0);
        } else {
            distances[vertex] = Infinity;
        }
        previous[vertex] = null;
    }

    while (!pq.isEmpty()) {
        const { element: currentVertex, priority: currentDist } = pq.dequeue();

        if (currentDist > distances[currentVertex]) {
            continue;
        }

        const neighbors = graph[currentVertex] || {};
        for (const neighbor in neighbors) {
            const weight = neighbors[neighbor];
            const distance = currentDist + weight;

            if (distance < distances[neighbor]) {
                distances[neighbor] = distance;
                previous[neighbor] = currentVertex;
                pq.enqueue(neighbor, distance);
            }
        }
    }

    // Reconstruct paths
    const paths = {};
    for (const vertex in graph) {
        if (distances[vertex] === Infinity) {
            paths[vertex] = null;
            continue;
        }

        const path = [];
        let curr = vertex;
        while (curr !== null) {
            path.unshift(curr);
            curr = previous[curr];
        }
        paths[vertex] = path;
    }

    return { distances, paths };
}

module.exports = {
    dijkstra,
    dijkstraWithPaths
};
