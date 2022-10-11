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

// DESCRIPTION:
// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).
// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
function isPangram(string){
  const alphapet = "abcdefghijklmnopqrstuvwxyz"
  const containedInString = []
  for(let i = 0; i < alphapet.length; i++){
    const charExist = string.toLowerCase().includes(alphapet[i])
    containedInString.push(charExist)
  }
  return containedInString.every(val => val == true)
}

// Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case
var countBits = function(n) {
  // Program Me
  const r = (n).toString(2).split('');
  const b = r.reduce((sum, num) => sum + Number(num), 0);
  return b

};