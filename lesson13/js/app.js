1.
let username = "Алфия";
console.log(`привет, ${username}! Добро пожаловать!`);

2
const numbers = [10, 23, -5, 7, 12];
for  (let i = 0; i < numbers.length; 
i++) {
    console.log('Число {$i + 1}: ${numbers[i]}');
}

3
const colors = ["Красный", "Синий", "Зеленый", "Желтый", "Фиолетовый"];
for (let color of colors) {
    if (color === "Красный") {
        console.log('${color} - цвет найден')
    }
    }
4.
for (let i = 1; 1 <= 10; i++) {
    console.log('Текущий номер ${i}');
}

5.
const number = 42;
if (number % 2 ===0) {
    console.log('${number} - четное число');
} else {
    console.log('${numbers} - нечетное число');
}