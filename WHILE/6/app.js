let a = +(prompt("Введиет число"));
let min = a % 10;
let max = 0;

while (a > 0) {
    if (a % 10 >= max) {
        max = a % 10;
    } else if (a % 10 <= min) {
        min = a % 10;
    };
    a = (a - a % 10) / 10;
};
console.log(`Максимальная цифра равна ${max}`);
console.log(`Минмиальная цифра равна ${min}`);