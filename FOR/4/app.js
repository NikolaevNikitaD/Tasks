const m = + (prompt("Введите m"));
const n = + (prompt("Введите n"));

if (m < n) {
    for (let i = m; i <= n; i++) {
        console.log(i);
    }
} else {
    for (let i = m; i >= n; i--) {
        console.log(i);
    }
};