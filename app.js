

const buttons = document.querySelectorAll('button');
const numbers = document.querySelectorAll('.number');
const screen = document.querySelector('.screen');
const operatorBtns = document.querySelectorAll(('.operator-buttons'))

screen.textContent = 0; // make start number in screen 0.
// startNumber = screen.textContent; 

// when number button is it appears in the screen replacing start number. 
numbers.forEach((number) => {
    number.addEventListener('click', () => {
        if (screen.textContent == 0) {  // if screen number is 0 replace 0 with number pressed.
            screen.textContent = number.value;
            console.log(number.value);
        }   else {  // if screen number is not zero then append number instead of replace.
            screen.textContent += number.value;
        }

    });
});

operatorBtns.forEach((operatorBtn) => {
    operatorBtn.addEventListener('click', () => {
        screen.textContent += operatorBtn.value;
    });
});

// Note to self --> when the buttons are pressed you need to store the value of the numbers 
//                  and pass through the equation operators. then display in screen.
//              --> work on the operator buttons being appended after the numbers.
//              --> perhaps think about the function that will store the equation - how to stop
//                  the operator buttons being pressed multiple times in the same equation.
//              --> generally think about storing data, equations, functions etc within functions /
//                  or variables of somekind.

// buttons.forEach((button) => {
//     button.addEventListener('click', () => {
//         console.log(button.value);
//     });
// });




let firstNum = 10;
let secondNum = 5;
let operator = add;

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
    return a / b;
}



function operate() {
    if (operator === add) {
        let addNum = add(firstNum, secondNum);
        return addNum;
    }   else if (operator === subtract) {
        let subtractNum = subtract(firstNum, secondNum);
        return subtractNum;
    }   else if (operator === multiply) {
        let multiplyNum = multiply(firstNum, secondNum);
        return multiplyNum;
    }   else if (operator === divide) {
        let divideNum = divide(firstNum, secondNum);
        return divideNum;
    }
}

console.log(operate(firstNum, secondNum));