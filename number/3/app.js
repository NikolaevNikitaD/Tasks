let a = +prompt("Введите а");
let b = +prompt("Введите b");

while (isNaN(a) || isNaN(b)) {
    alert("Некорректные данные");
    a = +prompt("Введите а");
    b = +prompt("Введите b");
}
alert(`Результат ${a ** b}`);
