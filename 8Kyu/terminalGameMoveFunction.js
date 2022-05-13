function move (position, roll) {
  let newPosition = position + (roll * 2);
  return newPosition;
}