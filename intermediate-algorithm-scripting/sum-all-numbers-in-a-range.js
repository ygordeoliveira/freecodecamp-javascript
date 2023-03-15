function sumAll(arr) {
    arr.sort(function(a,b) {return a - b})
    const [initialNumber, finalNumber] = arr;
    let sumOfNumbers = 0;
  
    for (let i = initialNumber; i <= finalNumber; i++) {
        sumOfNumbers += i; 
    }
    return sumOfNumbers;
  }
  
  sumAll([1, 4]);