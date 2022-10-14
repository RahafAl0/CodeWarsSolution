// Your task is to get Zodiac Sign using input day and month.
const getZodiacSign = (day, month) => {
    // good luck
     if(month == 1){
          if(day < 20){
              return 'Capricorn'
          }else{
              return 'Aquarius'
          }
      }
      if(month == 2){
          if(day < 19){
              return 'Aquarius'
          }else{
              return 'Pisces'
          }
      }
      if(month == 3){
          if(day < 21){
              return 'Pisces'
          }else {
              return 'Aries'
          }
      }
      if(month == 4){
          if(day < 20){
              return 'Aries'
          }else {
              return 'Taurus'
          }
      }
      if(month == 5){
          if(day < 21){
              return 'Taurus'
          }else {
              return 'Gemini'
          }
      }
      if(month == 6){
          if(day < 22){
              return 'Gemini'
          }else{
              return 'Cancer'
          }
      }
      if(month == 7){
          if(day < 23){
              return 'Cancer'
          }else{
              return 'Leo'
          }
      }
      if(month == 8){
          if(day < 23){
              return 'Leo'
          }else{
              return 'Virgo'
          }
      }
      if(month == 9){
          if(day < 23){
              return 'Virgo'
          }else{
              return 'Libra'
          }
      }
      if(month == 10){
          if(day < 23){
              return 'Libra'
          }else{
              return 'Scorpio'
          }
      }
      if(month == 11){
          if(day < 22){
              return 'Scorpio'
          }else{
              return 'Sagittarius'
          }
      }
      if(month == 12){
          if(day < 22){
              return 'Sagittarius'
          }else{
              return 'Capricorn' 
          }
      }
  }

  
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

//In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
function filter_list(l) {
    // Return a new array with the strings filtered out
    const arrOfNums = [];
    for (let element of l) {
      if (typeof element == "number") {
        arrOfNums.push(element);
      } else {
        continue;
      }
    }
    return arrOfNums;
  }

// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
function filter_list(l) {
    // Return a new array with the strings filtered out
    const arrOfNums = [];
    for (let element of l) {
      if (typeof element == "number") {
        arrOfNums.push(element);
      } else {
        continue;
      }
    }
    return arrOfNums;
  }
