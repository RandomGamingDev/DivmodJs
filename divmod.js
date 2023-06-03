function divmod(end, sor) {
  let toReturn = [Math.floor(end / sor), null];
  toReturn[1] = end - toReturn[0] * sor;
  return toReturn;
}
