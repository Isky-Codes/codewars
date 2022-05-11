//write me a function stringy that takes a size and returns a string of alternating '1s' and '0s'.
function stringy(size) {
    let str = '';
    for(let i = 1; i <= size; i++) {
      str += i % 2;
    }
    return str;
  }