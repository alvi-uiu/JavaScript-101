function fib(n) {
  if (n == 0) {
    console.log(0);
    return;
  }

  if (n >= 1) {
    console.log(0);
    console.log(1);

    let last = 0;
    let secondLast = 1;

    for (let i = 2; i <= n; i++) {
      sum = last + secondLast;
      last = secondLast;
      secondLast = sum;
      console.log(sum);
    }
  }
}

fib(13);
