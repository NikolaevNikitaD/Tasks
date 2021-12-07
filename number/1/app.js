let num = +prompt("Введите число");

while (isNaN(num)) {
    alert("Некорректные данные");
    num = +prompt("Введите число");
}
alert((num ** (1 / 2)).toFixed(2));
