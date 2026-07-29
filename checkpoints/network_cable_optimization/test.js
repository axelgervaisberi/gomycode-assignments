const assert = require('assert');
const { NetworkGraph } = require('./index');

function runTests() {
    console.log('--- Testing Network Cable Optimization ---');

    const network = new NetworkGraph();

    // add office computers and potential cable connections
    network.addConnection('CompA', 'CompB', 4);
    network.addConnection('CompA', 'CompC', 2);
    network.addConnection('CompB', 'CompC', 1);
    network.addConnection('CompB', 'CompD', 5);
    network.addConnection('CompC', 'CompD', 8);
    network.addConnection('CompC', 'CompE', 10);
    network.addConnection('CompD', 'CompE', 2);

    // compute MST using Kruskal's algorithm
    const kruskalResult = network.computeMST();
    console.log('\nKruskal Algorithm Result:');
    console.log('Selected Cable Connections:');
    kruskalResult.selectedConnections.forEach(edge => {
        console.log(`  ${edge.u} <--> ${edge.v} (Cost: ${edge.cost})`);
    });
    console.log('Total Cable Cost:', kruskalResult.totalCost);

    assert.strictEqual(kruskalResult.totalCost, 10);
    assert.strictEqual(kruskalResult.selectedConnections.length, 4);

    // compute MST using Prim's algorithm
    const primResult = network.computeMSTPrim('CompA');
    console.log('\nPrim Algorithm Result:');
    console.log('Selected Cable Connections:');
    primResult.selectedConnections.forEach(edge => {
        console.log(`  ${edge.u} <--> ${edge.v} (Cost: ${edge.cost})`);
    });
    console.log('Total Cable Cost:', primResult.totalCost);

    assert.strictEqual(primResult.totalCost, 10);
    assert.strictEqual(primResult.selectedConnections.length, 4);

    console.log('\nAll cable optimization tests passed successfully!');
}

runTests();
