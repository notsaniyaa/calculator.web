// Получаем элементы
const inputField = document.querySelector('.calculator input');
const buttons = document.querySelectorAll('.calculator .buttons button');

let currentInput = ''; // Переменная для хранения текущего ввода

// Добавляем обработчики событий для кнопок
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (value === 'AC') {
            // Очистка поля ввода
            currentInput = '';
        } else if (value === 'DEL') {
            // Удаление последнего символа
            currentInput = currentInput.slice(0, -1);
        } else if (value === '=') {
            try {
                // Вычисляем выражение
                currentInput = eval(currentInput).toString();
            } catch (error) {
                currentInput = 'Error'; // Показываем ошибку
            }
        } else {
            // Добавляем символ к вводу
            currentInput += value;
        }

        // Обновляем поле ввода
        inputField.value = currentInput;
    });
});


// Конвертер температуры
let tempInput = document.getElementById('temp-input');
let tempSelect = document.getElementById('temp-select');
let tempOutput = document.getElementById('temp-output');
let convertTempButton = document.getElementById('convert-temp');

convertTempButton.addEventListener('click', () => {
    let value = parseFloat(tempInput.value);
    if (isNaN(value)) {
        tempOutput.textContent = "Please enter a valid number.";
        return;
    }

    if (tempSelect.value === 'c-to-f') {
        tempOutput.textContent = `Result: ${(value * 9/5 + 32).toFixed(2)} °F`;
    } else if (tempSelect.value === 'f-to-c') {
        tempOutput.textContent = `Result: ${((value - 32) * 5/9).toFixed(2)} °C`;
    }
});

// Конвертер расстояния
let distInput = document.getElementById('dist-input');
let distSelect = document.getElementById('dist-select');
let distOutput = document.getElementById('dist-output');
let convertDistButton = document.getElementById('convert-dist');

convertDistButton.addEventListener('click', () => {
    let value = parseFloat(distInput.value);
    if (isNaN(value)) {
        distOutput.textContent = "Please enter a valid number.";
        return;
    }

    if (distSelect.value === 'km-to-mi') {
        distOutput.textContent = `Result: ${(value * 0.621371).toFixed(2)} miles`;
    } else if (distSelect.value === 'mi-to-km') {
        distOutput.textContent = `Result: ${(value / 0.621371).toFixed(2)} kilometers`;
    }
});
