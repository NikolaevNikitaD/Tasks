let a = prompt("Введите ответ");

for (let i = 1; i <= 2; i++) {
    switch (a) {
        case "Троллейбус":
            alert("Правильно");
            break;
        case "Сдаюсь":
            alert("Троллейбус");
            break;
        default:
            a = prompt("Подумай еще");
    }
    if (a === "Троллейбус") break;
    if (a === "Сдаюсь") break;
}
if (a != "Троллейбус") {
    alert("Троллейбус");

}