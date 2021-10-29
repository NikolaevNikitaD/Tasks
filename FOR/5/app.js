const m = +(prompt("Введите m"));
const n = +(prompt("Введите n"));

for (let i = m; i >= n; i--)
    i % 2 != 0 ? console.log(i) : null;