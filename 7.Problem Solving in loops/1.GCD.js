function GCD(a, b) {
  let c = Math.min(a, b);
  let GCD = 1; // if both are prime
  while (true) {
    if (a % c == 0 && b % c == 0) {
      GCD = c;
      break;
    }
    c--;
  }

  return GCD;
}

//way 2 :

function GCDv2(a, b) {
  let gcd = 1; // if both are prime

  for (let i = Math.min(a, b); i >= 2; i--) {
    if (a % i == 0 && b % i == 0) {
      gcd = i;
      break;
    }
  }
  return gcd;
}

console.log(GCDv2(24, 28));
