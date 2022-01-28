let str = prompt("Введите строку");

function check (str) {
    while (str.trim() === "") {
        str = prompt("Введите строку");  
    }
    return str.trim();
}
function MYreverse(str) {
    str = split("").reverse().join("");
    return str;
 }   
 alert(MYreverse(check(str)))