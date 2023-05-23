const ROMAN_ARABIC_MAPPER = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
}

function convertToRoman(num) {
    let romanNumber = "";

    for (let romanCode in ROMAN_ARABIC_MAPPER) {
        while (num >= ROMAN_ARABIC_MAPPER[romanCode]) {
            romanNumber += romanCode;
            num -= ROMAN_ARABIC_MAPPER[romanCode];
        }
    }
    return romanNumber;
};

convertToRoman(3999);