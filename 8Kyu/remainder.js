function remainder(n, m){
  let arr = [n, m].sort((a, b) => a - b);
  return arr[1] % arr[0]
  
}