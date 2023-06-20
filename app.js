  // School Paperwork
  function paperwork(classmates, pagesOfHomework) {
    if(classmates <= 0 || pagesOfHomework <= 0) {
      return 0;
    } else {
      return classmates * pagesOfHomework;
    }
  }
  
  // Counting Sheep
  function countSheeps(arrayOfSheep) {
    let count = 0;
    for(let i = 0; i < arrayOfSheep.length; i++) {
      if(arrayOfSheep[i] === true) {
        count += 1;
      }
    }
    return count;
  }
  
  // Reversed Words
  function reverseWords(str) {
    return str.split(' ').map(word => word).reverse().join().split('').reverse().join('').replaceAll(',', ' ')
  }
  
  // Reversed Strings
  function solution(str){
    return str.split('').reverse().join('');
  }
  
  // Beginner Series #3 Sum of Numbers
  function getSum(numberOne, numberTwo){
    let arrayToStoreNumbers = [];
    let storingOfIndexValuesBetween = [];
    arrayToStoreNumbers.push(numberOne);
    arrayToStoreNumbers.push(numberTwo);
 
    let smallerOfTwoNumbers = Math.min(...arrayToStoreNumbers);
    let biggerOfTwoNumbers = Math.max(...arrayToStoreNumbers);
   for(let i = smallerOfTwoNumbers; i <= biggerOfTwoNumbers; i++) {
     storingOfIndexValuesBetween.push(i)
   }
  return storingOfIndexValuesBetween.reduce((total, acc) => total + acc);
}
  
  // Ones and Zeros (Bitwise Operator)
  const binaryArrayToNumber = binaryArray => {
    return binaryArray.reduce((accumulator, value) => {
      return (accumulator << 1) | value;
    });
  };
  
  // Regex Validate Pin Code
  function validatePIN (pin) {
    let pinValidation = /^([0-9]{4})$|(^[0-9]{6})$/;
    return pinValidation.test(pin) === true ? true : false;
 }
  
  // Beginner - List Without a Map
  function maps(numInArrToDouble){
    return numInArrToDouble.map(number => number * 2);
    }
  
  // Convert a number to a string
  function numberToString(num) {
    return num.toString();
  }
  
  // Returning Strings
  function greet(name){
    return `Hello, ${name} how are you doing today?`;
  }
  
  // Convert a string to a number
  const stringToNumber = function(str){
    return parseInt(str);
   }
  
  // Are you playing Banjo?
  function areYouPlayingBanjo(name) {
    let playingBanjo =  name[0] === 'r' || name[0] === 'R' ? `${name} plays banjo` : `${name} does not play banjo`
    return playingBanjo
    }
  
  // Friend or Foe
  function friend(friends){
    const myFriends = friends.filter(friend => friend.length === 4)
    return myFriends
  }
  
  // Convert Boolean to String
  function boolToWord( bool ){
    return bool ? 'Yes' : 'No';
  }
  
  // Hello World Function
  function greet() {
    return 'hello world!'
  }
  
  // Two Word Abbreviation
  function abbrevName(fullName){
    let firstInitial = fullName.slice(0, 1);
    let findSpaceInName = fullName.indexOf(' ') + 1;
    let secondInitial = fullName.slice(findSpaceInName, findSpaceInName + 1);
    return firstInitial.toUpperCase() + '.' + secondInitial.toUpperCase()
  }

  // Two Word Abbreviation refactor into one line of code
  const getInitials = fullName.split(' ').map(initial => initial[0]).join('.').toUpperCase();
  return getInitials
  
  // Opposite Number
  function opposite(number) {
    return number > 0 === true ? -Math.abs(number) : Math.abs(number);
  }
  
  // Beginner Series Clock #2
  function past(h, m, s){
    let milliseconds = (s * 1000) + (m * 60000) + (h * 3600000);
    return milliseconds;
  }
  
  // Can't Sleep, Just Count Sheep
  var countSheep = function (num){ 
    let sheepString = '';
    if(num === 0) {
      return '';
    } else {
      let sheepCount = 0;
      while(sheepCount < num) {
        sheepCount++;
        let newString = `${sheepCount} sheep...`
        sheepString += newString;
      }
      return sheepString;
    }
  }
  
  // Transportation on Vehicle
  function rentalCarCost(d) {
    if(d >= 7) {
      let totalForRental = (d * 40) - 50;
      return totalForRental;
    } else if(d >=3 && d <= 6) {
      let totalForRental = (d * 40) - 20;
      return totalForRental;
    } else {
      let totalForRental = d * 40;
      return totalForRental;
    }
  }
  
  // How good are you really?
  function betterThanAverage(classPoints, yourPoints) {
    // adds yourPoints to the classPoints array
    let concatPoints = classPoints.concat(yourPoints);
    
    // adds all values together from concatPoints to include 'yourPoints'
    let totalAddedScores = concatPoints.reduce((total, accumulator) => total + accumulator);
  
    // divides by concatPoints.length (working with arrays) to find the average
    let classAveragePoints = totalAddedScores / concatPoints.length;
    
    // returns true if my score is better, false if it is worse
    let howGoodAmI = yourPoints > classAveragePoints === true ? true : false;
    
    // returns value
    return howGoodAmI;
  }
  
  // Convert number to reversed array of digits
  function digitize(n) {
    // convert to a string
    let numToString = String(n);
    // split the string of numbers into an array
    let splitString = numToString.split('');
    // create array with .from, run parseInt() on each and convert to integer
    let newArray = Array.from(splitString, x => parseInt(x));
    // reverse the array (this mutates the original array)
    let reversedArray = newArray.reverse();
    // return the array
    return reversedArray;
  }
  
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