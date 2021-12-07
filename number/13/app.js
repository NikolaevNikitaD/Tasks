let n = +prompt("Введите число");

while (isNaN(n)) {
    alert("Некорректные данные");
    n = +prompt("Введите число");
}
alert((5 / 9) * (n - 32))