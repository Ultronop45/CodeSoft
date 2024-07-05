let display = document.getElementById('display');
let currentInput = '';

function appendCharacter(char) {
    if (display.innerText === '0' && char !== '.') {
        display.innerText = char;
    } else {
        display.innerText += char;
    }
    currentInput += char;
}

function clearDisplay() {
    display.innerText = '0';
    currentInput = '';
}

function deleteCharacter() {
    display.innerText = display.innerText.slice(0, -1);
    if (display.innerText === '') {
        display.innerText = '0';
    }
    currentInput = currentInput.slice(0, -1);
}

function calculateResult() {
    try {
        currentInput = currentInput.replace(/%/g, '/100');
        display.innerText = eval(currentInput);
        currentInput = display.innerText;
    } catch (e) {
        display.innerText = 'Error';
        currentInput = '';
    }
}