let a = +(prompt("Введите число"));
let max = a % 10;
let rez = "YES";

while (a > 0) {
    if (a % 10 < max) {
        rez = "NO"
    };
    max = a % 10;
    a = (a - a % 10) / 10;
};
alert(rez);