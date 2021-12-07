let a = +prompt("Введите число");

while (isNaN(a)) {
    alert("Некорректные данные");
    a = +prompt("Введите число");
}
console.log(a ** 3);
console.log((6 * a) ** 2);