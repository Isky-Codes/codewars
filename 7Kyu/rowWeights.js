function rowWeights(array){
  let team1 = [];
  let team2 = [];
  team1.push(array[0]);
  for(let i = 1; i < array.length; i++) {
    if(i % 2 === 0) {
      team1.push(array[i]);
    }else if(i % 2 !== 0) {
      team2.push(array[i]);
    }
  }
  let weightOne = team1.reduce((a,b) => a + b, 0);
  let weightTwo = team2.reduce((a,b) => a + b, 0);
  let weightArray = [weightOne, weightTwo];
  return weightArray;
}