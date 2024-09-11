function sum(dgt) {
  let sum = 0;
  while (dgt) {
    let i = dgt % 10;
    sum += i;
    dgt = Math.floor(dgt / 10);
  }
  return sum;
}

console.log(sum(12));
