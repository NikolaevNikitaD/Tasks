let a = prompt("Введите строку");

function check (a) {
    while (a.trim() === "") {
        a = prompt("Введите строку");  
    }
    return a.trim();
}
function detect_data_type(a) {
    if (isNaN(a) == "") {
        a = +a;
    }
    if (a == "true" || a == "false") {
        a = Boolean(a);
    }
    return typeof(a);
 }   
 alert(detect_data_type(check(a)))