const x1=+(prompt('Vvedite nomer stroki 1 kletki'));
const y1=+(prompt('Vvedite nomer stolbca 1 kletki'));
const x2=+(prompt('Vvedite nomer stroki 2 kletki'));
const y2=+(prompt('Vvedite nomer stolbca 2 kletki'));

if (x1-x2>=-1 && x1-x2<=1 && y1-y2>=-1 && y1-y2<=1) {
    if ((x1==x2 && y1==y2)) {
        alert('MI UZHE V ETOI KLETKE');
    }
    else {
        alert('YES');
    }
}
else {
    alert('NO');
};
    