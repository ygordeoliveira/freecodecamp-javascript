function createRange(infLimit, supLimit) {
    let range = [];

    for (let num = infLimit; num <= supLimit; num++) {
        range.push(num);
    };
    return range;
}

function* primes() {
    const primes = [2, 3, 5, 7, 11, 13, 17, 19, 21, 23, 29, 31, 37];

    for (let currentPrime of primes) {
        yield currentPrime;
    };
    return 41;
}

function onlyHaveOne(arr) {
    return arr.every((number) => {
        return number === 1;
    });
}

function smallestCommons(arr) {
    arr.sort((a, b) => a - b);

    let baseNumbers = createRange(arr[0], arr[1]);
  
    let numbers = [];
 
    let mmc = 1; 
    let getPrime = primes();
    let prime = getPrime.next().value;

    while (true) {
        if (onlyHaveOne(baseNumbers)) {
            break;
        }

    numbers = baseNumbers.map(number => {
        if (number % prime === 0) {
            return number / prime;
        }
        return number;
    });

    if (JSON.stringify(baseNumbers) === JSON.stringify(numbers)) {
        prime = getPrime.next().value;
    }
    else {
        mmc *= prime;
        baseNumbers = numbers;
    }
  }
  return mmc;
}

smallestCommons([1, 5]);