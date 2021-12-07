let n = +prompt("Введите число");

while (isNaN(n)) {
    alert("Некорректные данные");
    n = +prompt("Введите число");
}
alert(Math.floor((n % 1) * 10))