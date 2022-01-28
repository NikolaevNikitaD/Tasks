let str = prompt("Введите строку");

function check (str) {
    while (str.trim() === "" || isNaN(str) == "" || str.trim().length < 2) {
        alert ("Некорректный ввод");  
        str = prompt("Введите строку");
    }
    return str.trim();
}
function vowel_count(str) {
    let vowels = "aeyuio";
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
        if (vowels.indexOf(str[i]) !== -1) {
            sum += 1;
        }
    }
    return sum;
}   
alert(vowel_count(check(str)))