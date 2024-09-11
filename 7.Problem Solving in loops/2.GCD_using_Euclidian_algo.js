function GCD(a, b) {
  let gcd = 1;

  while (b != 0) {
    let r = a % b;
    a = b;
    b = r;
  }
  gcd = a;
  return gcd;
}

console.log(GCD(105, 36));
