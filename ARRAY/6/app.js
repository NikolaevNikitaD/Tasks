let arr = [1, 2, 3, 4, 5];
let a = prompt("Введите число");
let new_arr = [];
while (a.trim() !== a || a === "" || isNaN(a * 2) || a > arr.length) {
    a = prompt(`Введите число`);
}
a = +a;
function func(arr, a) {
    for (let i = 0; i < arr.length; i += a) {
        new_arr.push(arr.slice(i, i + a));
    }
    return new_arr;
}
console.log(func(arr, a));
