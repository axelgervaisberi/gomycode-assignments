const assert = require('assert');
const { ContactManager, naiveSubstringSearch } = require('./index');

function runTests() {
    // substring search test
    assert.strictEqual(naiveSubstringSearch('Alice', 'Al'), true);
    assert.strictEqual(naiveSubstringSearch('Alice', 'lic'), true);
    assert.strictEqual(naiveSubstringSearch('Alice', 'Bob'), false);

    // contact manager test
    const manager = new ContactManager();
    manager.addContact('Alice', '1234567890');
    manager.addContact('Bob', '0987654321');

    // hash table test
    assert.strictEqual(manager.hashTable['alice'].phone, '1234567890');
    assert.strictEqual(manager.hashTable['bob'].phone, '0987654321');

    // linked list links test
    assert.strictEqual(manager.head.name, 'Alice');
    assert.strictEqual(manager.tail.name, 'Bob');
    assert.strictEqual(manager.head.next, manager.tail);
    assert.strictEqual(manager.tail.prev, manager.head);

    console.log('All tests passed!');
}

runTests();
