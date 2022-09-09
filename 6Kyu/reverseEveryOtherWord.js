function reverse(str){
  if(str.length === 0) {
    return ''
  }else {
      let strArr = str.split(' ').map(el => el.split('')).map((el, i) => {
    if(i % 2 !== 0) {
      return el.reverse().join('')
    }else {
      return el.join('')
    }
  })
  return strArr.join(' ').trim()
  }
}