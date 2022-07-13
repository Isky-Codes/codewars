// return the two oldest/oldest ages within the array of ages passed in.
function twoOldestAges(ages){
  let oldestAge = []
  let sorted = ages.sort((a, b) => b - a);
  console.log(sorted);
  oldestAge.push(sorted[1])
  oldestAge.push(sorted[0])
  return oldestAge;
  
}
