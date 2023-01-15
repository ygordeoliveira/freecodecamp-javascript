// Only change code below this line
function countdown(n){
  if (n < 1) {
    return [];
  } else {
    const myArray = countdown(n - 1);
    myArray.unshift(n);
    return myArray;
  }
}

countdown(-1);
countdown(10);
countdown(5);
// Only change code above this line