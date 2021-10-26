const age=+(prompt('Vvedite vozrast'));

if (age<=13) {
    alert('Detstvo');
}
else if (age>=14 && age<=24) {
    alert('Molodost');
}
else if (age>=25 && age<=59) {
    alert('Zrelost');
}
else {alert('Starost');
};