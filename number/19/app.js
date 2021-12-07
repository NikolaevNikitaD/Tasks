let p1 = +prompt("Введите число");
let q1 = +prompt("Введите число");
let p2 = +prompt("Введите число");
let q2 = +prompt("Введите число");

while (isNaN(p1) || isNaN(p2) || isNaN(q1) || isNaN(q2)) {
    alert("Некорректные данные");
    p1 = +prompt("Введите число");
    q1 = +prompt("Введите число");
    p2 = +prompt("Введите число");
    q2 = +prompt("Введите число");  
}
alert((((p1 - p2) ** 2 + (q1 - q2) ** 2) ** (1 / 2)))