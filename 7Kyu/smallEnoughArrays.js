function smallEnough(a, limit){
  let truthCount = 0;
  for(let i = 0; i < a.length; i++) {
    if(a[i] <= limit) {
      ++truthCount;
    }
  }
  return truthCount === a.length;
}