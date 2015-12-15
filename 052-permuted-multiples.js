/*It can be seen that the number, 125874, and its double, 251748, contain exactly the same digits, but in a different order.

Find the smallest positive integer, x, such that 2x, 3x, 4x, 5x, and 6x, contain the same digits.*/

function isPermutation(a, b){
	var a = String(a).split("").sort();
	var b = String(b).split("").sort();
    for (var i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
            return false;
        }
    }
    return true;
}
var notFound = true;
var i = 125874;
while(notFound){
	if(isPermutation(i, i*2) &&
		isPermutation(i, i*3) &&
		isPermutation(i, i*4) &&
		isPermutation(i, i*5) &&
		isPermutation(i, i*6)
		)
	{
		console.log(i);
		notFound = false;
		break;
	}
}