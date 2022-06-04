function tribonacci(signature,n){
  if(n === 0) { return []};
  let singleArray = []
  if(n === 1) {return singleArray = [signature[0]]}
  for(let i = 0; i <= n - 4; i++) {
    let sum = 0;
    sum = signature[i] + signature[i + 1] + signature[i + 2];
    signature.push(sum);
  }
  return signature;
}