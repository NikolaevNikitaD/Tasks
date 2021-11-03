const a = +(prompt("Введите число"));
let d = 2;

while (d <= a) {
    if (a % d == 0) break;
    d += 1;
}
alert(d);