function sumOfMinimums(arr) {
  let minNums = [];
  arr.forEach(arr => arr.sort((a, b) => a - b))
  arr.forEach(arr => minNums.push(arr[0]))
  return minNums.reduce((a, b) => a + b, 0)
}