function avg(a){
  return a.reduce((acc, curr) => acc + curr, 0) / a.length
}