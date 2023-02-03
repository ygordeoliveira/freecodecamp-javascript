function htmlColorNames(arr) {
  // Only change code below this line
  const initialIndex = 0;
  const numberOfElementsExcluded = 2;

  arr.splice(initialIndex, numberOfElementsExcluded, "DarkSalmon", "BlanchedAlmond");
  // Only change code above this line
  return arr;
}

htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']);