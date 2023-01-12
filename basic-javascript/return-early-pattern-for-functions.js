// Setup
function abTest(a, b) {
  // Only change code below this line
  if (a < 0 || b < 0) {
    return undefined;
  }
  
  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

abTest(2,2);
abTest(2,2);
abTest(-2,2);
abTest(2,-2);
abTest(2,8);
abTest(3,3);
abTest(0,0);
// Only change code above this line