/*There are exactly ten ways of selecting three from five, 12345:

123, 124, 125, 134, 135, 145, 234, 235, 245, and 345

In combinatorics, we use the notation, 5C3 = 10.

In general,

nCr =	
n!
r!(n−r)!
,where r ≤ n, n! = n×(n−1)×...×3×2×1, and 0! = 1.
It is not until n = 23, that a value exceeds one-million: 23C10 = 1144066.

How many, not necessarily distinct, values of  nCr, for 1 ≤ n ≤ 100, are greater than one-million?*/

// generate factorials from (1 to 100)
// calculate C
// count anything greater than 1000000

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
var arr = [];
for(var a = 0; a <= 100; a++){
	arr.push(factorial(a));
}
var c, count = 0;
for(var n = 1; n <= 100; n++){
	for(var r = 1; r <= n; r++){
		c = arr[n].divide((arr[r].multiply(arr[n-r])));
		if(c.compare(1000000) === 1){
			count++;
		}
	}
}
console.log(count);
