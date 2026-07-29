const assert = require('assert');
const { isLeapYear, getTicketPrice, adviseClothing } = require('./decisionMaking');
const { fibonacci, isPalindrome, power } = require('./recursion');

console.log('Running test suite...\n');

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

// Decision Making
runTest('isLeapYear - Divisible by 400', () => {
    assert.strictEqual(isLeapYear(2000), true);
});

runTest('isLeapYear - Divisible by 100 but not 400', () => {
    assert.strictEqual(isLeapYear(1900), false);
});

runTest('isLeapYear - Divisible by 4 but not 100', () => {
    assert.strictEqual(isLeapYear(2024), true);
});

runTest('isLeapYear - Standard non-leap year', () => {
    assert.strictEqual(isLeapYear(2023), false);
});

runTest('getTicketPrice - Child age (<= 12)', () => {
    assert.strictEqual(getTicketPrice(10), 10);
});

runTest('getTicketPrice - Teenager age (13-17)', () => {
    assert.strictEqual(getTicketPrice(15), 15);
});

runTest('getTicketPrice - Adult age (>= 18)', () => {
    assert.strictEqual(getTicketPrice(25), 20);
});

runTest('adviseClothing - Cold and raining', () => {
    assert.ok(adviseClothing(5, true).includes('Cold'));
});

// Recursion
runTest('fibonacci - Base cases (0 and 1)', () => {
    assert.strictEqual(fibonacci(0), 0);
    assert.strictEqual(fibonacci(1), 1);
});

runTest('fibonacci - Fibonacci(5)', () => {
    assert.strictEqual(fibonacci(5), 5);
});

runTest('isPalindrome - Palindrome with punctuation and caps', () => {
    assert.strictEqual(isPalindrome('A man, a plan, a canal: Panama'), true);
});

runTest('isPalindrome - Non-palindrome', () => {
    assert.strictEqual(isPalindrome('hello'), false);
});

runTest('power - Base 2 power 3', () => {
    assert.strictEqual(power(2, 3), 8);
});

runTest('power - Base 2 power -2', () => {
    assert.strictEqual(power(2, -2), 0.25);
});

console.log(`\nPassed ${passedTests}/${totalTests} tests.`);
