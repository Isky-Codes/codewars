//The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

function count (string) {  
    let countsString = {};
    let stringArr = string.split('');
    if(!stringArr) {
      return countsString = {}
    }else {
      stringArr.forEach(x => countsString[x] = (countsString[x] || 0) + 1);
    }
    return countsString;
  
  }