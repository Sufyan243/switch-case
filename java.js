first_name = "sufyan" 
console.log(first_name);
let user_input = prompt("Enter No1");
let num1 = parseFloat(user_input);
let user_input2 = prompt("Enter No2");
let num2 = parseFloat(user_input2);
const operator = prompt("Enter operator (+, -, *, /,%): ");


let result;

    switch (operator) {
        case '+':
            result =  num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                result = 'Error! Division by zero.';
            }
            break;
            case '%':
            if (num2 !== 0) {
                result = num1 % num2;
            } else {
                result = 'Error! modulus  by zero.';
            }
        default:
            result = 'Error! Operator is not correct.';
            break;
    }

    document.write(`${result}`)