function binaryToDecimalConversion(bin) {
    let dec = 0;
    
    for (let i = bin.length - 1; i >= 0 ; i--) {
        let idxBin = bin.length - 1 - i;
            if (bin[i] === "1") {
                dec += bin[i] * 2 ** idxBin;
            }
    }
    return dec;
}

function binaryAgent(bin) {
    let bins = bin.split(" ");
    let decimals = [];
    
    for (let i = 0; i < bins.length; i++) {
      decimals.push(binaryToDecimalConversion(bins[i]));
    }
 
    let words = decimals.map(int => String.fromCharCode(int));
    
    return words.join("");
}
 
binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");