function adjacentElementsProduct(array) {
  let prodNums = [];
  for(let i = 0; i < array.length - 1; i++) {
    prodNums.push(array[i] * array[i+1])
  }
  return Math.max(...prodNums)
}