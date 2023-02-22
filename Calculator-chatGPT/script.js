let display = document.getElementById('result');

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Error';
    }
}
