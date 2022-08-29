function addLength(str) {
  return strArr = str.split(' ').map(el => el.concat(' ', `${el.length}`))
}
