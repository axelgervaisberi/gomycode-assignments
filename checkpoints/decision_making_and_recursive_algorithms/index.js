const { isLeapYear, getTicketPrice, adviseClothing } = require('./decisionMaking');
const { fibonacci, isPalindrome, power } = require('./recursion');

console.log('=== Decision Making and Recursive Algorithms Checkpoint ===\n');

// Decision Making
console.log('--- Decision Making ---');

console.log('\n1. Leap Year Checker:');
[2000, 1900, 2024, 2023].forEach(year => {
    console.log(`Year ${year}: ${isLeapYear(year)}`);
});

console.log('\n2. Ticket Pricing:');
[8, 15, 25].forEach(age => {
    console.log(`Age ${age}: $${getTicketPrice(age)}`);
});

console.log('\n3. Weather Clothing Adviser:');
[
    { temp: 5, rain: true },
    { temp: 18, rain: false },
    { temp: 28, rain: false }
].forEach(({ temp, rain }) => {
    console.log(`Temp: ${temp}°C, Raining: ${rain} -> ${adviseClothing(temp, rain)}`);
});

// Recursion
console.log('\n--- Recursion ---');

console.log('\n1. Fibonacci Sequence:');
[0, 1, 5, 10].forEach(n => {
    console.log(`Fibonacci(${n}) = ${fibonacci(n)}`);
});

console.log('\n2. Palindrome Checker:');
[
    "A man, a plan, a canal: Panama",
    "Racecar",
    "hello"
].forEach(str => {
    console.log(`"${str}" -> ${isPalindrome(str)}`);
});

console.log('\n3. Power Function:');
[
    { base: 2, exp: 3 },
    { base: 5, exp: 0 },
    { base: 2, exp: -2 }
].forEach(({ base, exp }) => {
    console.log(`${base}^${exp} = ${power(base, exp)}`);
});
