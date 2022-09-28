// Convert boolean values to strings 'Yes' or 'No'.Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.
function boolToWord( bool ){
    //...
    if (bool === true){
      return 'Yes'
    } else{
      return "No"}
  }


// Quarter of the year. Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.
// For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.
const quarterOf = (month) => {
    // Your code here
    if (month <= 3) {
      return quarter = 1; }
    else if (month <=6) {
      return quarter = 2; }
    else if (month <=9) {
      return quarter = 3; }
    else if (month <=12) {
      return quarter = 4; }
      else {
      return('month is not valid')
    }
  }


// Drink about DESCRIPTION:
// Kids drink toddy.
// Teens drink coke.
// Young adults drink beer.
// Adults drink whisky.
// Make a function that receive age, and return what they drink.
// Rules:
// Children under 14 old.
// Teens under 18 old.
// Young under 21 old.
// Adults have 21 or more.
function peopleWithAgeDrink(old) {
    if (old >= 21) return 'drink whisky'
    if (old >= 18) return 'drink beer'
    if (old >= 14) return 'drink coke'
    return 'drink toddy'
  }


// Reversed sequence Build a function that returns an array of integers from n to 1 where n>0.
// Example : n=5 --> [5,4,3,2,1]
const reverseSeq = n => {
  array =  [];
  for (i = n; i > 0; i--){
    array.push(i)
  }
  return array
};

// Find the Remainder Write a function that accepts two integers and returns the remainder of dividing the larger value by the smaller value.
// Division by zero should return NaN.
function remainder(a, b){
    // Divide the larger argument by the smaller argument and return the remainder
    return a > b ? a % b : b % a 
    
  }

// Write a function to split a string and convert it into an array of words.
function stringToArray(string){
    // code code code
    return string.split(" ")
  }


//  This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.
function simpleMultiplication(number) {
    // your code........
  return (number%2 == 0) ? number*8 : number*9 
}