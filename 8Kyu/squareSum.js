function squareSum(numbers){
    let squareArray = numbers.map(el => el * el);
    return squareArray.reduce((acc, current) => acc + current, 0);
  }