function findNumberN(n) {
  if (n === 0 || n === 1) {
    return n;
  } else {
    return findNumberN(n - 1) + findNumberN(n - 2);
  }
}

console.log(findNumberN(13));
