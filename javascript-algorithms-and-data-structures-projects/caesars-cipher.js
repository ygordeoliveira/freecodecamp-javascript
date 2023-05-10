const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function rot13(str) {
    let rotateFactor = 13;
    let strDecoded = "";
    
    for (let char of str) {
        let charDecoded = ALPHABET.indexOf(char) === -1 ? char : ALPHABET.at(ALPHABET.indexOf(char) - rotateFactor);
        strDecoded += charDecoded;
    }
    return strDecoded;
}

rot13("SERR PBQR PNZC");