/////////////////////////////////////
/* Problem 1 (this is your demo)
Write a function called sum() that takes in two numbers as arguments and then returns an array where the first element is the sum of those numbers, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:
"The sum of 4 and 7 is 11."
Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSum() function below and check the console to see if the test passes.*/

 //Write your code here
function sum(num1, num2) { //declaring the function as vairable sum assigning the parameter num1, num2.
  var x = num1 + num2; //declaring variable x with a value of num1 + num2.
  var str = 'The sum of ' + num1 + ' and ' + num2 + ' is ' + x + '.'; //declaring variable str with a value of strings concatenated with our variables.
  return [x, str]; //return the array of variables x and str.
}

 // Here is the test for sum(); uncomment it to run it
testSum(4, 7);

// Once you get the test passing, do an a-c-p cycle, synchronize the code between both GitHubs and both laptops, and swap Driver/Navigator roles. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 2
Write a function called multiply() that takes in two numbers as arguments and returns an array where the first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:
"The product of 4 and 7 is 28."
Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiply() function and see if the test passes.*/

// Write your code here
function multiply(x, y) { //Declaring function as variable multiply with parameters x, y.
  var product = x * y; //Declaring variable product with a value of x * y.
  var str = 'The product of ' + x + ' and ' + y + ' is ' + product + '.'; // declaring variable str with a value of string concatenated with our variables.
  return [product, str]; //return the array of variables product and str.
}


// Here is the test for multiply(); uncomment it to run it
testMultiply(4,7);

// Once you get the test passing, do an a-c-p cycle, synchronize the code between both GitHubs and both laptops, and swap Driver/Navigator roles. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 3
Write a function called sumAndMultiply() that takes in three numbers as arguments and returns an array where the first element is the sum of those three numbers, the second element is the product of those three numbers,  and the third and fourth elements are strings that EXACTLY follow this example and use the values that were input into the function:
Third element: "4 and 7 and 5 sum to 16."
Fourth element: "The product of 4 and 7 and 5 is 140."
Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiply() function and see if the test passes.*/

// Write your code here
function sumAndMultiply(x, y, z) { //Declaring function with variable of sumAndMultiply and parameters of x, y, z.
  var element1 = x + y + z; //declaring variable element1 with a value of x + y + z.
  var element2 = x * y * z; //declaring variable element2 wiht a vlaue of x * y * z.
  var str1 = x + ' and ' + y + ' and ' + z + ' sum to ' + element1 + '.'; //delcaring variable str1 with a value of strings concatenated with variables.
  var str2 = 'The product of ' + x + ' and ' + y + ' and ' + z + ' is ' + element2 + '.'; //declaing variable str2 with a value of strings concatenated with variables.
  return [element1, element2, str1, str2]; //returning an array of all 4 variables
}

// Here is the test for sumAndMultiply(); uncomment it to run it
testSumAndMultiply(4,7,5);

// Once you get the test passing, do an a-c-p cycle, synchronize the code between both GitHubs and both laptops, and swap Driver/Navigator roles. don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 4
Write a function called sumArray() that takes in an array of numbers as its argument and then returns an array where the first element is the sum of the numbers in the array, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:
"2,3,4 was passed in as an array of numbers, and 9 is their sum."
Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSumArray() function and see if the test passes.*/

// Write your code here
var testArray = [2,3,4]; //declaring varaible and assigning it to an array of 3 numbers.
function sumArray(testArray) { // declaring function to variable sumArray with parameter testArray.
  var x = 0; //declaring variable x and assigning a value of 0.
  for(var i = 0; i < testArray.length; i++) //start of our for loop with a counter condtion that will search the array by 1 each time loop runs.
      x += testArray[i]; // Adds the value of var x and assigns the result to the array testArray.
      str = '2,3,4 was passed in as an array of numbers, and ' + x + ' is their sum.'; //assigning 2 strings concatenated with variable x to str.
      return [x, str]; // returns an array of x and str.
}

// Here is the test for sumArray(); uncomment it to run it
testSumArray(testArray);

// Once you get the test passing, do an a-c-p cycle, synchronize the code between both GitHubs and both laptops, and swap Driver/Navigator roles. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 5
Write a function called multiplyArray() that takes an array of numbers as its argument and returns an array whose first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:
"The numbers 2,3,4 have a product of 24."
Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiplyArray() function and see if the test passes.*/

// Write your code here
var testArray = [2,3,4]; //declaring the variable and assigning to an array.
function multiplyArray(testArray) { // declaring a function, assigning it to the variable with a parameter of testArray.
  var x = 1; //declaring variable x and assigning it a value of 1.
  for(var i = 0; i < testArray.length; i++) //opening our for loop with a counter condition to search through the array by 1 each time it loops through the array.
      x = x * testArray[i]; // reassigning x to the value of x times the 3 numbers in the array.
      str = 'The numbers 2,3,4 have a product of ' + x + '.'; //assigning 2 strings concatenated with variable x to str.
      return [x, str]; //returns an array of variables x and str.
}

// Here is the test for multiplyArray(); uncomment it to run it
testMultiplyArray(testArray);

// Once you get the test passing, do an a-c-p cycle, synchronize the code between both GitHubs and both laptops, and swap Driver/Navigator roles. Submit the link to the repo via Canvas.

/////////////////////////////////////
/////////////////////////////////////
/////////////////////////////////////
/////////////////////////////////////
/////////////////////////////////////
/////////////////////////////////////
/////////////////////////////////////
/////////////////////////////////////
/////////////////////////////////////
/////////////////////////////////////

function testSum() { //opening function for variable testSum
  if (sum(4,7)[1] === 'The sum of 4 and 7 is 11.') { //opening if statement checking if function sum and its parameters equal this string.
    console.log('%c TEST FOR sum() PASSES', 'color: green'); //printing to the console if the result was true.
  } else {
    console.log('%c TEST FOR sum() FAILS', 'color: red'); //printing to the console if the result was false.
  }
}

function testMultiply() {
  if (multiply(5,9)[1] === 'The product of 5 and 9 is 45.') {
    console.log('%c TEST FOR multiply() PASSES', 'color: green');
  } else {
    console.log('%c TEST FOR multiply() FAILS', 'color: red');
  }
}

function testSumAndMultiply() {
  if (sumAndMultiply(4, 7, 5)[2] === '4 and 7 and 5 sum to 16.' && sumAndMultiply(4, 7, 5)[3] === 'The product of 4 and 7 and 5 is 140.') {
    console.log('%c TEST FOR sumAndMultiply() PASSES', 'color: green');
  } else {
    console.log('%c TEST FOR sumAndMultiply() FAILS', 'color: red');
  }
}

function testSumArray() {
  if (sumArray(testArray)[1] === '2,3,4 was passed in as an array of numbers, and 9 is their sum.') {
    console.log('%c TEST FOR sumArray() PASSES', 'color: green');
  } else {
    console.log('%c TEST FOR sumArray() FAILS', 'color: red');
  }
}

function testMultiplyArray() {
  if (multiplyArray(testArray)[1] === 'The numbers 2,3,4 have a product of 24.') {
    console.log('%c TEST FOR multiplyArray() PASSES', 'color: green');
  } else {
    console.log('%c TEST FOR multiplyArray() FAILS', 'color: red');
  }
}
// Contact GitHub API Training Shop Blog About
