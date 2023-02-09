function getIndexToIns(arr, num) {
  arr = arr.sort((a,b) => a-b);

  let count = 0;
  
  for (let i = 0; i < arr.length; i++) {
    if (num <= arr[i]) {
      break;
    }
    count++;
  }
  return count;
}

getIndexToIns([5, 3, 20, 3], 5);