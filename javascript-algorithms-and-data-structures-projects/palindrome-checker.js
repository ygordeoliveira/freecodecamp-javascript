function palindrome(str) {
    const pattern = /[^0-9a-z]/g;

    str = str.toLowerCase().replace(pattern, "");

    const reversedStr = str.split("").reverse().join("");

    return str === reversedStr;
}

palindrome("five|\_/|four");