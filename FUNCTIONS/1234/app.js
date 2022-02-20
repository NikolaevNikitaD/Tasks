function getAdr () {
    adr = prompt("Введите адрес");
    return adr;
}
function check (adr) {
    return adr.endsWith(".html");
}
alert(check(getAdr()));