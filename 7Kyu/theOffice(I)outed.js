function outed(meet, boss){
  let sum = 0;
  let size = Object.keys(meet).length
  for(let person in meet) {
    if(person === boss) {
      meet[person] *= 2
    }
    sum += meet[person]
  }
  sum = sum / size
  return sum <= 5 ? 'Get Out Now!' : 'Nice Work Champ!'
  
}