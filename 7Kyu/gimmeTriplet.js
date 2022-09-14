function gimme (triplet) {
  let sortedArr = [...triplet].sort((a, b) => a - b)
  return triplet.indexOf(sortedArr[1])
}
