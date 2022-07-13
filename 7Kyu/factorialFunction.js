function factorial(n) {
  let factorial = 1;
  if(n < 0 || n > 12) {
    throw new RangeError()
  }else {
    for(let i = n; i >= 1; i--) {
      factorial *= i
    }
  }
  return factorial;

}