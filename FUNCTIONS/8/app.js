let n = prompt("Введите число");

function check (n) {
    while (n.trim() === "" || isNaN(n)) {
        alert ("Некорректный ввод");  
        n = prompt("Введите число");
    }
    return n;
}
function func(n) {
    n = Number(n).toString(2);
    return n;
}   
alert(func(check(n)))