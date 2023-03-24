function fearNotLetter(str) {
    let firstLetterCode = str[0].charCodeAt();
  
    for (let i = 1; i < str.length; i++) {
        let letterCode = firstLetterCode + i;
      
        if (letterCode != str[i].charCodeAt()) {
            return String.fromCharCode(letterCode);
        }
    }       
}
  
fearNotLetter("abce");