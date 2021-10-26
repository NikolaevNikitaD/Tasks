const a=+(prompt("Vvedite pervoe chislo"));
const b=+(prompt("Vvedite vtoroe chislo"));
const c=+(prompt("Vvedite tret'e chislo"));

if (a+b>c && a+c>b && b+c>a) {
    alert('YES');
}
else {
    alert('NO');
};