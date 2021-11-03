let a = +(prompt("Введиет число"));
let sum = 0;
let p = 1;
let k = 0;
let r = a % 10;

while (a > 0) {
    sum += a % 10;
    k += 1;
    p *= a % 10;
    if (a > 0 && a < 10) {
        pc = a;
    }
    a = (a - a % 10) / 10;
};
console.log(`Сумма ${sum}`);
console.log(`Количество ${k}`);
console.log(`Произведение ${p}`);
console.log(`Среднее арифметическое ${sum / k}`);
console.log(`Первая цифра ${pc}`);
console.log(`Сумма первой и последней цифр ${r + pc}`);