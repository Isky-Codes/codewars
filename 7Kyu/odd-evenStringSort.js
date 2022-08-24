function sortMyString(S) {
  let even = [];
  let odd = [];
  S.split('').forEach((el, ind, arr) => {
    if(ind % 2 === 0) {
      even.push(el)
    }else {
      odd.push(el)
    }
  })
  return even.join('') + ' ' + odd.join('')
  
}