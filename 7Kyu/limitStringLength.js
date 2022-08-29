function solution(string,limit){
  let stringSlice = string.slice(0, limit);
  if(stringSlice.length < string.length) {
    return `${stringSlice}...`
  }else {
    return string
  }
}