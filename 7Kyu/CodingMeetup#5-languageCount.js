function countLanguages(list) {
  const counts = {};
  list.forEach((el) => {
    counts[el.language] = (counts[el.language] || 0) + 1
  })
  return counts;
}