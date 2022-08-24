function mergeArrays(arr1, arr2) {
  if(arr1.length === 0 && arr2.length === 0) {
    return [];
  }else {
    let array = arr1.concat(arr2);
    let uniqueArray = [...new Set(array)];
    return uniqueArray.sort((a, b) => a - b);
  }
}