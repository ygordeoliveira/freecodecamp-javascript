const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function cipherDecoderGenerator(rotateFactor) {
    if (!Number.isInteger(rotateFactor)) {
        throw Error ("Número negativo, por favor passe um número positivo");
    } 
    return function cipheROT(str) {
        let strDecoded = "";
    
        for (let char of str) {
            let charDecoded = ALPHABET.indexOf(char) === -1 ? char : ALPHABET.at(ALPHABET.indexOf(char) - rotateFactor);
            strDecoded += charDecoded;
        }
        return strDecoded;
    }
}

const rot13 = cipherDecoderGenerator(13);

rot13("PROGRAMMING IS VERY GOOD");