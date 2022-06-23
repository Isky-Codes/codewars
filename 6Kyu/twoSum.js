function twoSum(numbers, target) {
  let indexSum = [];
  for(let i = 0; i < numbers.length; i++) {
    for(let j = i + 1; j < numbers.length; j++) {
      if(numbers[i] + numbers[j] === target) {
        indexSum.push(i);
        indexSum.push(j);
      }
    }
  }
  return indexSum;
}