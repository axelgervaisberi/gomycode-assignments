const { dijkstra, dijkstraWithPaths } = require('./dijkstra');

console.log('=== Applied Algorithms: Dijkstra\'s Algorithm ===\n');

// Graph from checkpoint instructions
const graph = {
    'A': { 'B': 4, 'C': 2 },
    'B': { 'A': 4, 'C': 5, 'D': 10 },
    'C': { 'A': 2, 'B': 5, 'D': 3 },
    'D': { 'B': 10, 'C': 3 }
};

console.log('Graph structure:');
console.log(JSON.stringify(graph, null, 2));

const startNode = 'A';
console.log(`\nShortest distances from '${startNode}':`);
const distances = dijkstra(graph, startNode);
console.log(distances);

console.log(`\nShortest paths from '${startNode}':`);
const { paths } = dijkstraWithPaths(graph, startNode);
for (const target in paths) {
    const pathStr = paths[target] ? paths[target].join(' -> ') : 'Unreachable';
    console.log(`  To ${target}: Distance = ${distances[target]}, Path = [${pathStr}]`);
}
