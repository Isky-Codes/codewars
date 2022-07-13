const binaryArrayToNumber = arr => {
  let numbers = Number(arr.map(el => String(el)).join(""))
  return parseInt(numbers, 2);
};