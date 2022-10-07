// Complete the solution so that the function will break up camel casing, using a space between words.
function solution(string) {
   return(string.replace(/([A-Z])/g, ' $1'));
}

// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
function reverseWords(str) {
   return str.split(" ").map((word) => word.split("").reverse().join("")).join(" ");
 }

//  If the numbers is even return true. If it's odd, return false.
const isEven = function (n) { //if n is even return true, otherwise, return false   
   return ( n & 1 ) ? false : true;
}

// Extend the Math object (JS) or module (Ruby and Python) to convert degrees to radians and viceversa. The result should be rounded to two decimal points. Note that all methods of Math object are static.
Math.radians = function(degrees){
   return Math.round((degrees * Math.PI / 180) * 100) / 100 + 'rad';
 }
 
 Math.degrees = function(radians){
   return Math.round((radians * 180 / Math.PI) * 100) / 100 + 'deg';
 }

//  Task:
// Given a list of integers, determine whether the sum of its elements is odd or even.
// Give your answer as a string matching "odd" or "even".
// If the input array is empty consider it as: [0] (array with a zero).
function oddOrEven(array) {
   //enter code here
  const reducer = array.reduce((a,b)=>a+b,0)
  if(reducer%2 == 0 ){
    return "even"
  }else{
    return "odd"
  }
}
