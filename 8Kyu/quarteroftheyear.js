//Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.
const quarterOf = (month) => {
    if(month >= 1 && month <= 3) {
      return 1
    }else if(month >= 4 && month <= 6) {
      return 2
    }else if(month >= 7 && month <= 9) {
      return 3
    }else {
      return 4
    }  
  }