/*In England the currency is made up of pound, £, and pence, p, and there are eight coins in general circulation:

1p, 2p, 5p, 10p, 20p, 50p, £1 (100p) and £2 (200p).
It is possible to make £2 in the following way:

1×£1 + 1×50p + 2×20p + 1×5p + 1×2p + 3×1p
How many different ways can £2 be made using any number of coins?*/

var count = 1; // all 1p
for (var a = 200; a >= 0; a -= 200) {
    for (var b = a; b >= 0; b -= 100) {
        for (var c = b; c >= 0; c -= 50) {
            for (var d = c; d >= 0; d -= 20) {
                for (var e = d; e >= 0; e -= 10) {
                    for (var f = e; f >= 0; f -= 5) {
                        for (var g = f; g >= 0; g -= 2) {
                            count++;
                        }
                    }
                }
            }
        }
    }
}