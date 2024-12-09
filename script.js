const buttons = document.querySelectorAll("button")
attachEventListener()


function attachEventListener() {
    buttons.forEach(button => button.addEventListener("click", handleButtonClick))
}

function handleButtonClick(event) {
    const equationDiv = document.querySelector(".equation");
    const answerDiv = document.querySelector(".answer")
    firstOperand = ""
    operator = ""
    secondOperand = ""
    if (event.target.classList.contains("num")) {
        equationDiv.textContent += event.target.textContent
    }
    else if (event.target.classList.contains("operator")) {
        equationDiv.textContent += event.target.textContent
    }
    else if (event.target.classList.contains("AC")) {
        equationDiv.textContent = ""
        answerDiv.textContent = ""
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
    else if (event.target.classList.contains("equals")) {
        answerDiv.textContent = operate(equationDiv.textContent)
    }

}

function operate(equation) {
    
}

// function operate(firstOperand, sign, secondOperand) {
//     switch (sign) {
//         case '+':
//             add(firstOperand, secondOperand)
//             break
//         case '-':
//             subtract(firstOperand, secondOperand)
//             break
//         case '*':
//             multiply(firstOperand, secondOperand)
//             break
//         case '/':
//             divide(firstOperand, secondOperand)
//             break

//     }
// }

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
