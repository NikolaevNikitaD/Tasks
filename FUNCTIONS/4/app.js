let str = prompt("Введите строку");

function check (str) {
    while (str.trim() === "") {
        alert ("Некорректный ввод");  
        str = prompt("Введите строку");
    }
    return str.trim();
}
function find_longest_word(str) {
    let longest_word = "";
    for (let word of str.split(" ")) {
        if (word.length > longest_word.length) {
            longest_word = word;
        }
    }
    return longest_word;
}   
alert(find_longest_word(check(str)))