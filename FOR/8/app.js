let sum = 0;
const n = + (prompt("Введите N"));

for (let i = 1; i <= n; i++) {
    let a = + (prompt(`Введите целое число №${i}`));
    sum += a;
};
alert(sum);