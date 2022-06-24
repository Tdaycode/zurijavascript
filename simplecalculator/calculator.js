let firstNum = parseInt(prompt("Enter the first digit"))
let operator = prompt("Enter operator between\n 1. + \n 2. - \n 3. * \n 4. /");
let secondNum = parseInt(prompt("Enter the second digit"))


if(operator == "+") {
  alert(firstNum + secondNum);
}else if(operator == "-") {
  alert(firstNum - secondNum);
}else if(operator == "*") {
  alert(firstNum * secondNum);
}else if(operator == "/") {
  alert(firstNum / secondNum);
}else {
  operator
}