function nbDig(n, d) {
    let nArray = [];
    for(let i = 0; i <= n ; i++) {
      nArray.push(i);
    }
    let totalOfd = 0;
    let nArraySquared = nArray.map(el => Math.pow(el, 2))
                              .map(el => String(el))
                              .filter(el => el.includes(d))
                              .join('')
                              .split('')
                              .forEach(el => {
                                if(el === String(d)) {
                                  ++totalOfd;
                                }
                              })
    return totalOfd;
    
  }