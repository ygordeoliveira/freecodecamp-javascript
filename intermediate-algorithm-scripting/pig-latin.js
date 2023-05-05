function translatePigLatin(str) {
    let pattern = /^[^aeiou]+/;
    let patternCheck = str.match(pattern);

    let consonants = "";

    if (patternCheck) {
        consonants = str.replace(patternCheck[0], "") + patternCheck[0] + "ay";
    } else {
        return str + "way";
    }
    return consonants;
}

translatePigLatin("california");
