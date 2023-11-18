// 1.  Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
//       Programmatically subtract the value of the first element in the array from the value in the last element of the array.
//         Do not use numbers to reference the last element, find it programmatically.
//         ages[7] - ages[0] is not allowed!
//       Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
//       Use a loop to iterate through the array and calculate the average age.
// CODE HERE\/
console.log('Answer to Question 1:');//create some separation
//declaring my array as numbers and inserting the initial values
let numbers = [
  3, 9, 23, 64, 2, 8, 28, 93
];
//using this to log to the console that the array is defined correctly
// console.log(numbers); //uncomment to check that it logs the expected array, expected result [3, 9, 23, 64, 2, 8, 28, 93]

//creating variables to use for the math
let first = numbers[0];//setting to the first value in the array
let last = numbers[numbers.length -1]; //setting to the last value in the array by taking the length of the array -1 since it's zero based

// console.log(first);//testing that this variable is defined correctly, uncomment to test, expected result  3
// console.log(last);//testing that this variable is defined correctly, uncomment to test, expected result  93

//logging to the console the value of subtracting the first value from the array from the last value of the array
console.log(last - first); // expected result 90

//using the push function to add 11 to the array
numbers.push(11);

// console.log(numbers); //uncomment to test the new array, expected result [3, 9, 23, 64, 2, 8, 28, 93, 11]

last = numbers[numbers.length -1];//reassigning the last variable to the new length of the array since we added a new value
console.log(last - first); // expected result 8

//let's build a for loop to find the sum of the numbers in the array
let sum = 0; //start by creating a new variable called sum and setting it equal to 0

//use the for.. of.. loop to iterate thru the array, num is the placeholder for each item in the array
for ( let num of numbers) {
  sum += num; //this adds the current num in the loop to the sum, everytime it loops it adds up
}

//creating a new variable called averageAge and setting it equal to the sum from the for loop and dividing by the length 
//of the array to find the average, sum divided by the number of items in the array
let averageAge = sum / numbers.length;

console.log(averageAge); // expected result 26.77777777777778

console.log('-----------------------');//create some separation
console.log('Answer to Question 2:');//create some separation
// 2.  Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.
//       Use a loop to iterate through the array and calculate the average number of letters per name.
//       Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.
// CODE HERE\/
//Declaring a variable called names and setting the initial values of 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'
let names = [
  'Sam', 
  'Tommy', 
  'Tim', 
  'Sally', 
  'Buck', 
  'Bob'
];

console.log(names);//testing to see if array is defined correctly, expected result: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'

//creating a new array to hold the length of each item in the array using the map function
let lengths = names.map(function(x){
  return x.length;
});
console.log(lengths);//testing to see if the new array is correct, expected result: 3, 5, 3, 5, 4, 3

//creating new variable to hold sum of the lengths
let sumLength = 0;

//use the for.. of.. loop to iterate thru the array, num is the placeholder for each item in the array
for ( let length of lengths) {
  sumLength += length; //this adds the current length in the loop to the sum, everytime it loops it adds up
}


//creating a new variable called averageLength and setting it equal to the sum from the for loop and dividing by the length 
//of the array to find the average, sum divided by the number of items in the array
let averageLength = sumLength / lengths.length;

let string = '';
for (let name of names) {
  string += name + ' ';
}

console.log(string);

console.log(averageLength); //expected result 3.8333333333333335
console.log('-----------------------');//create some separation
console.log('Answer to Question 3:');//create some separation
// 3.  How do you access the last element of any array?
// CODE HERE\/
console.log('You can use arrayName[arrayName.length-1] to access the last item in the array.')
console.log('-----------------------');//create some separation
console.log('Answer to Question 4:');//create some separation
// 4.  How do you access the first element of any array?

// CODE HERE\/
console.log('You can use arrayName[0] to access the first item in the array.')
console.log('-----------------------');//create some separation


// 5.  Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the 
//     length of each name to the nameLengths array.
//       For example:
//         let names = ["Kelly", "Sam", "Kate"];    // starting with this array
//         let nameLengths = [5, 3, 4];             // create a new array
// CODE HERE\/
console.log('Answer to Question 5:');//create some separation

//creating a new array to hold the length of each item in the array using the map function
let nameLengths = names.map(function(x){
  return x.length;
});
console.log(nameLengths);//testing to see if the new array is correct, expected result: 3, 5, 3, 5, 4, 3
console.log('-----------------------');//create some separation
// 6.  Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.
// CODE HERE\/
console.log('Answer to Question 6:');//create some separation

// creating new variable to hold sum of the lengths
let nameCharSum = 0

//use the for.. of.. loop to iterate thru the array, num is the placeholder for each item in the array
for ( let name of nameLengths) {
  nameCharSum += name;
}
console.log(nameCharSum); //expected result 23

console.log('-----------------------');//create some separation
console.log('Answer to Question 7:');//create some separation
// 7.  Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number 
//     of times. (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').
// CODE HERE\/

//using the ES6 repeat method to repeat the string passed in as variable one
 function repeatString(string, times) {
  if (times > 0) {
    console.log(string.repeat(times));
  }
 }
 
 repeatString('Hello', 3); //expected result HelloHelloHello
 console.log('-----------------------');//create some separation
 console.log('Answer to Question 8:');//create some separation
// 8.  Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the 
//     first and the last name separated by a space.
// CODE HERE\/

//create function called fullName, with two variables firstName and lastName
function fullName(firstName, lastName) {
  console.log( `${firstName} ${lastName}` );//use template literals and log it out
}

fullName('Jake', 'Sasse'); // expected result Jake Sasse
fullName('Ashley', 'Sasse'); //expected result Ashley Sasse
console.log('-----------------------');//create some separation
console.log('Answer to Question 9:');//create some separation
// 9.  Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
// CODE HERE\/

//create an array called newArray and give initial values
let newArray = [
  10, 26, 27, 22, 24, 21, 16
];
// console.log(newArray);//testing the newArray output is correct, expected result 10, 26, 27, 22, 24, 21, 16

//create a function called findSum and give it a variable x is the placeholder
function findSum(x) {
  let sumOfArray = 0; //define a new variable to hold the sum
  for (let sum of x) {
    sumOfArray += sum;
  }
  return sumOfArray > 100; //return a boolean of whether or not the sum of the array is greater than 100
}
//create a second array to test that the function is dynamic
let secondArray = [
  1,2,3
];
console.log(findSum(newArray)); //pass in the first array, expected result of true
console.log(findSum(secondArray)); //pass in the second array, expected result of false

console.log('-----------------------');//create some separation
console.log('Answer to Question 10:');//create some separation
// 10. Write a function that takes an array of numbers and returns the average of all the elements in the array.
// CODE HERE\/

//define a new array and give initial values
let q10Array = [
  15, 87, 22, 55
]
//create the function called averageArray and pass in placeholder value for the array
function averageArray(x) {
  let sumq10 = 0; //create a new variable to hold the sum of the array to use later
  //create a for loop to find the sum of the array;
  for ( let sum of x) {
    sumq10 += sum;
  }
  console.log(sumq10 / x.length);//logs the average which is sum divided by total items in the array
}
//create a new array to test that function is dynamic
let q10Array2 = [
  23, 99, 100
];
averageArray(q10Array); //expected result 44.75
averageArray(q10Array2); //expected result 74
console.log('-----------------------');//create some separation
console.log('Answer to Question 11:');//create some separation
// 11. Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is 
//     greater than the average of the elements in the second array.
// CODE HERE\/
//define 2 arrays and pass values
let q11Array0 = [
  1, 2, 3, 4
];
let q11Array1 = [
  3, 4, 5, 6
];

//create first function to determine average of the arrays with a place holder value 
function q11Average(x) {
  let q11ArraySum = 0;
  for ( let array of x ) {
    q11ArraySum += array ;
  }
  return q11ArraySum / x.length; //does the average calc sum divided by number of items that makes up the sum
}

//create the second function to do the comparison, giving 2 placeholder values
function array1BiggerThanArray2 (a, b) {
  console.log( a > b );
}

//invoke the function passing the previous function for each arrays average
array1BiggerThanArray2(q11Average(q11Array0), q11Average(q11Array1));
console.log('-----------------------');//create some separation
console.log('Answer to Question 12:');//create some separation
// 12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns 
//     true if it is hot outside and if moneyInPocket is greater than 10.50.
// CODE HERE\/

//create a function and pass 2 parameters
function willBuyDrink(isHotOutside, moneyInPocket) {
  //using an if statement to make the evaluation, the only way to get true is to have isHotOutside === true AND moneyInPocket is greater than 10.50
  if (isHotOutside === true && moneyInPocket > 10.50) {
    return true;
  } else if ( isHotOutside !== true || moneyInPocket <= 10.50) { //returns false if isHotOutside is not true OR moneyInPocket is less than or equal to 10.50
    return false;
  }
}

console.log(willBuyDrink(true, 10)); //expected result false
console.log(willBuyDrink(true, 10.49)); //expected result false
console.log(willBuyDrink(true, 10.50)); //expected result false
console.log(willBuyDrink(true, 10.51)); //expected result true
console.log(willBuyDrink(false, 10.50)); //expected result false
console.log(willBuyDrink(false, 10.51)); //expected result false