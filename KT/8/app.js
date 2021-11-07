let n = +prompt("Введите n");

while (n >= 1000) {
    n = (n - n % 10) / 10;
};
alert(n % 10);