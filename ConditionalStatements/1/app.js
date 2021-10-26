//let a=+(prompt("Vvedite pervoe chislo"));
//let b=+(prompt("Vvedite vtoroe chislo"));
//let c=+(prompt("Vvedite tret'e chislo"));
//let d=+(prompt("Vvedite chetvertoe chislo"));

//if (a<b) {min=a}
//else {min=b};
//if (c<min) {min=c};
//if (d<min) {min=d};
//alert( `Naimenshee chislo ${min}`)

const a=+(prompt("Vvedite pervoe chislo"));
const b=+(prompt("Vvedite vtoroe chislo"));
const c=+(prompt("Vvedite tret'e chislo"));
const d=+(prompt("Vvedite chetvertoe chislo"));

let min;

if (a<b) {
    min=a;
} else {
    min=b;
}
if (c<min) {
    min=c;
}
if (d<min) {
    min=d;
};
alert( `Naimenshee chislo ${min}`)