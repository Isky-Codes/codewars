function largestPairSum (numbers) {
  let numSort = numbers.sort((a, b) => b - a)
  return numSort[0] + numSort[1];
}