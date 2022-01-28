let str = prompt("Введите строку");

function check (str) {
    while (str.trim() === "" || str.match("[0-9]") || str.trim().length < 2) {
        alert ("Некорректный ввод");  
        str = prompt("Введите строку");
    }
    return str.trim();
}
function polindrom(str) {
    if (str.toLowerCase() === str.toLowerCase().split("").reverse().join("")) {
        alert("Полиндром");
    } else {
        alert("Не полиндром");
    }
}   
polindrom(check(str))