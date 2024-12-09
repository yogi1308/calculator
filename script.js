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
        }
    }
    else if (event.target.classList.contains("equals")) {
        mainScreen.textContent = operate(hist.textContent)
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
    return parseFloat(x) + parseFloat(y)
}

function subtract(x, y) {
    return parseFloat(x) - parseFloat(y)
}

function multiply(x, y) {
    return parseFloat(x) * parseFloat(y)
}

function divide(x, y) {
    return parseFloat(x) / parseFloat(y)
}
