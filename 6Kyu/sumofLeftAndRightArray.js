//You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1.

function findEvenIndex(arr) {
    let equalIndex = -1
    arr.forEach((item, index) => {
      let leftSide = arr.slice(0,index).reduce((sum,item) => sum + item, 0)
      let rightSide = arr.slice(index + 1).reduce((sum, item) => sum + item, 0)
      if(leftSide == rightSide) {
        equalIndex = index;
      }
    })
    return equalIndex;
  }
  