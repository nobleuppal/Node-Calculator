var rs = require('readline-sync');
var operation;
var number;
var numberTwo;
var answer;
while (operation !='/' || operation != '*' || operation != '-' || operation != '+') {
  operation = rs.question('What operation would you like to perform? ');
  if (operation =='/' || operation == '*' || operation == '-' || operation == '+') {
    number = rs.questionFloat('Please enter the first number: ', {limitMessage: 'This is not a number'});
    numberTwo = rs.questionFloat('Please enter the second number: ', {limitMessage: 'This is not a number'});
    if (operation == '/') {
    answer = number / numberTwo;
    }
    else if (operation == '*') {
      answer = number * numberTwo;
    } 
    else if (operation == '-') {
      answer = number - numberTwo;
    } 
    else if (operation == '+') {
      answer = number + numberTwo;
    } 
    console.log('The result is:', answer);
    return 0;
  }
  else {
    console.log('That is not a valid operation');
  }
}