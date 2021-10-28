const m = + (prompt("Введите m"));
const n = + (prompt("Введите n"));

for (let i = m; i <= n; i++) {
    if (i % 17 == 0 || (i + 1) % 10 == 0 || i % 15 == 0) {
        console.log(i);
    }
};