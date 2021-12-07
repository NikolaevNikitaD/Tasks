let a = +prompt("Введите а");
let b = +prompt("Введите b");

while (isNaN(a) || isNaN(b)) {
    alert("Некорректные данные");
    a = +prompt("Введите а");
    b = +prompt("Введите b");
}
if (a % b === 0) {
    alert(`Делится. ${a / b}`);
} else {
    alert(`Делится с остатком ${a % b}`);
}