function findSenior(list) {
  const oldest = list.reduce((acc, age) => acc = acc > age.age ? acc : age.age, 0);
  return list.filter(el => el.age === oldest)
}