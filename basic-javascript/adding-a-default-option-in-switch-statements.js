function switchOfStuff(val) {
// Only change code below this line
 let answer = "";

 switch (val) {
   case "a":
    answer = "apple";
    break;
   case "b":
    answer = "bird";
    break;
   case "c":
    answer = "cat";
    break;
   default:
    answer = "stuff"
 }
  return answer;
}

switchOfStuff("a");
switchOfStuff("b");
switchOfStuff("c");
switchOfStuff("d");
switchOfStuff(4);
// Only change code above this line