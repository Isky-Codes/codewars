// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

function digitize(n) {
    let numArray = n.toString().split('').map(element => parseInt(element));
    return numArray.reverse();
  }
  