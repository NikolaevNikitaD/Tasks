let arr = [];
let arr1 = [];
let arr2 = [];
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
/*for (let i of arr) {
    if (i % 2 == 0) {
        arr1.push(i);
    } else {
        arr2.push(i);
    }
}*/
/*arr1 = arr.filter(item => item % 2 == 0);
arr2 = arr.filter(item => item % 2 != 0);*/
arr.forEach(function(item) {
    if (item % 2 == 0) {
        arr1.push(item);
    } else {
        arr2.push(item);
    }
}) 
console.log(arr1);
console.log(arr2);