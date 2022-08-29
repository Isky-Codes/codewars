function stringChunk(str, n) {
  let strArr = [];
  for(let i = 0; n > 0 && i < str.length; i += n) {
    strArr.push(str.slice(i, i + n ))
  }
  return strArr;
}
