function rangeOfNumbers(startNum, endNum) {
  if (endNum < startNum) {
     return [];
  } else {
    const countArray = rangeOfNumbers(startNum,endNum - 1)
    countArray.push(endNum);
     return countArray;
  }
};

rangeOfNumbers(1, 5);
rangeOfNumbers(6, 9);
rangeOfNumbers(4, 4);