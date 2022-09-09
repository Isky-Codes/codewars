function dontGiveMeFive(start, end) {
  let arr = [];
  for(let i = start; i <= end; i++) {
    arr.push(i);
  }
  return arr.map(el => String(el)).filter(el => el.includes('5') === false).length
}