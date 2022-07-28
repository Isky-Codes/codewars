function minValue(values){
  values.sort((a, b) => a - b);
  let uniqueVal = Array.from([...new Set(values)]);
  return Number(uniqueVal.join(''));
}