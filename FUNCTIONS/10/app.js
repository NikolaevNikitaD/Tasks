let n = prompt("Введите число");
let b = prompt("Введите число");

function check (n) {
    while (n.trim() === "" || isNaN(n)) {
        alert ("Некорректный ввод");  
        n = prompt("Введите число");
    }
    return n;
}
function power(n, b) {
    return Number(n) ** Number(b);
}   
n = check(n);
b = check(b);
alert(power(n, b))