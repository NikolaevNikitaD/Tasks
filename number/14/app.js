let n = +prompt("Введите число");

while (isNaN(n)) {
    alert("Некорректные данные");
    n = +prompt("Введите число");
}
if (n === 1 || n === 2) {
    alert(n * 10.5);
} else {
    alert((n - 2) * 4 + 21);
}
