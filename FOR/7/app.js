const a = +(prompt("Введите a"));
const b = +(prompt("Введите b"));
let sum = 0;

for (let i = a; i <= b; i++)
    (i ** 3) % 10 == 4 || (i ** 3) % 10 == 9 ? sum += 1 : null;

alert(`Всего чисел ${sum}`);