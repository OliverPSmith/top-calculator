

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