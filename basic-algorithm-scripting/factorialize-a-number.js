function factorialize(num) {
  let result = 1;

  for (let i = num; i > 0; i--) {
    result *= i;
  }
  return result;
}

factorialize(5);