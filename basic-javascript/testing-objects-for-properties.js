function checkObj(obj, checkProp) {
// Only change code below this line
 if(obj.hasOwnProperty(checkProp)){
    return obj[checkProp];
 } else {
    return "Not Found";
 };
}

checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "gift");
checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "pet");
checkObj({city: "Seattle"}, "city");
checkObj({city: "Seattle"}, "district");
checkObj({pet: "kitten", bed: "sleigh"}, "gift");
// Only change code above this line