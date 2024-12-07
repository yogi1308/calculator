const buttons = document.querySelectorAll("button")
attachEventListener()


function attachEventListener() {
    buttons.forEach(button => button.addEventListener("click", handleButtonClick))
}

function handleButtonClick(event) {
    const equationDiv = document.querySelector(".equation");
    if (event.target.classList.contains("num")) {
        equationDiv.textContent += event.target.textContent
    }
    else if (event.target.classList.contains("operator")) {
        equationDiv.textContent += event.target.textContent
    }
    else if (event.target.classList.contains("AC")) {
        equationDiv.textContent = ""
    }
    else if (event.target.classList.contains("DEL")) {
        equationLength = equationDiv.textContent.length
        equationDiv.textContent = equationDiv.textContent.slice(0, -1)
    }
    else if (event.target.classList.contains("point")) {
        if (!equationDiv.textContent.includes(".")) {
            equationDiv.textContent += event.target.textContent
        }
    }
}

function operate(firstOperand, sign, secondOperand) {
    switch (sign) {
        case '+':
            add(firstOperand, secondOperand)
            break
        case '-':
            subtract(firstOperand, secondOperand)
            break
        case '*':
            multiply(firstOperand, secondOperand)
            break
        case '/':
            divide(firstOperand, secondOperand)
            break

    }
}

function add(x, y) {
    return x + y
}

function subtract(x, y) {
    return x - y
}

function multiply(x, y) {
    return x * y
}

function divide(x, y) {
    return x / y
}
