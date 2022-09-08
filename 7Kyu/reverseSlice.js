function reverseSlice(str) {
  let arr = []
  let reverseStr = str.split('').reverse().join('')
  for(let i = 0; i < str.length; i++) {
    arr.push(reverseStr.slice(i))
  }
  return arr
}