function pipeFix(numbers){
  let newArr = [];
  for(let i = numbers[0]; i <= numbers[numbers.length - 1]; i++) {
    newArr.push(i);
  }
  return newArr;
}