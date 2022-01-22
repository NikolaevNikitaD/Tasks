let arr = [];
let sum = 0;
let a = prompt("Введите число");
while (a.trim() !== a || a === "" || isNaN(a)) {
    a = prompt(`Введите число`);
}
for (let i = 0; i < a; i++) {
    arr[i] = prompt(`Введите ${i + 1}-й элемент`);
    while (arr[i].trim() !== arr[i] || arr[i] === "" || isNaN(arr[i])) {
        arr[i] = prompt(`Введите ${i + 1}-й элемент`);
    }
    arr[i] = +arr[i];
}
//arr.map(item => sum += item);
arr.forEach(item => sum += item);
console.log(sum);