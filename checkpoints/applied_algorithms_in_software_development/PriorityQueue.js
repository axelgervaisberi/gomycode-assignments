// Min-Priority Queue for Dijkstra's algorithm

class PriorityQueue {
    constructor() {
        this.nodes = [];
    }

    enqueue(element, priority) {
        this.nodes.push({ element, priority });
        this.sort();
    }

    dequeue() {
        return this.nodes.shift();
    }

    sort() {
        this.nodes.sort((a, b) => a.priority - b.priority);
    }

    isEmpty() {
        return this.nodes.length === 0;
    }
}

module.exports = PriorityQueue;
