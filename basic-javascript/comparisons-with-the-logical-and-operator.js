function testLogicalAnd(val) {
  // Only change code below this line
  if (val <= 50 && val >= 25) {
      return "Yes";
    }
    return "No";
  }
  
testLogicalAnd(0);
testLogicalAnd(24);
testLogicalAnd(25);
testLogicalAnd(30);
testLogicalAnd(50);
testLogicalAnd(51);
testLogicalAnd(75);
testLogicalAnd(80);