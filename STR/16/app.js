let str = prompt("Введите строку");
let rez = "NO";

str = str.toLowerCase();
if (str.includes("хорош") != 0) {
    rez = "YES";
}
alert(rez);