function dutyFree(normPrice, discount, hol){
  let dfCost = (discount/100) * normPrice;
  return Math.floor(hol / dfCost);
}