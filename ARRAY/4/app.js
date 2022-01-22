let arr1 = [];
let arr2 = [];
let rez = "true";
for (let i = 0; i <= 4; i++) {
    arr1[i] = prompt(`Введите ${i + 1}-е число`);
    while (arr1[i].trim() !== arr1[i] || arr1[i] === "") {
        arr1[i] = prompt(`Введите ${i + 1}-е число`);
    }
}
for (let i = 0; i <= 4; i++) {
    arr2[i] = prompt(`Введите ${i + 6}-е число`);
    while (arr2[i].trim() !== arr2[i] || arr2[i] === "") {
        arr2[i] = prompt(`Введите ${i + 6}-е число`);
    }
}
arr1.forEach(function(item, index) {
    if (arr1[index] !== arr2[index]) {
        rez = "false";
    }
}) 
console.log(rez);