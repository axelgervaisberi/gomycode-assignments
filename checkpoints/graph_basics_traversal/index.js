class Graph {
    constructor(isDirected = false) {
        this.adjacencyList = new Map();
        this.isDirected = isDirected;
    }

    addVertex(vertex) {
        if (!this.adjacencyList.has(vertex)) {
            this.adjacencyList.set(vertex, []);
        }
    }

    addEdge(v1, v2) {
        this.addVertex(v1);
        this.addVertex(v2);

        this.adjacencyList.get(v1).push(v2);

        if (!this.isDirected) {
            this.adjacencyList.get(v2).push(v1);
        }
    }

    removeEdge(v1, v2) {
        if (this.adjacencyList.has(v1)) {
            this.adjacencyList.set(
                v1,
                this.adjacencyList.get(v1).filter(v => v !== v2)
            );
        }

        if (!this.isDirected && this.adjacencyList.has(v2)) {
            this.adjacencyList.set(
                v2,
                this.adjacencyList.get(v2).filter(v => v !== v1)
            );
        }
    }

    hasEdge(v1, v2) {
        if (!this.adjacencyList.has(v1)) return false;
        return this.adjacencyList.get(v1).includes(v2);
    }

    printGraph() {
        for (let [vertex, neighbors] of this.adjacencyList.entries()) {
            console.log(`${vertex} -> ${neighbors.join(', ')}`);
        }
    }

    // depth-first search
    dfs(startVertex) {
        if (!this.adjacencyList.has(startVertex)) return [];

        const visited = new Set();
        const result = [];

        const traverse = (vertex) => {
            visited.add(vertex);
            result.push(vertex);

            const neighbors = this.adjacencyList.get(vertex) || [];
            for (let neighbor of neighbors) {
                if (!visited.has(neighbor)) {
                    traverse(neighbor);
                }
            }
        };

        traverse(startVertex);
        return result;
    }

    // breadth-first search
    bfs(startVertex) {
        if (!this.adjacencyList.has(startVertex)) return [];

        const visited = new Set();
        const queue = [startVertex];
        const result = [];

        visited.add(startVertex);

        while (queue.length > 0) {
            const vertex = queue.shift();
            result.push(vertex);

            const neighbors = this.adjacencyList.get(vertex) || [];
            for (let neighbor of neighbors) {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    queue.push(neighbor);
                }
            }
        }

        return result;
    }
}

module.exports = Graph;
