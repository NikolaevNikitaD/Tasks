const a=+(prompt('Vvedite god'));

if ((a%4==0 && a%100!=0) || a%400==0 ) {
    alert('YES');
}
else {
     alert('NO');
};