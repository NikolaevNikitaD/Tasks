let arr = [];
sum = 0;
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
for (let i of arr) {
    sum += i;
    if (i === 0) break;
}
console.log(sum);