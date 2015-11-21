/*A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

a^2 + b^2 = c^2
For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.

There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc.*/

function pythagorean(n) {
    for (var a = 1; a < n; a++) {
        for (var b = 1; b < n; b++) {
            var c = n - b - a;
            if (c === Math.sqrt((a * a) + (b * b))) {
                if (c > b && b > a) {
                    var product = a * b * c;
                    console.log('a: ' + a + ', b: ' + b + ',c: ' + c);
                }
            }
        }
    }
    console.log(product);
}