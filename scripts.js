function add(a,b) {return a+b};
function subtract(a,b) {return a-b};
function multiply(a,b) {return a*b};
function divide(a,b) {return a/b};

var currentValue = [];
var operator = '';
var firstNum = 0;
var nextNum = 0;
var display = document.getElementById('display_screen');
var opDisplay = document.getElementById('operator_screen');


//convert user's input into an integer
function toInteger(array_string) {
	var stringNum = array_string.join('');
  return parseInt(stringNum, 10);
}

function clear() {
	currentValue = [];
  firstNum = 0;
  nextNum = 0;
  operator = '';
  display.innerHTML = '0';
  opDisplay.innerHTML = 'nil';
};

function equals() {
	nextNum = toInteger(currentValue);
  currentValue = [];
	
  switch(operator) {
  	case "+":
      firstNum = add(firstNum, nextNum);
      display.innerHTML = firstNum;
      console.log(firstNum);
      nextNum = 0;
      operator = '';
      opDisplay.innerHTML = '.';
      break;
    case "-":
      firstNum = subtract(firstNum, nextNum);
      display.innerHTML = firstNum;
      console.log(firstNum);
      nextNum = 0;
      operator = '';
      opDisplay.innerHTML = '.';
      break;
    case "*":
      firstNum = multiply(firstNum, nextNum);
      display.innerHTML = firstNum;
      console.log(firstNum);
      nextNum = 0;
      operator = '';
      opDisplay.innerHTML = '.';
      break;
    case "/":
      firstNum = divide(firstNum, nextNum);
      display.innerHTML = firstNum;
      console.log(firstNum);
      nextNum = 0;
      operator = '';
      opDisplay.innerHTML = '.';
      break;
    default:
  		console.log('no operator chosen');
  };
};


//Click Event listener for all numbers 0-9
for(var i=1; i<=10; i++) {
	document.getElementById(i).addEventListener("click", function(i){
  	currentValue.push(this.innerHTML);
    console.log(currentValue);
    display.innerHTML = currentValue.join('');
  });
};


//Click Event listener for all operators
for(var j=11; j<=14; j++) {
	document.getElementById(j).addEventListener("click", function(j){
  	operator = this.innerHTML;
    opDisplay.innerHTML = operator;
    console.log("Operator is " + operator);
    if(firstNum === 0){
  		firstNum = toInteger(currentValue);
			console.log(firstNum);
  		currentValue = [];
    }
  });
};

document.getElementById("=").addEventListener("click", equals);
document.getElementById("clear").addEventListener("click", clear);




