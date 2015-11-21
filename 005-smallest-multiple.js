/*2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?*/

function smallestLCM(n) {
    var lastLCM = 1,
        num = 1,
        divider = 1;
    while (divider <= n) {
        if (num % divider === 0) {
            lastLCM = num;
            divider++;
        } else {
            num += lastLCM;
        }
    }
    console.log(lastLCM);
}

smallestLCM(20);