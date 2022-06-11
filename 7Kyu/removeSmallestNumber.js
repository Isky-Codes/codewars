function removeSmallest(numbers) {
  if(numbers.length === 0 || numbers.length === 1) {
    return [];
  }else {
    let smallestNum = Math.min(...numbers);
    let smallestIndex = numbers.indexOf(smallestNum);
    
    return numbers.slice(0, smallestIndex).concat(numbers.slice(smallestIndex + 1)); 
  }  
}