const sum = (...args) => {
  return args.reduce((total, num) => total + num, 0);
}

sum(0,1,2);
sum(1,2,3,4);
sum(5);
sum();