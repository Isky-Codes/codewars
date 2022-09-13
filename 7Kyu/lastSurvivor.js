function lastSurvivor(letters, coords) {
    let arrStr = letters.split('')
    for(let i = 0; i < coords.length; i++) {
      arrStr.splice(coords[i], 1)
    }
    return arrStr.join('')
  }