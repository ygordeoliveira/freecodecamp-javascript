function uniteUnique(...arrOfNumbers) {
    let numbersUnique = [];
 
    for (let arr of arrOfNumbers) {
        numbersUnique.push(...arr);
    }
    return [...new Set(numbersUnique)];
}
 
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);