function modifyMultiply (str,loc,num) {
  let chosenWord = `${str.split(' ').slice(loc, loc + 1).join('')}-`.repeat(num)
  return chosenWord.slice(0, chosenWord.length - 1)

} 