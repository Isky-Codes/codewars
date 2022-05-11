//Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.
function flattenAndSort(array) {
    var newArray = [];
    for(var i =0;i<array.length;i++)
    {
      for(var j=0;j<array[i].length;j++)
      {
        newArray.push(array[i][j]);
      }
    }
      
    return newArray.sort((a,b) => a-b);
  }