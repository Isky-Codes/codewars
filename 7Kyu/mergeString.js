function stringMerge(string1, string2, letter){
  let wordOne = string1.indexOf(letter)
  let wordTwo = string2.indexOf(letter)
  let firstWord = string1.slice(0, wordOne)
  let secondWord = string2.slice(wordTwo + 1)
  return `${firstWord}${letter}${secondWord}`
}