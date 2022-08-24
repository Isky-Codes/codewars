function solve(s){
  let upperNum = 0;
  let lowerNum = 0;
  let stringLowerCase = s.toLowerCase().split('')
  let string = s.split('')
  for(let i = 0; i < string.length; i++) {
    if(stringLowerCase[i] === string[i]) {
      lowerNum += 1;
    }else if(stringLowerCase[i] !== string[i]) {
      upperNum += 1;
    }
  }
  if(upperNum > lowerNum) {
    return s.toUpperCase()
  }else {
    return s.toLowerCase()
  }
}