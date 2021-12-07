let a = +prompt("Введите а");
let b = +prompt("Введите b");
let c = +prompt("Введите с");

while (isNaN(a) || isNaN(b) || isNaN(c)) {
    alert("Некорректные данные");
    a = +prompt("Введите а");
    b = +prompt("Введите b");
    c = +prompt("Введите с");
}
alert(a + b + c);