let cost = + (prompt("Введите сумму"));

let a = 0;
let b=0;
let c=0;
let d=0;

while (a * 25 <= cost) {
    a += 1;
};
cost = cost % 25;
while (b * 10 <= cost) {
    b += 1;
};
cost = cost % 10;
while (c * 5 <= cost) {
    c += 1;
};
cost = cost % 5;
while (d * 1 <= cost) {
    d += 1;
};
alert(a + b + c + d - 4);
