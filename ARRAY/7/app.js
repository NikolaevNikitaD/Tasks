let arr1 = [];
let arr2 = [];
let new_arr = [];

for (let i = 0; i <= 2; i++) {
    arr1[i] = prompt(`Введите ${i + 1}-й элемент`);
    while (arr1[i].trim() !== arr1[i] || arr1[i] === "") {
        arr1[i] = prompt(`Введите ${i + 1}-й элемент`);
    }
}
for (let i = 0; i <= 2; i++) {
    arr2[i] = prompt(`Введите ${i + 4}-й элемент`);
    while (arr2[i].trim() !== arr2[i] || arr2[i] === "") {
        arr2[i] = prompt(`Введите ${i + 4}-й элемент`);
    }
}
for (let item of arr1) {
    if (isNaN(item) !== "true" && item % 3 == 0 || item % 7 == 0) {
        new_arr.push(item);
    } else if (isNaN(item) && item.length % 3 == 0 || item.length % 7 == 0) {
        new_arr.push(item);
    }
}
for (let item of arr2) {
    if (isNaN(item) !== "true" && item % 3 == 0 || item % 7 == 0) {
        new_arr.push(item);
    } else if (isNaN(item) && item.length % 3 == 0 || item.length % 7 == 0) {
        new_arr.push(item);
    }
}
console.log(new_arr);