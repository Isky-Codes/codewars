function sortByValueAndIndex(array) {
  return array
    .map((x, i) => [x, x * i + x])
    .sort((a, b) => a[1] - b[1])
    .map((a) => a[0])
}