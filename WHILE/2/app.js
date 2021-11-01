let slv = prompt("Введите слово");
let sum = 0;

while (slv != "стоп" && slv != "хватит" && slv != "достаточно") {
    sum += 1;
    slv = prompt("Введите слово");
};
alert(sum);