function rot13(str) {
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    let strDecoded = "";

    for (let i = 0; i < str.length; i++) {
        if (alphabet.indexOf(str[i]) === -1) {
            strDecoded += str[i];
        } else {
            strDecoded += alphabet.at(alphabet.indexOf(str[i]) - 13);
        }
    }
    return strDecoded;
}

rot13("SERR PBQR PNZC");