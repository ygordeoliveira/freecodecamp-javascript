// Setup
function testNotEqual(val) {
  if (val != 99) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testNotEqual(99);
testNotEqual("99");
testNotEqual(12);
testNotEqual("12");
testNotEqual("bob");