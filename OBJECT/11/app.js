let obj = {};
let n = +prompt("Введите n");

for (let i = 1; i <= n; i++) {
    obj[i] = prompt("Введите название города");
}
let obj1 = obj;
for (i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
        if (obj[i] === obj1[j] && i !== j) {
            delete obj[i]
        }
    }
}


console.log(obj)