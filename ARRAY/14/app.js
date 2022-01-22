let arr = [];
let new_arr = [];
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
arr = arr.filter(item => item > 0);
for (let i of arr) {
    if (+(i ** (1 / 2)).toFixed(0) !== i ** (1 / 2)) {
        i = +(i ** (1 / 2)).toFixed(1);
        new_arr.push(i);
    } else {
        i = i ** (1 / 2);
        new_arr.push(i);
    }
}
console.log(new_arr);