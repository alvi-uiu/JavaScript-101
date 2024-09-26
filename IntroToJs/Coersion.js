console.log(7 - 9);
console.log(8 - null);
console.log(5 - undefined);
console.log(1 - "777");
console.log(1 - "fsdfs78fdf99");
console.log(1 - "0xa");

/*



In JavaScript, when you subtract a string from a number, JavaScript tries to convert the string to a number before performing the operation.

Here's what happens with `console.log(1 - "0xa")`:

1. **"0xa"** is a string representation of a hexadecimal number (base 16). In hexadecimal, `0xa` represents the decimal number `10`.
2. JavaScript converts the string `"0xa"` to its equivalent numeric value, which is `10`.
3. The subtraction operation is then performed: `1 - 10`.

So, `1 - 10` results in `-9`.

Thus, `console.log(1 - "0xa")` will print `-9`.




*/
