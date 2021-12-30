let menu = {
    width:  prompt("Введите ширину"),
    height: prompt("Введите высоту"),
    title: prompt("Введите название")
};
for (let key in menu) {
    if (!isNaN(menu[key] * 2)) {
    menu[key] *= 2;
    }
} 
console.log(menu.width);
console.log(menu.height);
console.log(menu.title);