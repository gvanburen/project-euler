/*If p is the perimeter of a right angle triangle with integral length sides, {a,b,c}, there are exactly three solutions for p = 120.

{20,48,52}, {24,45,51}, {30,40,50}

For which value of p ≤ 1000, is the number of solutions maximised?*/

// a^2 + b^2 = c^2
// a + b + c = p
// a^2 + b^2 = (p-a-b)^2 = p^2 + a^2 + b^2 - 2pa - 2pb + 2ab
// b = (p^2 - 2pa)/(2p - 2a)

// optimized
var max = 0,
    result = 0;
for (var p = 2; p <= 1000; p += 2) {
    var num = 0;
    for (var a = 2; a < (p / 3); a++) {
        if (p * (p - 2 * a) % (2 * (p - a)) == 0) {
            num++;
        }
    }
    if (num > result) {
        result = num;
        max = p;
    }
}
console.log(max);


// brute (and slow)
var max = 0,
    result = 0;
for (var p = 2; p <= 1000; p++) {
    var num = 0;
    for (var a = 1; a < (p / 2); a++) {
        for (var b = 1; b <= a; b++) {
            var tmp = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
            if (p == a + b + tmp) {
                num++;
            }
        }
    }
    if (num > max) {
        max = num;
        result = p;
    }
}
console.log(result);