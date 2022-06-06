function maskify(cc) {
    let ccArr = cc.split('');
    for(let i = 0; i < ccArr.length - 4; i++) {
      ccArr[i] = '#';
    }
    return ccArr.join('');
  }
  