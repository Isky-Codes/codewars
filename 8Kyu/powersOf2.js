function powersOfTwo(n){
    let exponentList = [];
   for(let i = 0; i < n + 1; i++) {
     exponentList.push(Math.pow(2, i));
   }
   return exponentList;
 }