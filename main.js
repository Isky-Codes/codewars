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

// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

function digitize(n) {
  let numArray = n.toString().split('').map(element => parseInt(element));
  return numArray.reverse();
}

//I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.

function arrayPlusArray(arr1, arr2) {
  let arr1Sum = arr1.reduce((acc, current) => acc + current, 0)
  let arr2Sum = arr2.reduce((acc, current) => acc + current, 0)
  return arr1Sum + arr2Sum; 
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

//Make a program that filters a list of strings and returns a list with only your friends name in it. If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

function friend(friends){
  return friends.filter(element => element.length === 4);
}

//Simple enough this one - you will be given an array. The values in the array will either be numbers or strings, or a mix of both. You will not get an empty array, nor a sparse one. Your job is to return a single array that has first the numbers sorted in ascending order, followed by the strings sorted in alphabetic order. The values must maintain their original type. Note that numbers written as strings are strings and must be sorted with the other strings.

function dbSort(a){
  let filteredNumbers = a.filter(element => typeof element === 'number');
  let sortedNumbers = filteredNumbers.sort((a,b) => a - b);
  let filteredStrings = a.filter(element => typeof element === 'string');
  let sortedStrings = filteredStrings.sort((a,b) => a.localeCompare(b))
  return sortedNumbers.concat(sortedStrings);
}

//Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.
function sortByLength (array) {
  let sortedArr = array.sort((a,b) => a.length - b.length);
  return sortedArr;
}


// 6 Kyu //

//You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1.

function findEvenIndex(arr) {
  let equalIndex = -1
  arr.forEach((item, index) => {
    let leftSide = arr.slice(0,index).reduce((sum,item) => sum + item, 0)
    let rightSide = arr.slice(index + 1).reduce((sum, item) => sum + item, 0)
    if(leftSide == rightSide) {
      equalIndex = index;
    }
  })
  return equalIndex;
}