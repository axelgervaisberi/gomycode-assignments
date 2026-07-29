# Decision Making and Recursive Algorithms Checkpoint

Solutions for the GoMyCode checkpoint covering decision making (`if-else`, `switch`) and recursion in JavaScript.

## Tasks Covered

### 1. Decision Making (`decisionMaking.js`)
* **Leap Year Checker (`isLeapYear`)**: Checks if a given year is a leap year (divisible by 4, but not 100 unless also divisible by 400).
* **Ticket Pricing (`getTicketPrice`)**: Calculates movie ticket price based on age:
  - Children ($\le 12$): $10
  - Teenagers ($13 - 17$): $15
  - Adults ($\ge 18$): $20
* **Weather Clothing Adviser (`adviseClothing`)**: Advises what to wear based on temperature and whether it is raining.

### 2. Recursion (`recursion.js`)
* **Fibonacci Sequence (`fibonacci`)**: Calculates the $n$-th Fibonacci number recursively ($F(n) = F(n-1) + F(n-2)$).
* **Palindrome Checker (`isPalindrome`)**: Checks recursively if a string is a palindrome, ignoring spaces, punctuation, and capitalization.
* **Power Function (`power`)**: Computes $base^{exponent}$ recursively (handles positive, zero, and negative integer exponents).

## Files

- `decisionMaking.js` - Functions for leap year, ticket pricing, and weather advice.
- `recursion.js` - Recursive functions for Fibonacci, palindrome, and power.
- `index.js` - Demo script to check output of all functions.
- `test.js` - Simple assertion test runner.

## How to Run

To run the demo script:
```bash
node index.js
```

To run the tests:
```bash
node test.js
```
