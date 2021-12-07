let p1 = +prompt("Введите число");
let p2 = +prompt("Введите число");
let q1 = +prompt("Введите число");
let q2 = +prompt("Введите число");

while (isNaN(p1) || isNaN(p2) || isNaN(q1) || isNaN(q2)) {
    alert("Некорректные данные");
    p1 = +prompt("Введите число");
    p2 = +prompt("Введите число");
    q1 = +prompt("Введите число");
    q2 = +prompt("Введите число");  
}
alert(Math.abs(p1 - q1) + Math.abs(p2 - q2))