let n = +prompt("Введите n");
let arr = [];
while (isNaN(n)) {
    alert("Некорректные данные");
    n = +prompt("Введите n");
}
while (n === 0) {
    alert("Длина массива 0");
    n = +prompt("Введите n");
}
for (let i = 0; i < n; i++) {
    arr[i] = Math.floor(Math.random() * 201 - 100);
}
alert(arr);
alert(Math.max.apply(Math, arr));
alert(Math.min.apply(Math, arr));