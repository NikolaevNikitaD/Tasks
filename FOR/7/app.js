const a = + (prompt("Введите a"));
const b = + (prompt("Введите b"));
let sum = 0;

for (let i = a; i <= b; i++) {
    if ((i ** 3) % 100 == 4 || (i ** 3) % 100 == 9) {
        sum += 1;
    }
};
alert(`Всего чисел ${sum}`);