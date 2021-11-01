let a = + (prompt("Введите оценку"));
let k = 0;

while (a >= 1 && a <=5) {
    if (a == 5) {
        k += 1;
    };
    a = + (prompt("Введите оценку"));
};
alert(k);
