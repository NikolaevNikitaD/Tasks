let obj = {};
let n = +prompt("Введите n");
let rez = "false";

while (isNaN(n) || n === 0) {
    n = +prompt("Введите n");
}

for (let i = 1; i <= n; i++) {
    obj[i] = prompt("Введите название города");
}
for (i = 1; i <= n; i++) {
    if (obj[i] === "Минск") {
        rez = "true"
    }
}
console.log(rez)