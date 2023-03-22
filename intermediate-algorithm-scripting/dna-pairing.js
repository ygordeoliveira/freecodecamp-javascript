function pairElement(str) {
    let arrOfPairs = [];
  
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "A") {
            arrOfPairs.push([str[i], "T"]);
        } 
        else if (str[i] === "T") {
            arrOfPairs.push([str[i], "A"]);
        } 
        else if (str[i] === "C") {
            arrOfPairs.push([str[i], "G"]);
        } 
        else if (str[i] === "G") {
            arrOfPairs.push([str[i], "C"]);
        }
    }
    return arrOfPairs;
}

pairElement("ATCGA");