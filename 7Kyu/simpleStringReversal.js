function solve(st,a,b){
  let firstString = st.slice(0, a);
  let subStr = st.slice(a, b + 1).split('').reverse().join('');
  let endStr = st.slice(b + 1);
  return `${firstString}${subStr}${endStr}`
}
  