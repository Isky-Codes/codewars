function evenChars(string) {
  let stringArr = []
  if(string.length < 2 || string.length > 100) {
    return 'invalid string'
  }else {

    string.split('').forEach((el, ind) => {
      if(ind % 2 !== 0) {
        stringArr.push(el)
      }
    })
  }
  console.log(stringArr)
  return stringArr;
}