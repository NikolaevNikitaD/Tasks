let str = prompt("Введите имя и фамилию");
let rez = "YES";

str = str.split(" ");
for (let i = 0; i < str.length; i++) {
    if (str[i].substr(0, 1) != str[i].substr(0, 1).toUpperCase()){
        rez = "NO";
    } 
}
alert(rez);