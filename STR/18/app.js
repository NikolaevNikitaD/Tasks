let str = prompt("Введите строку");
let sum = 0;

str = str.split(" ");
for (let i = 0; i < str.length; i++) {
    sum += 1;
}
alert(sum);