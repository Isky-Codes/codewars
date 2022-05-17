function solution(number){
  let numArray = [];
  if(number > 0) {
    for(let i = 0; i < number; i++) {
      if(i % 3 === 0 || i % 5 === 0) {
        numArray.push(i);
      }
    }
  }else if(number < 0) {
    return 0;
  }
  return numArray.reduce((a,b) => a + b, 0);
}