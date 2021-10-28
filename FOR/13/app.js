const n=+(prompt("Введите n"));
let a = 0;
let a2 = 1;
let s = 0;
let feb = "1";

for (let i = 1; i <= (n - 1); i++ ) {
    s = a + a2;
    a2 += a;
    a = a2 - a;
    feb += `,${s}`;   
};
console.log(feb);