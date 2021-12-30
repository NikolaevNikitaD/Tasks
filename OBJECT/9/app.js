let obj = {};
let n = +prompt("Введите n");

while (isNaN(n) || n === 0) {
    n = +prompt("Введите n");
}

for (let i = 1; i <= n; i++) {
    obj[i] = Math.floor(Math.random() * 201 - 100);
}
console.log(obj)