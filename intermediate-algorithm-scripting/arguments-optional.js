function isNumber(num) {
    return Number.isInteger(num);
}

function addTogether() {
   const [firstArgument, secondArgument] = arguments;
   
   if (isNumber(firstArgument) && isNumber(secondArgument)) {
        return firstArgument + secondArgument;
   } 
   else if (arguments.length === 1 && isNumber(firstArgument)) {
        return function (newArg) {
            if (isNumber(newArg)) {
                return firstArgument + newArg;
            } 
       } 
    }
    return undefined;
}

addTogether(2, 3);