// disjoint set (union-find) data structure for kruskal algorithm
class UnionFind {
    constructor(elements) {
        this.parent = new Map();
        for (const el of elements) {
            this.parent.set(el, el);
        }
    }

    find(i) {
        if (this.parent.get(i) === i) {
            return i;
        }
        const root = this.find(this.parent.get(i));
        this.parent.set(i, root);
        return root;
    }

    union(i, j) {
        const rootI = this.find(i);
        const rootJ = this.find(j);
        if (rootI !== rootJ) {
            this.parent.set(rootI, rootJ);
            return true;
        }
        return false;
    }
}

class NetworkGraph {
    constructor() {
        this.nodes = new Set();
        this.edges = [];
    }

    addNode(node) {
        this.nodes.add(node);
    }

    addConnection(u, v, cost) {
        this.addNode(u);
        this.addNode(v);
        this.edges.push({ u, v, cost });
    }

    // Kruskal's algorithm to compute Minimum Spanning Tree
    computeMST() {
        const sortedEdges = [...this.edges].sort((a, b) => a.cost - b.cost);
        const uf = new UnionFind(this.nodes);

        const mstEdges = [];
        let totalCost = 0;

        for (const edge of sortedEdges) {
            if (uf.union(edge.u, edge.v)) {
                mstEdges.push(edge);
                totalCost += edge.cost;
            }
        }

        return {
            selectedConnections: mstEdges,
            totalCost: totalCost
        };
    }

    // Prim's algorithm implementation for comparison
    computeMSTPrim(startNode) {
        if (this.nodes.size === 0) return { selectedConnections: [], totalCost: 0 };
        const start = startNode || Array.from(this.nodes)[0];

        const adj = new Map();
        for (const node of this.nodes) {
            adj.set(node, []);
        }
        for (const { u, v, cost } of this.edges) {
            adj.get(u).push({ to: v, cost, from: u });
            adj.get(v).push({ to: u, cost, from: v });
        }

        const visited = new Set([start]);
        const mstEdges = [];
        let totalCost = 0;

        while (visited.size < this.nodes.size) {
            let minEdge = null;

            for (const node of visited) {
                const neighbors = adj.get(node) || [];
                for (const edge of neighbors) {
                    if (!visited.has(edge.to)) {
                        if (!minEdge || edge.cost < minEdge.cost) {
                            minEdge = edge;
                        }
                    }
                }
            }

            if (!minEdge) break;

            visited.add(minEdge.to);
            mstEdges.push({ u: minEdge.from, v: minEdge.to, cost: minEdge.cost });
            totalCost += minEdge.cost;
        }

        return {
            selectedConnections: mstEdges,
            totalCost: totalCost
        };
    }
}

module.exports = { NetworkGraph, UnionFind };
