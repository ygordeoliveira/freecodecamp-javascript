function findLongestWordLength(str) {
    let words = str.split(" ");
    let longestWordLength = 0;
    
    for (let word = 0; word < words.length; word++) {
      if (words[word].length > longestWordLength) {
        longestWordLength = words[word].length;
      }
    }
    return longestWordLength;
  }

findLongestWordLength("The quick brown fox jumped over the lazy dog");