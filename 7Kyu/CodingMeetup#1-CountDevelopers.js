function countDevelopers(list) {
  let developerCount = list.filter(el => el.continent === 'Europe' && el.language === 'JavaScript');
  return developerCount.length;
}