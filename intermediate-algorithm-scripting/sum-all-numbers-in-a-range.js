function sumAll(arr) {
    let sum = 0; 
    arr.sort((a, b) => a - b);
  
    const [start, end] = arr;

    for (let i = start; i <= end; i++) {
        sum += i;
    }
    return sum;
}

sumAll([1, 4]);