function popShift(arr) {
  let popped = arr.pop();       //Change this line
  let shifted = arr.shift();   //Change this line
  return [shifted, popped];
}

popShift(['challenge', 'is', 'not', 'complete']);