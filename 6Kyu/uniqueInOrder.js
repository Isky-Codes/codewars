var uniqueInOrder = function(iterable){
  if(typeof iterable === 'string') {
    iterable = iterable.split('');
  }
  
  return iterable.filter((el, ind, arr) => el !== arr[ind + 1])

  
}