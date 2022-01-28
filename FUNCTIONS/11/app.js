let str = prompt("Введите строку");

function check (str) {
    while (str.trim() === "" || str.match("[0-9]")) {
        alert ("Некорректный ввод");  
        str = prompt("Введите строку");
    }
    return str.trim();
}
function JavaScript(str) {
    let a = [];
    str = str.split("");
    for (let i = 0; i < str.length; i++) {
        if (a.indexOf(str[i]) == -1) {
            a.push(str[i]);
        }
    }
    return a.join("");
}   
console.log(JavaScript(check(str)))