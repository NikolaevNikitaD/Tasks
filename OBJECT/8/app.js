let obj = {};
let arr = [];
let sum = 0;
const n = +prompt("Введите n");

for (i = 0; i < n; i++) {
    arr[i] = +prompt("Введите число");
    sum += arr[i];
}
obj.avg = sum / n;
console.log(obj.avg)