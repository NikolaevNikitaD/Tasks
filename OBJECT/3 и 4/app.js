let obj = {width:  prompt("Введите ширину"),
height: prompt("Введите высоту"),
title: prompt("Введите название")};
let sum = 0;

for (let key in obj) {
    if (obj[key] !== "") {
        sum += 1;
    }
}
if (sum === 0) {
    alert("false");
} else {
    alert(`true. sum = ${sum}`);
}