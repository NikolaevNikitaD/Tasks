let str = prompt("Введите имя и фамилию");

str = str.split("");
for (i = 0; i < str.length; i++) {
    if (str[i] === str[i].toLowerCase()) {
        str[i] = str[i].toUpperCase();
    } else { 
        str[i] = str[i].toLowerCase();
    }
}
alert(str.join(""));