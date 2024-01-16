function isPalindrome(word) {
  // Convert the word to lowercase for case-insensitive comparison
  const lowerCaseWord = word.toLowerCase();
  
  // Check if the reversed string is the same as the original
  const reversedWord = lowerCaseWord.split('').reverse().join('');
  return lowerCaseWord === reversedWord;
}

/* 
  Pseudocode:
  1. Convert the input word to lowercase.
  2. Reverse the lowercase word.
  3. Check if the reversed word is equal to the original word.
*/

/*
  Explanation:
  - The function first converts the input word to lowercase to make the comparison case-insensitive.
  - It then reverses the lowercase word using the split, reverse, and join array methods.
  - Finally, it checks if the reversed word is equal to the original word and returns true if they are, and false otherwise.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
