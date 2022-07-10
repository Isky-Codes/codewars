function isRubyComing(list) {
  let rubyCount = 0;
  list.forEach(el => {
    if(el.language === 'Ruby') {
      rubyCount += 1
    }
  });
  if(rubyCount > 0) {
    return true;
  }else {
    return false;
  }
}