//Pattern 2 :

function pattern2(num) {
  for (let row = 1; row <= num; row++) {
    let x = "";
    for (col = 1; col <= row; col++) {
      x += "*";
    }
    console.log(x);
  }
}
