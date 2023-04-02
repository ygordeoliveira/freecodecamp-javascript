function sumFibs(num) {
    let firstElement = 0;
    let secondElement = 1;
    let fibonacci = [firstElement, secondElement];
  
    while (true) {
        let thirdElement = firstElement + secondElement;
  
        if (thirdElement > num) {
            break;
        }
  
        fibonacci.push(thirdElement);
  
        firstElement = secondElement;
        secondElement = thirdElement;
    }
  
    return fibonacci.reduce((acumulator, valorAtual) => {
        if (valorAtual % 2 === 1) {
            return acumulator + valorAtual;
        } 
        return acumulator;
    });
}
  
sumFibs(4);