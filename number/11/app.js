let n = +prompt("Введите число");
let f = 1;

while (isNaN(n)) {
    alert("Некорректные данные");
    n = +prompt("Введите число");
}
while (n < 0) {
    alert("INFINITY");
    n = +prompt("Введите число");
}
for (let i = 1; i <= n; i++) {
    f *= i;
}
alert(f);