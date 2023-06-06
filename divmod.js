function divmod(end, sor) {
  const tmp = Math.floor(end / sor);
  return [tmp, end - tmp * sor];
}
