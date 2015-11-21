/*n! means n × (n − 1) × ... × 3 × 2 × 1

For example, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800,
and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.

Find the sum of the digits in the number 100!*/

var f = [new BigNumber("1"), new BigNumber("1")];
var i = 2;

function factorial(n) {
    if (typeof f[n] != 'undefined')
        return f[n];
    var result = f[i - 1];
    while (i <= n) {
        f[i] = result = result.multiply(i.toString());
        i++;
    }
    return result;
}
var arr = factorial(100)._d;
var sum = 0;
for (idx in arr) {
    sum += arr[idx];
}
console.log(sum)