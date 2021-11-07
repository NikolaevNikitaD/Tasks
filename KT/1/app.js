const n = +prompt("Введите n");

for (let i = 1; i <= n; i++) {
    if (i === 1 || i === n) {
        console.log("*".repeat(19));
    } else {
    console.log("*" + " ".repeat(17) + "*");
    };
};