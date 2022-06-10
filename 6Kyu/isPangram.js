function isPangram(string){
  let lowerStr = string.toLowerCase();
  for(let char of 'abcdefghijklmnopqrstuvwxyz') {
    if(!lowerStr.includes(char)) {
      return false;
    }
  }
  return true;
}