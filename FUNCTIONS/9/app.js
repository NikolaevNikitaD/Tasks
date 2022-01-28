let n = prompt("Введите число");

function check (n) {
    while (n.trim() === "" || isNaN(n)) {
        alert ("Некорректный ввод");  
        n = prompt("Введите число");
    }
    return n;
}
function func_del(n) {
    let a = [];
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            a.push(i);
        }
    }
    return a;
}   
alert(func_del(check(n)))