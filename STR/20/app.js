const str = prompt("Введите строку");
let rez = "NO";

if (str.endsWith(".com") != 0 || str.endsWith(".ru") != 0) {
    rez = "YES";
}
alert(rez);