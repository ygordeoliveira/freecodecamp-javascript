function sumPrimes(num) {
    let numbersPrimes = [];
    
    for (let numero = 2; numero <= num; numero++) {
        if (verificationOfPrimeNumbers(numero)) {
            numbersPrimes.push(numero);
        }
    }
    let sumOfNumbersPrimes = numbersPrimes.reduce((acumulador, valorAtual) => {
        return acumulador + valorAtual;
    });
    return sumOfNumbersPrimes;
}

function verificationOfPrimeNumbers(numero)  {
    for (let divisor = 2; divisor < numero; divisor++) {
        if (numero % divisor === 0) {
             return false;
        } 
    }
    return true;
}

sumPrimes(10);