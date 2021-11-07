const x1 = +prompt("введите х1");
const y1 = +prompt("введите y1");
const x2 = +prompt("введите х2");
const y2 = +prompt("введите y2");

let y = y2 - y1;
let x = x2 - x1;

if (y === 2 && x === 1 || y === 1 && x === 2 || y === -1 && x === 2 || y === -2 && x === 1 || x === -1 && y === 2 || x === -2 && y === 1) {
    alert("YES");
} else {
    alert("NO");
};