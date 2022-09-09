function dataReverse(data) {
  let iter = data.length / 8;
  let arr = [];
  for(let i = 0; i < data.length; i += 8) {
      arr.push(data.slice(i, i + 8))
  }
  let arrEd = arr.reverse().map(el => el.join('')).join('').split('').map(el => Number(el))
  return arrEd;
  
}