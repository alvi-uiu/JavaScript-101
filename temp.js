function GCD(a, b) {
  let gcd = 1;

  for (let i = Math.min(a, b); i >= 2; i--) {
    if (a % i == 0 && b % i == 0) {
      gcd = i;
      break;
    }
  }

  return gcd;
}

console.log(GCD(24, 28));
