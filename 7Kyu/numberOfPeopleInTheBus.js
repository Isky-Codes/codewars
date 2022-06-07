var number = function(busStops){
  for(let i = 0; i < busStops.length; i++) {
    busStops[i] = busStops[i][0] - busStops[i][1]
  }
  return Math.abs(busStops.reduce((a,b) => a + b, 0));
}