let a = +prompt("Введите число");

while (isNaN(a)) {
    alert("Некорректные данные");
    a = +prompt("Введите число");
}
console.log(a);
console.log(a + 1);
console.log(a + 2);