function letterCount(s){
    const count = {};
    const sArr = s.split('');
    sArr.forEach(el => {
      count[el] = (count[el] || 0) + 1
    })
    return count;
  }