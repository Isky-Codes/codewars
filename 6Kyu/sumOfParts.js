function partsSums(ls) {
    let sumsArr = [];
    const arrLength = ls.length;
    let n = 0;
    while(n < arrLength + 1) {
      sumsArr.push(ls.reduce((acc, current) => acc + current, 0));
      ls.shift()
      n++
    }
    return sumsArr;
  }