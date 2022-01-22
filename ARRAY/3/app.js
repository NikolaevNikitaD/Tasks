let arr = [];

for (let i = 0; i <= 4; i++) {
    arr[i] = prompt(`Введите ${i + 1}-е число`);
    while (arr[i].trim() !== arr[i] || arr[i] === "" || isNaN(arr[i] * 2)) {
        arr[i] = prompt(`Введите ${i + 1}-е число`);
    }
}
arr = arr.filter(item => arr.lastIndexOf(item) === arr.indexOf(item));
if (arr.length === 0) {
    console.log("Массив пуст");
} else {
    console.log(arr);
}