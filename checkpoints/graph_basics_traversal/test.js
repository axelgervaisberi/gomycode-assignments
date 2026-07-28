const assert = require('assert');
const Graph = require('./index');

function runTests() {
    console.log('Testing Undirected Graph...');
    const undirectedGraph = new Graph(false);
    undirectedGraph.addEdge('A', 'B');
    undirectedGraph.addEdge('A', 'C');
    undirectedGraph.addEdge('B', 'D');
    undirectedGraph.addEdge('C', 'D');

    console.log('\nGraph structure:');
    undirectedGraph.printGraph();

    assert.strictEqual(undirectedGraph.hasEdge('A', 'B'), true);
    assert.strictEqual(undirectedGraph.hasEdge('B', 'A'), true);

    const dfsResult = undirectedGraph.dfs('A');
    const bfsResult = undirectedGraph.bfs('A');

    console.log('\nDFS starting from A:', dfsResult.join(' -> '));
    console.log('BFS starting from A:', bfsResult.join(' -> '));

    assert.deepStrictEqual(dfsResult, ['A', 'B', 'D', 'C']);
    assert.deepStrictEqual(bfsResult, ['A', 'B', 'C', 'D']);

    // test removing an edge
    undirectedGraph.removeEdge('A', 'B');
    assert.strictEqual(undirectedGraph.hasEdge('A', 'B'), false);
    assert.strictEqual(undirectedGraph.hasEdge('B', 'A'), false);

    console.log('\nTesting Directed Graph...');
    const directedGraph = new Graph(true);
    directedGraph.addEdge('A', 'B');
    directedGraph.addEdge('A', 'C');
    directedGraph.addEdge('B', 'D');

    console.log('\nDirected Graph structure:');
    directedGraph.printGraph();

    assert.strictEqual(directedGraph.hasEdge('A', 'B'), true);
    assert.strictEqual(directedGraph.hasEdge('B', 'A'), false);

    const directedDfs = directedGraph.dfs('A');
    const directedBfs = directedGraph.bfs('A');

    console.log('\nDirected DFS starting from A:', directedDfs.join(' -> '));
    console.log('Directed BFS starting from A:', directedBfs.join(' -> '));

    console.log('\nAll graph tests passed successfully!');
}

runTests();
