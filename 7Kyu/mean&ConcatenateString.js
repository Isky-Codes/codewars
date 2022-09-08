function mean(lst){
  let arr = [];
  let arrStr = lst.filter(el => el.match(/[a-z]/))
  let arrNum = lst.filter(el => el.match(/[0-9]/)).map(el => Number(el))
  arr[0] = arrNum.reduce((prev, curr) => prev + curr, 0) / (arrNum.length)
  arr[1] = arrStr.join('')
  return arr;
}