let a = +prompt("Введите число");
let b = +prompt("Введите число");
let c = +prompt("Введите число");

while (isNaN(a) || isNaN(b) || isNaN(c)) {
    alert("Некорректные данные");
    a = +prompt("Введите число");
    b = +prompt("Введите число");
    c = +prompt("Введите число");
}
if (b ** 2 - 4 * a * c < 0) {
    alert("Нет корней");
} else if (b ** 2 - 4 * a * c === 0) {
    alert(- b / (2 * a));
} else {
    alert(( - b - ((b ** 2 - 4 * a * c) ** (1 / 2))) / (2 * a));
    alert(( - b + ((b ** 2 - 4 * a * c) ** (1 / 2))) / (2 * a));
}

