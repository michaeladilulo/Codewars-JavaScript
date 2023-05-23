  // Return Negative
  function makeNegative(num) {
    if(num > 0) {
      return num * -1;
    } else {
      return num * 1;
    }
  }
  
  // Invert Values (This took forever)
  function invert(array) {
    let newArray = array.map(n => n * -1);
    return newArray;
 }
  
  // Remove String spaces
  function noSpace(x){
    let splitString = x.split(' ');
    let joinedString = splitString.join('')
    let newString = joinedString.toString();
    
    return newString;
  }
  
  // Convert String to Upper Case
  function makeUpperCase(str) {
    let upperCaseString = str.toUpperCase();
    return upperCaseString;
  }
  
  // Return smallest number in array
  class SmallestIntegerFinder {
    findSmallestInt(args) {
     return Math.min(...args)
    }
  }
  
  // Fake Binary
  function fakeBin(x){
  let numberArray = [];
  let secondNumArray = [];
  let finalStringOutput;
  
  let splitString = x.split('');
  let length = splitString.length;
  
  for(let i = 0; i < length; i++) {
   numberArray.push(parseInt(splitString[i]))
    let newNumArr = numberArray[i] < 5 === true ? 0 : 1;
    secondNumArray.push(newNumArr)
    
    let secondNumArrToString = secondNumArray.toString();
    let splitStringArr = secondNumArrToString.split(',');
    let joinedArrOne = splitStringArr.join('');
    finalStringOutput = joinedArrOne;
  }
  return finalStringOutput;
}
  
  // String Repeat
  function repeatStr (n, s) {
    let repeatStringArr = [];
    
    for(let i = 0; i < n; i++) {
      repeatStringArr.push(s);
    }
    
    return repeatStringArr.join('');
  }
  
  
  // Remove First and Last Character
  function removeChar(str){
    let newString = str.substring(1).slice(0, -1);
    return newString;
   };

// Count By X

function countBy(x, n) {
    let z = [];
    let firstNumberOfArray = x;
    let arrayMultiplier = n;
    
    for(i = 1; i <= arrayMultiplier; i++) {
      let results = i * firstNumberOfArray;
      z.push(results);
    }
    return z;
  }