function maxTriSum(numbers){
  let set = new Set(numbers.sort((a, b) => b - a));
  let arr = Array.from(set);
  return arr[0] + arr[1] + arr[2]
}