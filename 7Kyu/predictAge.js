function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
  let ageArr = [age1, age2, age3, age4, age5, age6, age7, age8];
  return ageArr = Math.floor((Math.sqrt(ageArr.map(age => age * age).reduce((a, b) => a + b, 0))) / 2);
}