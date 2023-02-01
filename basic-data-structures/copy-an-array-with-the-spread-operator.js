function copyMachine(arr, num) {
  let newArr = [];
  // Only change code below this line
  for (let i = 0; i < arr.length; i++) {
   newArr = [];
  }
  for(let j = 0; j < num; j++) {
   newArr.push([...arr]);
  }
  return newArr;
}
// Only change code above this line

copyMachine([true, false, true], 2);