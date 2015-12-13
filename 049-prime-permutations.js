/*The arithmetic sequence, 1487, 4817, 8147, in which each of the terms increases by 3330, is unusual in two ways: (i) each of the three terms are prime, and, (ii) each of the 4-digit numbers are permutations of one another.

There are no arithmetic sequences made up of three 1-, 2-, or 3-digit primes, exhibiting this property, but there is one other 4-digit increasing sequence.

What 12-digit number do you form by concatenating the three terms in this sequence?*/

function isPrimeNum(n) {
    if (n < 2) {
        return false
    }
    var prime = true;
    for (var i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            prime = false;
        }
    }
    return prime;
}

function isPermutation(a, b, c){
	var a = String(a).split("").sort();
	var b = String(b).split("").sort();
	var c = String(c).split("").sort();
    for (var i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
            return false;
        }
        if (a[i] !== c[i]) {
            return false;
        }
    }
    return true;
}

var primeArr = [];
for(var n = 1489; n < 10000; n++){
	if(isPrimeNum(n)){
		primeArr.push(n);
	}
}
var result;
for(var i = 0; i < primeArr.length-1; i++){
	for(var j = i + 1; j < primeArr.length; j++){
		var k = primeArr[j] + (primeArr[j] - primeArr[i]);
		if(k < 10000 && primeArr.indexOf(k) > -1){
			if(isPermutation(primeArr[i], primeArr[j], k)){
				result = String(primeArr[i]) + String(primeArr[j]) + String(k);
				break;
			}
		}
	}
}
console.log(result);
