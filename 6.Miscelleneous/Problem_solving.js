function pattern(n) {
  for (let i = 1; i <= n; i++) {
    let x = "";
    for (let j = n - 1; j >= i; j--) {
      x += " ";
    }

    for (let k = 1; k <= i; k++) {
      x += k;
    }

    for (let l = i - 1; l >= 1; l--) {
      x += l;
    }

    console.log(x);
  }
}

//way 2 :

function patternV2(n) {
  for (let i = 1; i <= n; i++) {
    let x = "";
    let spaces = n - i;

    for (let j = 1; j <= spaces; j++) {
      x += " ";
    }

    let counter = 1;

    for (let k = 1; k <= i; k++) {
      x += counter;
      counter++;
    }

    counter = i - 1;

    for (let l = 1; l < i; l++) {
      x += counter;
      counter--;
    }

    console.log(x);
  }
}

pattern(5);
