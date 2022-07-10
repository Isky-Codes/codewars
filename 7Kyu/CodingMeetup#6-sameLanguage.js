function isSameLanguage(list) {
  let countLang = [];
  list.forEach(el => {
    countLang.push(el.language);
  });
  const result = countLang.every(el => {
    if(el === countLang[0]) {
      return true;
    }
  });
  
  return result;
}