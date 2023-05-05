const PRIMES = [2, 3, 5, 7, 11, 13, 17, 19, 23];
function createRange(infLimit, supLimit) {
    let range = [];
    for (let num = infLimit; num <= supLimit; num++) {
        range.push(num);
    };
    return range;
}


function onlyHaveOne(arr) {
    return arr.every((number) => {
        return number === 1;
    });
}

function arraysAreEqual(baseNumbers, numbers) {
   return baseNumbers.toString() === numbers.toString();
}

function smallestCommons(arr) {
    arr.sort((a, b) => a - b);
    let baseNumbers = createRange(arr[0], arr[1]);
    let primeIndex = 0;
    let prime = PRIMES[0];
    let numbers = [];
    let mmc = 1; 

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

        if (arraysAreEqual(baseNumbers, numbers)) {
            primeIndex++;
            prime = PRIMES[primeIndex];
        }
        else {
            mmc *= prime;
            baseNumbers = numbers;
        }
   }
   return mmc;
}

smallestCommons([2, 10]);