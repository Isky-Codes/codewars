// 8 Kyu //

//You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left. Considering these factors, write a function that tells you if it is possible to get to the pump or not. Function should return true (1 in Prolog, NASM and COBOL) if it is possible and false (0 in Prolog, NASM and COBOL) if not. The input values are always positive.

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    if(mpg * fuelLeft >= distanceToPump) {
      return true;
    }else {
      return false;
    }
  };


// Trolls are attacking your comment section! A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat. Your task is to write a function that takes a string and return a new string with all vowels removed.

function disemvowel(str) {
    return str.replace(/[aeiou]/gi, '')
}

//You will be given an array a and a value x. All you need to do is check whether the provided array contains the value. Array can contain numbers or strings. X can be either. Return true if the array contains the value, false if not.

function check(a, x) {
    if(a.includes(x, 0)) {
      return true;
    }else {
      return false;
    }
}

//Create a function with two arguments that will return an array of the first (n) multiples of (x). Assume both the given number and the number of times to count will be positive numbers greater than 0. Return the results as an array (or list in Python, Haskell or Elixir

function countBy(x, n) {
  let z = [];
  let i = 0;
  while (z.length < n) {
    z.push(i += x);
  }
  return z;
}


// 7 Kyu //

//In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

function filter_list(l) {
  return l.filter(function(v) {return typeof v == 'number'})
}

//Given an integral number, determine if it's a square number: In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.The tests will always use some integral number, so don't worry about that in dynamic typed languages.

var isSquare = function(n){
  let sqrRoot = Math.sqrt(n);
  if(sqrRoot === Math.floor(sqrRoot)) {
    return true;
  }else {
    return false;
  }
}


// 6 Kyu //

lalal