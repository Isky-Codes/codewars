function reverseWords(str) {
  let strArr = str.split(' ');
  let newArr = [];
  strArr.map(element => {
    newArr.push(element.split('').reverse().join(''))
  });
  return newArr.join(' ');
}