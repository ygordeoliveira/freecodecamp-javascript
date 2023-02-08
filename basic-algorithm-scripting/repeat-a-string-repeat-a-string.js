function repeatStringNumTimes(str, num) {
  let repetitions = "";

  for (let i = 0; i < num; i++) {
     repetitions += str;
  }
  return repetitions;
}

repeatStringNumTimes("abc", 3);