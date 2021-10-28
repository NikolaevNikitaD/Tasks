const n = + (prompt("Введите n"));
let sum = 0;

for (let i = 1; i <= n; i++) {
    if ((i ** 2) % 10 == 2 || (i ** 2) % 10 == 5 || (i ** 2) % 10 == 8) {
        sum += i;
    }
};
alert(`Сумма таких чисел ${sum}`);