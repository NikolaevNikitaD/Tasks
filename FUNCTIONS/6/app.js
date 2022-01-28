let n = prompt("Введите число");

function check (n) {
    while (n.trim() === "" || isNaN(n)) {
        alert ("Некорректный ввод");  
        n = prompt("Введите число");
    }
    return n;
}
function test_prime(n) {
    let result = true;
    if (n < 2) {
        result = false;
    } else {
        for (let i = 2; i < n; i++) {
            if (n % i === 0) {
                result = false;
                break;
            }
        }
    }
    return result;
}   
alert(test_prime(check(n)))