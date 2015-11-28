/*The decimal number, 585 = 10010010012 (binary), is palindromic in both bases.

Find the sum of all numbers, less than one million, which are palindromic in base 10 and base 2.

(Please note that the palindromic number, in either base, may not include leading zeros.)*/

function isPalindrome(x) {
    if (!isNaN(x)) {
        x = x.toString();
    }
    y = x.split("").reverse().join("");
    if (x == y) {
        return true;
    } else {
        return false;
    }
}

var base10 = [];
for (var i = 1; i < 1000000; i++) {
    if (isPalindrome(i)) {
        base10.push(i);
    }
}
var sum = 0;
for (var j = 0; j < base10.length; j++) {
    if (isPalindrome(base10[j].toString(2))) {
        sum += base10[j];
    }
}
console.log(sum);