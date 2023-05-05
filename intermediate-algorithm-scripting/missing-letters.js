let alphabet = "abcdefghijklmnopqrstuvwxyz";

function fearNotLetter(str) {
    let previousIndex = alphabet.indexOf(str[0]);
    let counter = 1;

    while (counter < str.length) {
        let currentIndex = alphabet.indexOf(str[counter]);
    
        let indexDifference = currentIndex - previousIndex;
    
        if (indexDifference === 1) {
            previousIndex++;
        } else if (indexDifference > 1) {
            return alphabet[previousIndex + 1];
        }
        counter++;
    }
}

fearNotLetter("abce");