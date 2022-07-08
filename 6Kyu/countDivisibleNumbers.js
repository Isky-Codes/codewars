function divisibleCount(x, y, k) {
    while(x % k) {
      x++;
    }
  
    return parseInt(((y - x) / k) + 1);
  }