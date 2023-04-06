function sumPrimes(superiorLimit) {
    let sumOfPrimeNumbers = 0;
    
    for (let number = 2; number <= superiorLimit; number++) {
        if (isPrime(number)) {
            sumOfPrimeNumbers += number;
        }
    }
    return sumOfPrimeNumbers;
}

function isPrime(number)  {
    for (let factor = 2; factor < number; factor++) {
        if (number % factor === 0) {
            return false;
        } 
    }
    return true;
}

sumPrimes(10);