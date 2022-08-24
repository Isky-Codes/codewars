function multipleOfIndex(array) {
    let newArr = [];
    for(let i = 0; i < array.length; i++) {
      if(array[i] % i === 0) {
        newArr.push(array[i]);
      }
    }
    return newArr;
  }