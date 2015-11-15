/*A permutation is an ordered arrangement of objects. For example, 3124 is one possible permutation of the digits 1, 2, 3 and 4. If all of the permutations are listed numerically or alphabetically, we call it lexicographic order. The lexicographic permutations of 0, 1 and 2 are:

012   021   102   120   201   210

What is the millionth lexicographic permutation of the digits 0, 1, 2, 3, 4, 5, 6, 7, 8 and 9?*/

var str = "0123456789".split("");

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
    return true;
}
var count = 1;
while(count < 1000000){
  if(nextPermutation(str)){
    count++;
  }
}
console.log(str.join(""));


// Forum solution
/*
f=[];
a=[0,1,2,3,4,5,6,7,8,9];
for (i=0;i<=a.length;i++){
  if (i==0)f.push(1);
  console.log(f.slice(-1))
  else f.push(f.slice(-1)*i);
}
r=999999; // Because we're starting at zero, not one
for(i=0;i<a.length && r>0;i++){
  c=Math.floor(r/f[a.length-i-1])+i
  r=r%f[a.length-i-1];
  a.splice(i,0,a.splice(c,1)[0]);
}
a.join("");
*/
