let array = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 30, 32, 31, 29, 99, 97, 96, 95, 92, 101,
];
function findNumberPrime(array) {
  let newArray = [];

  array.forEach((value) => {
    if (value > 1) {
      let count = 0;
      for (i = 2; i <= Math.sqrt(value); i++) {
        if (value % i === 0) {
          count++;
        }
      }
      if (count === 0) {
        return newArray.push(value);
      }
    }
  });
  return newArray.sort((a, b) => a - b);
}

console.log(findNumberPrime(array));
