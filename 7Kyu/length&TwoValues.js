function alternate(n, firstValue, secondValue){
  let arr = []
  for(let i = 0; i < n; i++) {
    arr.push(firstValue)
    arr.push(secondValue)
  }
  return arr.slice(0, n)
}