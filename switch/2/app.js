const a = +prompt("Введите день") - 1;
const n = (a  - a  % 10) / 10;

switch (n) {
    case 0:
        if (a >= 0) {
        alert("Первая декада")
        } else {
            alert("Нет такого дня");
        }
        break;
    case 1:
        alert("Вторая декада");
        break;
    case 2:
        alert("Третья декада");
        break;
    case 3:
        if (a === 30) {
            alert("Третья декада");
        };
        break;
    default:
        alert("Нет такого дня");
}