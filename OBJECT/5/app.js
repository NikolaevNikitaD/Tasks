let obj = {width:  prompt("Введите ширину"),
height: prompt("Введите высоту"),
title: prompt("Введите название")};
let sum = 0;

for (let key in obj) {
    if (!isNaN(obj[key] * 2) && obj[key] !== "") {
        sum += 1;
    }
}
alert(sum);
