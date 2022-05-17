function createPhoneNumber(numbers){
  let firstThree = String(numbers.slice(0,3)).replace(/,/g, '')
  let secondThree = String(numbers.slice(3,6)).replace(/,/g, '')
  let lastFour = String(numbers.slice(6, 10)).replace(/,/g, '')
  return `(${firstThree}) ${secondThree}-${lastFour}`;
}