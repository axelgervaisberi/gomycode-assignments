const assert = require('assert');
const { dijkstra, dijkstraWithPaths } = require('./dijkstra');

console.log('Running test suite for Dijkstra\'s Algorithm...\n');

let passedTests = 0;
let totalTests = 0;

function runTest(testName, fn) {
    totalTests++;
    try {
        fn();
        console.log(`[PASS] ${testName}`);
        passedTests++;
    } catch (err) {
        console.error(`[FAIL] ${testName}`);
        console.error(`       Error: ${err.message}`);
    }
}

// Test 1: Checkpoint example graph
runTest('dijkstra - Checkpoint graph from node A', () => {
    const graph = {
        'A': { 'B': 4, 'C': 2 },
        'B': { 'A': 4, 'C': 5, 'D': 10 },
        'C': { 'A': 2, 'B': 5, 'D': 3 },
        'D': { 'B': 10, 'C': 3 }
    };

    const expected = { 'A': 0, 'B': 4, 'C': 2, 'D': 5 };
    const result = dijkstra(graph, 'A');
    assert.deepStrictEqual(result, expected);
});

// Test 2: Checkpoint example starting from node B
runTest('dijkstra - Checkpoint graph from node B', () => {
    const graph = {
        'A': { 'B': 4, 'C': 2 },
        'B': { 'A': 4, 'C': 5, 'D': 10 },
        'C': { 'A': 2, 'B': 5, 'D': 3 },
        'D': { 'B': 10, 'C': 3 }
    };

    const expected = { 'A': 4, 'B': 0, 'C': 5, 'D': 8 };
    const result = dijkstra(graph, 'B');
    assert.deepStrictEqual(result, expected);
});

// Test 3: Path reconstruction
runTest('dijkstraWithPaths - Verify shortest paths', () => {
    const graph = {
        'A': { 'B': 4, 'C': 2 },
        'B': { 'A': 4, 'C': 5, 'D': 10 },
        'C': { 'A': 2, 'B': 5, 'D': 3 },
        'D': { 'B': 10, 'C': 3 }
    };

    const { distances, paths } = dijkstraWithPaths(graph, 'A');
    assert.deepStrictEqual(distances, { 'A': 0, 'B': 4, 'C': 2, 'D': 5 });
    assert.deepStrictEqual(paths['D'], ['A', 'C', 'D']);
    assert.deepStrictEqual(paths['B'], ['A', 'B']);
});

// Test 4: Disconnected vertex
runTest('dijkstra - Disconnected vertex handled gracefully', () => {
    const graph = {
        'X': { 'Y': 1 },
        'Y': { 'X': 1 },
        'Z': {}
    };

    const result = dijkstra(graph, 'X');
    assert.strictEqual(result['X'], 0);
    assert.strictEqual(result['Y'], 1);
    assert.strictEqual(result['Z'], Infinity);
});

// Test 5: Error handling
runTest('dijkstra - Invalid input validation', () => {
    assert.throws(() => dijkstra(null, 'A'), /Graph must be a valid object/);
    assert.throws(() => dijkstra({}, 'Z'), /Start vertex "Z" does not exist/);
});

console.log(`\nPassed ${passedTests}/${totalTests} tests.`);
