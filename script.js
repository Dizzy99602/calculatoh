document.addEventListener('DOMContentLoaded', function() {
  const display = document.querySelector('.display');
  let currInput = '';
  let a = null;
  let b = null;
  let op = null;

  function updateDisplay(value) {
    display.textContent = value;
  }

  function handleButtonClick(event) {
    const button = event.target;
    const value = button.textContent;

    if(button.id === 'clear') {
      currInput = '';
      a = null;
      b = null;
      op = null;
      updateDisplay('');
    }
    else if(button.id == 'equal') {
      if(a !== null && op !== null) {
        b = parseFloat(currInput);
        const result = operate(op, a, b);
        currInput = result;
        updateDisplay(result);
        a = null;
        b = null;
        op = null;
      }
    }
    else if(['plus', 'minus', 'nultiply', 'divide'].includes(button.id)) {
      if(currInput !== '') {
        a = parseFloat(currInput);
        currInput = '';
        op = value;
      }
    }
    else {
      currInput += value;
      updateDisplay(currInput);
    }
  }

  const buttons = document.querySelectorAll('.button');
  buttons.forEach(button => button.addEventListener('click', handleButtonClick));

});

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if(b == 0) return "INFINTE";

  return a / b;
}


function operate(op, a, b) {
  switch(op) {
    case '+':
      return add(a, b);

    case '-':
      return subtract(a, b);

    case '*':
      return multiply(a, b);

    case '/':
      return divide(a, b);

    default:
      return null;
  }
}
