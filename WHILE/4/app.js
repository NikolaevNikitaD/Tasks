let a = +(prompt("Введите оценку"));
let k = 0;

while (a >= 1 && a <= 5) {
    a === 5 ? k += 1 : null;
    a = +(prompt("Введите оценку"));
};
alert(k);