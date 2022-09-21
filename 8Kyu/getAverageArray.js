function getAverage(marks){
  return Math.floor(marks.reduce((prev, curr) => prev + curr, 0) / marks.length)
}