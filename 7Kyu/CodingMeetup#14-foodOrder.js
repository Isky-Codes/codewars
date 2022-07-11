function orderFood(list) {
  let foodCount = {}
  list.forEach(el => {
    foodCount[el.meal] = (foodCount[el.meal] || 0) + 1
  })
  return foodCount;
}