function maxMultiple(divisor, bound){
  let arr = [];
  for(let i = divisor; i <= bound; i++) {
    arr.push(i);
  }
  let arrFilter = arr.filter((el) => el % divisor === 0 && el > 0 && el <= bound)
  return arrFilter[arrFilter.length - 1];
}