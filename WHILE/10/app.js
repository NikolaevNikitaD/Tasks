const n = +(prompt("Введите число"));
let i = 0;

while (i < n) {
    i += 1;
    if ((i >= 5 && i <= 9) || (i >= 17 && i <= 37) || (i >= 78 && i <= 87)) continue;
    console.log(i);
};