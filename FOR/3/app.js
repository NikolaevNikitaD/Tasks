const n = +prompt('Введите число');
// let stars = "";
// for (let j = n; j >= 1; j--) {
//     for (let k = 1; k <= j;k++) { 
//         stars += "*";
//     }
//     console.log(stars);
//     stars = "";
// };

for (let i = 0; i <= n; i++)
    console.log("*".repeat(n - i))