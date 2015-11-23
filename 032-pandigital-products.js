/*We shall say that an n-digit number is pandigital if it makes use of all the digits 1 to n exactly once; for example, the 5-digit number, 15234, is 1 through 5 pandigital.

The product 7254 is unusual, as the identity, 39 × 186 = 7254, containing multiplicand, multiplier, and product is 1 through 9 pandigital.

Find the sum of all products whose multiplicand/multiplier/product identity can be written as a 1 through 9 pandigital.

HINT: Some products can be obtained in more than one way so be sure to only include it once in your sum.*/

function isPandigital(a, b, c) {
    var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var test = String(a) + String(b) + String(c);
    test = test.split("").sort();
    if (test.length > 9) {
        return false;
    }
    var i = numbers.length;
    if ((i === 0) || (i !== test.length)) {
        return false;
    }
    while (i--) {
        if (numbers[i] !== test[i]) {
            return false;
        }
    }
    return true;
}

var arr = [];
for (var i = 2; i < 99; i++) {
    for (var j = 2; j < 9999; j++) {
        var prod = i * j;
        if (prod % 10 !== 0) {
            if (isPandigital(i, j, prod)) {
                arr.push(prod);
            }
        }
    }
}
var uniq = arr.reduce(function(a, b) {
    if (a.indexOf(b) < 0) a.push(b);
    return a;
}, []);
var sum = 0;
for (var k = 0; k < uniq.length; k++) {
    sum += uniq[k];
}
console.log(sum);