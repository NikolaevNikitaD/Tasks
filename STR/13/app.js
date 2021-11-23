let str = prompt("Введите строку");

str = str.split("_");

for (let i = 1; i < str.length; i++) {
    str[i] = str[i].substr(0, 1).toUpperCase() + str[i].slice(1);
}
alert(str.join(""));