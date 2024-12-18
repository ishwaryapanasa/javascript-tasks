// Select DOM elements
let display = document.getElementById('display'); // The input field where the numbers are shown
let numberButtons = document.querySelectorAll('.btn:not(.operator):not(.equal):not(.clear):not(#delete)'); // Select all number buttons
let operatorButtons = document.querySelectorAll('.operator'); // Select all operator buttons
let equalsButton = document.querySelector('.equal'); // Equals button (=)
let clearButton = document.querySelector('.clear'); // Clear button (C)
let deleteButton = document.querySelector('#delete'); // Delete button (DEL)

// Initialize variables
let currentInput = ""; // For the current number
let previousInput = ""; // For the number before the operator
let operator = ""; // The operator (+, -, *, /)

// Function to update the display
function updateDisplay(value) {
    display.value = value;
}

// Attach event listeners to number buttons
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        appendNumber(button.textContent);  // Get button's text and append it
    });
});

// Attach event listeners to operator buttons
operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        appendOperator(button.textContent);  // Get button's text and set as operator
    });
});

// Attach event listener to equals button
equalsButton.addEventListener('click', calculateResult);

// Attach event listener to clear button
clearButton.addEventListener('click', clearDisplay);

// Attach event listener to delete button
deleteButton.addEventListener('click', deleteLast);

// Function to handle number button clicks (appends the number to current input)
function appendNumber(number) {
    currentInput += number.toString(); // Add the number to the current input
    updateDisplay(previousInput + " " + operator + " " + currentInput); // Update the display with the number and operator
}

// Function to handle operator button clicks
function appendOperator(op) {
    if (currentInput === "") return; // Prevent operator click if currentInput is empty

    if (previousInput !== "" && currentInput !== "") {
        calculateResult(); // If there's already a calculation, compute it first
    }

    operator = op; // Set the operator
    previousInput = currentInput; // Store current input as previous input
    currentInput = ""; // Reset current input for the next number
    updateDisplay(previousInput + " " + operator); // Update display
}

// Function to calculate the result
function calculateResult() {
    if (previousInput === "" || currentInput === "") return; // If either input is empty, do nothing

    let result;

    switch (operator) {
        case "+":
            result = parseFloat(previousInput) + parseFloat(currentInput);
            break;
        case "-":
            result = parseFloat(previousInput) - parseFloat(currentInput);
            break;
        case "*":
            result = parseFloat(previousInput) * parseFloat(currentInput);
            break;
        case "/":
            if (parseFloat(currentInput) === 0) {
                result = "Error"; // Handle division by zero
            } else {
                result = parseFloat(previousInput) / parseFloat(currentInput);
            }
            break;
        default:
            return;
    }

    updateDisplay(result); // Show the result
    currentInput = result.toString(); // Save the result for the next calculation
    previousInput = ""; // Reset previous input
    operator = ""; // Reset operator
}

// Function to clear the display
function clearDisplay() {
    currentInput = "";
    previousInput = "";
    operator = "";
    updateDisplay(""); // Clear the display
}

// Function to delete the last character from the current input
function deleteLast() {
    currentInput = currentInput.slice(0, -1); // Remove the last character
    updateDisplay(previousInput + " " + operator + " " + currentInput); // Update display
}
