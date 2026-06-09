// Factorial
function factorial(n) {
  if (n < 0) return undefined; // Factorial is not defined for negative numbers
  if (n === 0 || n === 1) return 1;
  
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

// Prime Number Check
function isPrime(num) {
  if (num <= 1) return false;
  
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false; // Found a divisor, so it's not prime
    }
  }
  return true; // No divisors found, so it's prime
}

// Fibonacci Sequence
function generateFibonacci(numTerms) {
  if (numTerms <= 0) return [];
  if (numTerms === 1) return [0];
  
  let sequence = [0, 1];
  for (let i = 2; i < numTerms; i++) {
    // Each term is the sum of the two preceding ones
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }
  return sequence;
}

// Quick Tests
console.log("--- Math Functions ---");
console.log("Factorial of 5:", factorial(5));
console.log("Is 7 prime?:", isPrime(7));
console.log("Is 10 prime?:", isPrime(10));
console.log("Fibonacci (7 terms):", generateFibonacci(7));
