function nthChar(words){
 let wordArr = [];
  words.forEach((el, ind) => {
    wordArr.push(el[ind])
  })
  return wordArr.join('');
}