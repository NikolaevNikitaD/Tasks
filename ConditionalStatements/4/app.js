const a=+(prompt('Vvedite chislo'));

if (a>=1000 && a<=9999 && (a%7==0 || a%17==0)) {
    alert('YES');
}
else {
    alert('NO');
};
    