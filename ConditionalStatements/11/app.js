const a=+(prompt('Vvedite nomer karmana'));

if (((a>=1 && a<=10) || (a>=19 && a<=28)) && a%2==0) {
    alert('CHERNIY');
}
else if (((a>=11 && a<=18) || (a>=29 && a<=36)) && a%2!=0) {
    alert('CHERNIY');
}
else if (a>=1 && a<=36) {
    alert('KRASNIY');
}
else if (a==0) {
    alert('ZELENIY');
}
else {
    alert('OSHIBKA VVODA');
};
    