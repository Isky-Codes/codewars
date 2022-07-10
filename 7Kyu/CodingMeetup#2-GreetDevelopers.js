function greetDevelopers(list) {
  let newList = list.map(el =>({...el, greeting: `Hi ${el.firstName}, what do you like the most about ${el.language}?`}))
  return newList;
}