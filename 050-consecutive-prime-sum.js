/*The prime 41, can be written as the sum of six consecutive primes:

41 = 2 + 3 + 5 + 7 + 11 + 13
This is the longest sum of consecutive primes that adds to a prime below one-hundred.

The longest sum of consecutive primes below one-thousand that adds to a prime, contains 21 terms, and is equal to 953.

Which prime, below one-million, can be written as the sum of the most consecutive primes?*/

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

var primeArr = [];
for(var n = 2; n < 10000; n++){
	if(isPrimeNum(n)){
		primeArr.push(n);
	}
}
var sum = 0, limit = 1000000, i = 0;
while(sum + primeArr[i] < limit){
	sum+=primeArr[i];
	i++;
}
var start = 0, end = i;
while(!isPrimeNum(sum)){
	sum-=primeArr[start];
	while(sum + primeArr[end] < limit){
		sum+=primeArr[end];
		end++;
	}
	end = i;
	start++;
}
console.log(sum);