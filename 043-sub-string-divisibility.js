/*The number, 1406357289, is a 0 to 9 pandigital number because it is made up of each of the digits 0 to 9 in some order, but it also has a rather interesting sub-string divisibility property.

Let d1 be the 1st digit, d2 be the 2nd digit, and so on. In this way, we note the following:

d2d3d4=406 is divisible by 2
d3d4d5=063 is divisible by 3
d4d5d6=635 is divisible by 5
d5d6d7=357 is divisible by 7
d6d7d8=572 is divisible by 11
d7d8d9=728 is divisible by 13
d8d9d10=289 is divisible by 17
Find the sum of all 0 to 9 pandigital numbers with this property.*/

function nextPermutation(array) {
    // 1. Find non-increasing suffix
    var i = array.length - 1;
    while (i > 0 && array[i - 1] >= array[i])
        i--;
    if (i <= 0)
        return false;

    // 2. Find successor to pivot
    var j = array.length - 1;
    while (array[j] <= array[i - 1])
        j--;
    var temp = array[i - 1];
    array[i - 1] = array[j];
    array[j] = temp;

    // 3. Reverse suffix
    j = array.length - 1;
    while (i < j) {
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;
        i++;
        j--;
    }
    return array; //true;
}

function divisible(d) {
    if (
        Number(d.slice(1, 4).join("")) % 2 === 0 &&
        Number(d.slice(2, 5).join("")) % 3 === 0 &&
        Number(d.slice(3, 6).join("")) % 5 === 0 &&
        Number(d.slice(4, 7).join("")) % 7 === 0 &&
        Number(d.slice(5, 8).join("")) % 11 === 0 &&
        Number(d.slice(6, 9).join("")) % 13 === 0 &&
        Number(d.slice(7, 10).join("")) % 17 === 0
    ) {
        sum += Number(d.join(""));
    }
}

var str = "0123456789".split("");
var poss = 3628800;
var sum = 0;

for (var n = 0; n < poss; n++) {
    divisible(str);
    str = nextPermutation(str);
}
console.log(sum);