// Recursive Algorithms: Fibonacci, Palindrome Checker, Power Function

/**
 * Calculates the nth Fibonacci number recursively.
 * Base cases: F(0) = 0, F(1) = 1
 * Recursive formula: F(n) = F(n-1) + F(n-2)
 */
function fibonacci(n) {
    if (typeof n !== 'number' || n < 0 || !Number.isInteger(n)) {
        throw new Error('Input must be a non-negative integer.');
    }

    if (n === 0) return 0;
    if (n === 1) return 1;

    return fibonacci(n - 1) + fibonacci(n - 2);
}

/**
 * Checks recursively if a string is a palindrome.
 * Ignores casing, spaces, and punctuation.
 */
function isPalindrome(str) {
    if (typeof str !== 'string') {
        throw new TypeError('Input must be a string.');
    }

    function check(cleanStr) {
        if (cleanStr.length <= 1) {
            return true;
        }

        if (cleanStr[0] !== cleanStr[cleanStr.length - 1]) {
            return false;
        }

        return check(cleanStr.slice(1, -1));
    }

    const normalized = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    return check(normalized);
}

/**
 * Calculates base^exponent recursively.
 * Supports positive, zero, and negative integer exponents.
 */
function power(base, exponent) {
    if (typeof base !== 'number' || typeof exponent !== 'number') {
        throw new TypeError('Base and exponent must be numbers.');
    }
    if (!Number.isInteger(exponent)) {
        throw new Error('Exponent must be an integer.');
    }

    if (exponent === 0) {
        return 1;
    }

    if (exponent < 0) {
        return 1 / power(base, -exponent);
    }

    return base * power(base, exponent - 1);
}

module.exports = {
    fibonacci,
    isPalindrome,
    power
};
