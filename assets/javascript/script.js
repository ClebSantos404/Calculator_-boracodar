//capture a number
function displayValue(num) {
  const number = document.getElementById('display').innerHTML;
  document.getElementById('display').innerHTML = number + num;
};

// functior clear all number
function clearDisplay() {
  document.getElementById('display').innerHTML = "";
};

//calculate function
function calculate() {
  const display = document.getElementById('display').innerHTML;
  if(display) {
    document.getElementById('calculate').innerHTML = display;
    document.getElementById('display').innerHTML = eval(display);
  } else {
    document.getElementById('display').innerHTML = "input any";
  };
};

//clear
function clearNumber() {
  const display = document.getElementById('display').innerHTML;
  const number = result.substring(1);
  document.getElementById('display').innerHTML = number;
  document.getElementById('calculate').inert = display;
};