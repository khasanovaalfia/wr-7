/// Уровень 1 - Базовый

// 1. Переменная с именем и приветствие
let username = "Алфия";
console.log(`Привет, ${username}! Добро пожаловать!`);

// 2. Массив из 5 чисел и вывод каждого числа
const numbers = [10, 23, -5, 7, 12];
for (let i = 0; i < numbers.length; i++) {
    console.log(`Число ${i + 1}: ${numbers[i]}`);
}

// 3. Массив цветов и проверка на наличие "Красный"
const colors = ["Красный", "Синий", "Зеленый", "Желтый", "Фиолетовый"];
for (let color of colors) {
    if (color === "Красный") {
        console.log(`${color} - цвет найден`);
    }
}

// 4. Цикл от 1 до 10
for (let i = 1; i <= 10; i++) {
    console.log(`Текущий номер ${i}`);
}

// 5. Проверка числа на четность
const number = 42;
if (number % 2 === 0) {
    console.log(`${number} - четное число`);
} else {
    console.log(`${number} - нечетное число`);
}

/// Уровень 2 - Средний

// 1. Средняя оценка студента
let grades = [4, 5, 3, 4, 5];
let sum = 0;
for (let i = 0; i < grades.length; i++) {
    sum += grades[i];
}
let average = sum / grades.length;
console.log(`Средняя оценка: ${average}`);

// 2. Только четные числа от 2 до 20
for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}

// 3. Самое длинное название города
let cities = ["Москва", "Санкт-Петербург", "Казань", "Екатеринбург"];
let longestCity = "";
for (let i = 0; i < cities.length; i++) {
    if (cities[i].length > longestCity.length) {
        longestCity = cities[i];
    }
}
console.log(`Самое длинное название: ${longestCity}`);

// 4. Обратный отсчет от 10 до 1
for (let i = 10; i >= 1; i--) {
    console.log(i);
}

// 5. Самый дорогой товар
let products = [
    { name: "яблоко", price: 50 },
    { name: "банан", price: 40 },
    { name: "апельсин", price: 60 },
    { name: "груша", price: 55 }
];
let maxPrice = 0;
let expensiveProduct = null;
for (let i = 0; i < products.length; i++) {
    if (products[i].price > maxPrice) {
        maxPrice = products[i].price;
        expensiveProduct = products[i];
    }
}
if (expensiveProduct) {
    console.log(`Самый дорогой товар: ${expensiveProduct.name} (${maxPrice} руб.)`);
}

/// Уровень 3 - Продвинутый

// 1. Угадай число
function guessNumber() {
    let randomNumber = Math.floor(Math.random() * 10) + 1;
    let guess = parseInt(prompt("Угадайте число от 1 до 10:"));
    while (guess !== randomNumber) {
        guess = parseInt(prompt("Попробуйте еще раз:"));
    }
    alert("Вы угадали!");
}
// guessNumber(); // Раскомментируйте для запуска

// 2. Функция возвращает только положительные числа
function getPositiveNumbers(numbers) {
    let positive = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > 0) {
            positive.push(numbers[i]);
        }
    }
    return positive;
}
// Пример использования:
// console.log(getPositiveNumbers([-2, 3, 0, 5, -7]));

// 3. Сортировка массива слов по алфавиту (без sort)
function bubbleSort(words) {
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < words.length - 1; i++) {
            if (words[i] > words[i + 1]) {
                let temp = words[i];
                words[i] = words[i + 1];
                words[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
    return words;
}
// Пример использования:
// console.log(bubbleSort(["банан", "арбуз", "яблоко", "груша"]));

// 4. Проверка строки на палиндром
function isPalindrome(str) {
    str = str.toLowerCase().replace(/[^a-zа-я0-9]/gi, '');
    let reversed = str.split('').reverse().join('');
    return str === reversed;
}
// Пример использования:
// console.log(isPalindrome("А роза упала на лапу Азора"));

// 5. Система оценок: только студенты со средним баллом выше 4
let students = [
    { name: "Иван", grades: [5, 4, 5, 5] },
    { name: "Мария", grades: [3, 4, 4, 3] },
    { name: "Петр", grades: [5, 5, 5, 5] },
    { name: "Анна", grades: [4, 4, 4, 5] }
];
for (let student of students) {
    let sum = 0;
    for (let grade of student.grades) {
        sum += grade;
    }
    let avg = sum / student.grades.length;
    if (avg > 4) {
        console.log(`${student.name} - средний балл: ${avg}`);
    }
}