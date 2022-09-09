function divCon(x){
  let xNums = x.filter(el => typeof el === 'number').reduce((acc, curr) => acc + curr, 0)
  let xStr = x.filter(el => typeof el === 'string').map(el => Number(el)).reduce((acc, curr) => acc + curr, 0)
  return xNums - xStr
}