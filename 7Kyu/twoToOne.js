function longest(s1, s2) {
  let newArray = [];
  let s1Sort = s1.split('').sort();
  let s2Sort = s2.split('').sort();
  for(let i = 0; i < s1Sort.length; i++) {
    if(s1Sort[i] !== s1Sort[i+1]) {
      newArray.push(s1Sort[i]);
    }
  }
  for(let i = 0; i < s2Sort.length; i++) {
    if(newArray.includes(s2[i]) === false) {
      newArray.push(s2[i]);
    }
  }
  return newArray.sort().join('');
}