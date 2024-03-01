function firstNonRepeatedChar(str) {
  // Create a map to store character counts
  const charCount = new Map();

  // Count occurrences of each character
  for (let char of str) {
    if (charCount.has(char)) {
      charCount.set(char, charCount.get(char) + 1);
    } else {
      charCount.set(char, 1);
    }
  }

  // Find the first non-repeated character
  for (let char of str) {
    if (charCount.get(char) === 1) {
      return char;
    }
  }

  // If all characters are repeated or the string is empty, return null
  return null;
}

// Test the function
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input));
