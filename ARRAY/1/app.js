let arr = [];

for (let i = 0; i <= 4; i++) {
    arr[i] = prompt(`Введите ${i + 1}-й элемент`);
    while (arr[i].trim() == "") {
        arr[i] = prompt(`Введите ${i + 1}-й элемент`);
    }
}
arr = arr.filter(item => isNaN(item) !== true);
if (arr.length === 0) {
    console.log("Массив пуст");
} else {
    console.log(arr);
}