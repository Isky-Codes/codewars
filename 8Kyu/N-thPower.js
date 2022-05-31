function index(array, n){
    if(typeof array[n] === 'undefined') {
      return -1;
    }else {
      return Math.pow(array[n], n);
    }
  }