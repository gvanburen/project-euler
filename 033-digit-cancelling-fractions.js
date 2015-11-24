/*The fraction 49/98 is a curious fraction, as an inexperienced mathematician in attempting to simplify it may incorrectly believe that 49/98 = 4/8, which is correct, is obtained by cancelling the 9s.

We shall consider fractions like, 30/50 = 3/5, to be trivial examples.

There are exactly four non-trivial examples of this type of fraction, less than one in value, and containing two digits in the numerator and denominator.

If the product of these four fractions is given in its lowest common terms, find the value of the denominator.*/

//test case
var numProd = 1;
var denProd = 1;
for (var i = 10; i < 100; i++) {
    for (var j = 10; j < 100; j++) {
        if (i % 10 != 0 && j % 10 != 0) {
            var frac = i / j;
            var num = String(i).split("");
            var den = String(j).split("");
            if (num[1] == den[0]) {
                var tmp = Number(num[0]) / Number(den[1]);
                if (tmp == frac) {
                    numProd *= Number(num[0]);
                    denProd *= Number(den[1]);
                }
            }
        }
    }
}
console.log(denProd /= gcd(numProd, denProd));

function gcd(a, b) {
    var x = 0,
        y = 0;
    if (a > b) {
        x = a;
        y = b;
    } else {
        x = b;
        y = a;
    }
    while (x % y != 0) {
        var tmp = x;
        x = y;
        y = tmp % x;
    }
    return y;
}