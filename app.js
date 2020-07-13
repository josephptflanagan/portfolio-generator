/*
console.log("Hello Node!");
//console.log(document);
*/

/*var message = "Hello Node!";

var sum = 5 + 3;

console.log(message);
console.log(sum);
*/

/*
var commandLineArgs = process.argv;
console.log(commandLineArgs);
*/

/*
var profileDataArgs = process.argv.slice(2, process.argv.length);
console.log(profileDataArgs);
*/

/*
const profileDataArgs = process.argv.slice(2, process.argv.length);
console.log(profileDataArgs);
*/

/*
const message = 'Hello Node!';
message = 'Goodbye Node!';

const sum = 5 + 3;
sum += 1;
*/

/*
const animalArray = ['dog', 'cat', 'pig'];

animalArray.push('cow');

const personObj = {
  name: 'Lernantino',
  age: 99
};

personObj.age = 100;
personObj.occupation = 'Developer';
*/

/*
const printProfileData = (profileDataArr) => {
    console.log(profileDataArr);
};
  
  printProfileData(profileDataArgs);
*/

/*
// Using function expression syntax
const addNums = function(numOne, numTwo) {
    return numOne + numTwo;
  };
  
  // Using new arrow function syntax
  const addNums = (numOne, numTwo) => {
    return numOne + numTwo;
  };
*/

/*
const printProfileData = profileDataArr => {
  console.log(profileDataArr);
};
*/

/*
const addNums = (numOne, numTwo) => numOne + numTwo;

const sum = addNums(5, 3); // sum would be 8

console.log(sum);
*/

/*
const addNums = (numOne, numTwo) => {
  console.log(numOne, numTwo);
  return numOne + numTwo;
};
*/

// Notice the lack of parentheses around the `profileDataArr` parameter?
const printProfileData = profileDataArr => {
    for (let i = 0; i < profileDataArr.length; i += 1) {
      console.log(profileDataArr[i]);
    }
  };