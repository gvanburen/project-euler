/*A palindromic number reads the same both ways.
The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
Find the largest palindrome made from the product of two 3-digit numbers.*/


function palinProd(){
  var max = 0;
  for(var i = 999; i > 99; i--){
    for(var j = 999; j > 99; j--){
      var prod = i * j;
      if(String(prod) === String(prod).split("").reverse().join("")){
      //if(isPalindrome(prod)){
        if(prod > max){ max = prod; }
      //}
      }
    }
  }
  return max;
}

palinProd();

/*
function isPalindrome(n){
  n = n.toString();
  y = n.split("").reverse().join("");
  return n === y ? true : false;
}
*/
