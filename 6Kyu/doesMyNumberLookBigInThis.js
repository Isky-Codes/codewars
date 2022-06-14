function narcissistic(value) {
  let valueArr = String(value).split('').map(el => Number(el));
  let sumOfArr = valueArr.map(el => Math.pow(el, valueArr.length)).reduce((acc, current) => acc + current, 0);
  if(sumOfArr === value) {
    return true;
  }else {
    return false;
  }
}
