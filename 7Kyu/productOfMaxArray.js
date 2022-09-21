function maxProduct(numbers, size){
  let numSort = numbers.sort((a, b) => b - a).slice(0, size);
  return numSort.reduce((prev, curr) => prev * curr, 1)
  
}