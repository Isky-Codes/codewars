function arrMultiply(arr){
   return String(arr.reduce((acc, curr) => acc * curr, 1));
}