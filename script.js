firstOperand = ""
operater = ""
secondOperand = ""
const buttons = document.querySelectorAll("button")
attachEventListener()


function attachEventListener() {
    buttons.forEach(button => button.addEventListener("click", handleButtonClick))
    document.addEventListener("keydown", handleKeyboard);
}

function handleButtonClick(event) {
    input = handleInput(event)
    const hist = document.querySelector(".hist");
    const mainScreen = document.querySelector(".mainScreen")

    if (event.target.classList.contains("num")) {
        handleNumClicked(input)
    }
    else if (event.target.classList.contains("operator")) {
        handleOperatorClicked(input)
    }
    else if (event.target.classList.contains("AC")) {
        handleDeleteClicked(input)
    }
    else if (event.target.classList.contains("DEL")) {
        handleBackspaceClicked(input)
    }
    else if (event.target.classList.contains("point")) {
        handlePointClicked(input)
    }
    else if (event.target.classList.contains("equals")) {
        handleEqualsClicked(input)
    }

}

function handleNumClicked(input) {
    const hist = document.querySelector(".hist");
    const mainScreen = document.querySelector(".mainScreen")
    if (hist.textContent.length == 0) {
        mainScreen.textContent += input
    }
    else if (hist.textContent.includes("=")) {
        mainScreen.textContent += input
        firstOperand = mainScreen
    }
    else if (hist.textContent.length > 0) {
        secondOperand += input
        mainScreen.textContent = secondOperand
    }
}

function handleOperatorClicked(input) {
    const hist = document.querySelector(".hist");
    const mainScreen = document.querySelector(".mainScreen")
    if (hist.textContent.includes("=")) {
        firstOperand = mainScreen.textContent
        operater = input
        hist.textContent = firstOperand + operater
    }
    else if (hist.textContent.length > 0) {
        if (secondOperand == 0) {
            alert("Are you DUMB! Why are you dividing by ZERO!!")
        }
        else {
            mainScreen.textContent = answer
            hist.textContent = mainScreen.textContent + input
            firstOperand = mainScreen.textContent
            operater = input
            secondOperand = ""
    }
    }
    else {
        firstOperand = mainScreen.textContent
        operater = input
        hist.textContent = mainScreen.textContent + input
    }
}

function handleEqualsClicked() {
    if (secondOperand == "" ) {
        return
    }
    else {
        if (secondOperand == 0) {
            alert("Are you DUMB! Why are you dividing by ZERO!!")
        }
        else {
            const hist = document.querySelector(".hist");
            const mainScreen = document.querySelector(".mainScreen")
            hist.textContent = firstOperand + operater + secondOperand + "="
            mainScreen.textContent = operate(firstOperand, operater, secondOperand)
            secondOperand = ""
        }
    }
}

function handleDeleteClicked() {
    const hist = document.querySelector(".hist");
    const mainScreen = document.querySelector(".mainScreen")
    hist.textContent = ""
    mainScreen.textContent = ""
    firstOperand = ""
    secondOperand = ""
    operater = ""
}

function handleBackspaceClicked() {
    const hist = document.querySelector(".hist");
    const mainScreen = document.querySelector(".mainScreen")
    mainScreen.textContent = mainScreen.textContent.slice(0, -1)
    firstOperand = ""
    secondOperand = ""
}

function handlePointClicked(input) {
    const hist = document.querySelector(".hist");
    const mainScreen = document.querySelector(".mainScreen")
    if (!mainScreen.textContent.includes(".")) {
        mainScreen.textContent += input
        secondOperand = mainScreen.textContent
    }
}


































function operate(firstOperand, sign, secondOperand) {
    switch (sign) {
        case '+':
            return add(firstOperand, secondOperand)
        case '-':
            return subtract(firstOperand, secondOperand)
        case '×':
            return multiply(firstOperand, secondOperand)
        case '÷':
            return divide(firstOperand, secondOperand)

    }
}

function add(x, y) {
    num = parseFloat(x) + parseFloat(y)
    if (num.toString().includes(".")) {
        return parseFloat(num).toFixed(4)
    }
    else if (num.toString().length > 12) {
        return parseFloat(num).toExponential(2)
    }
    return num
}

function subtract(x, y) {
    num = parseFloat(x) - parseFloat(y)
    if (num.toString().includes(".")) {
        return parseFloat(num).toFixed(4)
    }
    else if (num.toString().length > 12) {
        return parseFloat(num).toExponential(2)
    }
    return num
}

function multiply(x, y) {
    num = parseFloat(x) * parseFloat(y)
    if (num.toString().includes(".")) {
        return parseFloat(num).toFixed(4)
    }
    else if (num.toString().length > 12) {
        return parseFloat(num).toExponential(2)
    }
    return num
}

function divide(x, y) {
    num = parseFloat(x) / parseFloat(y)
    if (num.toString().includes(".")) {
        return parseFloat(num).toFixed(4)
    }
    else if (num.toString().length > 12) {
        return parseFloat(num).toExponential(2)
    }
    return num
}











function handleKeyboard(event) {
    input = handleInput(event)
    const key = event.key; 

    switch (key) {
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
        case '0':
            handleNumClicked(input);
            break;

        case '*':
        case '/':
        case '+':
        case '-':
            handleOperatorClicked(input);
            break;

        case '.':
            handlePointClicked(input);
            break;

        case '=':
        case 'Enter': 
            handleEqualsClicked();
            break;

        case 'Delete': 
            handleDeleteClicked();
            break;

        case 'Backspace': 
            handleBackspaceClicked();
            break;

        default:
            break;
    }
}

function handleInput(event) {
    value = ""
    if (event.type === 'click') {
        value = event.target.textContent;
    } else if (event.type === 'keydown') {
        if (event.key == "*") {
            value = "×"; 
        }
        else if (event.key == "/") {
            value = "÷"
        }
        else {
            value = event.key
        }
    }
    return value;
}
