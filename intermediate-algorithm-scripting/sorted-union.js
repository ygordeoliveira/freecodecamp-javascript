function uniteUnique(...arrOfNumbers) {
    let numbers = [];
 
    for (let arr of arrOfNumbers) {
        for (let elements of arr) {
            if (!numbers.includes(elements)) {
                numbers.push(elements);
            }
        }
    }
    return numbers;
}
 
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);