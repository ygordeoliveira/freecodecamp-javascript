const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  // Only change code below this line
  if (strokes === 1) {
    return "Hole-in-one!"
  } else if (strokes <= par - 2) {
    return "Eagle";
  } else if (strokes === par -1) {
    return  "Birdie";
  } else if (strokes === par) {
    return "Par";
  } else if (strokes === par + 1) {
    return "Bogey";
  } else if (strokes === par + 2) {
    return "Double Bogey";
  } else {
    return "Go Home!";
  };
}

golfScore(4, 1);
golfScore(4, 2);
golfScore(5, 2);
golfScore(4, 3);
golfScore(4, 4);
golfScore(1, 1);
golfScore(5, 5);
golfScore(4, 5);
golfScore(4, 6);
golfScore(4, 7);
golfScore(5, 9);
// Only change code above this line