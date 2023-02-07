function findLongestWordLength(str) {
  let longestWord = str.split(" ");
  let longestWordLength = 0;
  
  for (let i = 0; i < longestWord.length; i++) {
    if (longestWord[i].length > longestWordLength) {
      longestWordLength = longestWord[i].length;
    }
  }
  return longestWordLength;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");