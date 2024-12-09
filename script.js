firstOperand = ""
operater = ""
secondOperand = ""
const buttons = document.querySelectorAll("button")
attachEventListener()


function attachEventListener() {
    buttons.forEach(button => button.addEventListener("click", handleButtonClick))
}

function handleButtonClick(event) {
    const hist = document.querySelector(".hist");
    const mainScreen = document.querySelector(".mainScreen")

    if (event.target.classList.contains("num")) {
        if (hist.textContent.length == 0) {
            mainScreen.textContent += event.target.textContent
        }
        else if (hist.textContent.length > 0) {
            secondOperand += event.target.textContent
            mainScreen.textContent = secondOperand
        }
    }
    else if (event.target.classList.contains("operator")) {
        if (hist.textContent.length > 0) {
            mainScreen.textContent = operate(firstOperand, operater, secondOperand)
            hist.textContent = mainScreen.textContent + event.target.textContent
            firstOperand = mainScreen.textContent
            operater = event.target.textContent
            secondOperand = ""
        }
        else {
            firstOperand = mainScreen.textContent
            operater = event.target.textContent
            hist.textContent = mainScreen.textContent + event.target.textContent
        }
    }
    else if (event.target.classList.contains("AC")) {
        hist.textContent = ""
        mainScreen.textContent = ""
        firstOperand = ""
        secondOperand = ""
        operater = ""
    }
    else if (event.target.classList.contains("DEL")) {
        mainScreen.textContent = mainScreen.textContent.slice(0, -1)
        firstOperand = ""
        secondOperand = ""
    }
    else if (event.target.classList.contains("point")) {
        if (!hist.textContent.includes(".")) {
            mainScreen.textContent += event.target.textContent
            secondOperand = mainScreen.textContent
        }
    }
    else if (event.target.classList.contains("equals")) {
        hist.textContent = firstOperand + operater + secondOperand
        mainScreen.textContent = operate(firstOperand, operater, secondOperand)
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
    return num.toFixed(2)
}

function subtract(x, y) {
    num = parseFloat(x) - parseFloat(y)
    return num.toFixed(2)
}

function multiply(x, y) {
    num = parseFloat(x) * parseFloat(y)
    return num.toFixed(2)
}

function divide(x, y) {
    num = parseFloat(x) / parseFloat(y)
    return num.toFixed(2)
}
