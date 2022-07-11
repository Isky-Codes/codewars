function getAverageAge(list) {
  let agesArr = []
  list.forEach(el => agesArr.push(el.age));
  return Math.round((agesArr.reduce((acc, current) => acc + current, 0)) / agesArr.length);
}