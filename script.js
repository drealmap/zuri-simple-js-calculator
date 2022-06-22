const operator = prompt('Enter operator ( +, -, * or / ): ');

const number1 = parseFloat(prompt('Enter first number: '));
const number2 = parseFloat(prompt('Enter second number: '));

let result;

if (isNaN(number1) || isNaN(number2)) {
    alert('Please reload the page and type a valid number')
} else{
    if (operator == '+') {
        result = number1 + number2;
    }
    else if (operator == '-') {
        result = number1 - number2;
    }
    else if (operator == '*') {
        result = number1 * number2;
    }
    else {
        result = number1 / number2;
    }

    document.write(number1 + operator + number2 + "=" + result);
}
