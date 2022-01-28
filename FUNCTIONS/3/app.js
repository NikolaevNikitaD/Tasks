let str = prompt("Введите строку");

function check (str) {
    while (str.trim() === "" || str.match("[0-9]") || str.trim().length < 2) {
        alert ("Некорректный ввод");  
        str = prompt("Введите строку");
    }
    return str.trim();
}
function alphabet_order(str) {
    return str.split("").sort().join("");
}   
alert(alphabet_order(check(str)))