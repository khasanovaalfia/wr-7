/// Уровень 1 - Базовый
// Задача 1
let username = "Алфия";
console.log(`Привет, ${username}! Добро пожаловать!`);

// Задача 2
const numbers = [10, 23, -5, 7, 12];
for  (let i = 0; i < numbers.length;
i++) {
    console.log('Число {$i + 1}: ${numbers[i]}');
}

// Задача 3
const colors = ["Красный", "Синий", "Зеленый", "Желтый", "Фиолетовый"];
for (let color of colors) {
    if (color === "Красный") {
        console.log('${color} - цвет найден')
    }
    }
// Задача 4
for (let i = 1; 1 <= 10; i++) {
    console.log('Текущий номер ${i}');
}

// Задача 5
const number = 42;
if (number % 2 ===0) {
    console.log('${number} - четное число');
} else {
    console.log('${numbers} - нечетное число');
}

///Уровень 2 - Средний
// Задача 1
let grades = [4, 5, 3, 4, 5];
let sum = 0;
for(let i = 0; i < grades.length; i++) {
    sum += grades[i];
}
let average = sum / grades.length;
console.log(`Средняя оценка: ${average}`);

// Задача 2
for(let i = 2; i <= 20; i += 2) {
    console.log(i);
}

// Задача 3
let cities = ["Москва", "Санкт-Петербург", "Казань", "Екатеринбург"];
let longestCity = "";
for(let i = 0; i < cities.length; i++) {
    if(cities[i].length > longestCity.length) {
        longestCity = cities[i];
    }
}
console.log(`Самое длинное название: ${longestCity}`);

// Задача 4
for(let i = 10; i >= 1; i--) {
    console.log(i);
}

// Задача 5
let products = [
    {name: "яблоко", price: 50},
    {name: "банан", price: 40},
    {name: "апельсин", price: 60},
    {name: "груша", price: 55}
];

let maxPrice = 0;
let expensiveProduct = {};

for(let i = 0; i < products.length; i++) {
    if(products[i].price > maxPrice) {
        maxPrice = products[i].price;
        expensiveProduct = products[i];
    }
}
console.log(`Самый дорогой товар: ${expensiveProduct.name} (${maxPrice} руб.)`);

///Уровень 3 - Продвинутый
// Задача 1
function guessNumber() {
    let randomNumber = Math.floor(Math.random() * 10) + 1;
    let guess = parseInt(prompt("Угадайте число от 1 до 10:"));
    
    while(guess !== randomNumber) {
        guess = parseInt(prompt("Попробуйте еще раз:"));
    }
    alert("Вы угадали!");
}
guessNumber();

// Задача 2
function getPositiveNumbers(numbers) {
    let positive = [];
    for(let i = 0; i < numbers.length; i++) {
        if(numbers[i] > 0) {
            positive.push(numbers[i]);
        }
    }
    return positive;
}

// Задача 3
function bubbleSort(words) {
    let swapped;
    do {
        swapped = false;
        for(let i = 0; i < words.length; i++) {
            if(words[i] > words[i + 1]) {
                let temp = words[i];
                words[i] = words[i + 1];
                words[i + 1] = temp;
                swapped = true;
            }
        }
    } while(swapped);
    return words;
}

// Задача 4
function isPalindrome(str) {
    str = str.toLowerCase().replace(/[^a-z0-9]/gi, '');
    let reversed = str.split('').reverse().join('');
    return str === reversed;}