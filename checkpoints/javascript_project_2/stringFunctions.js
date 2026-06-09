// Reverse a String
function reverseString(str) {
  // Split the string into an array of characters, reverse it, and join it back
  return str.split('').reverse().join('');
}

// Count Characters
function countCharacters(str) {
  // Returns the length of the string
  return str.length;
}

// Capitalize Words
function capitalizeWords(sentence) {
  // Split the sentence by spaces, capitalize the first letter of each word, and join them back
  let words = sentence.split(' ');
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }
  return words.join(' ');
}

// Quick Tests
console.log("--- String Functions ---");
console.log("Reverse 'hello':", reverseString("hello"));
console.log("Count 'javascript':", countCharacters("javascript"));
console.log("Capitalize 'hello world from javascript':", capitalizeWords("hello world from javascript"));
