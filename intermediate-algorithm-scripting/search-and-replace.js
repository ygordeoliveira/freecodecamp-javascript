function myReplace(str, before, after) {
    let theFirstLetter = before[0] === before[0].toUpperCase();
   
    if (theFirstLetter) {
        after = after[0].toUpperCase() + after.slice(1);
    } else {
        after = after[0].toLowerCase() + after.slice(1);
    }
    return str.replace(before, after);
}
   
myReplace("Let us go to the store", "store", "mall");