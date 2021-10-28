const n = + (prompt( "Введите n"));
let max = 0;
let max1 = 0;

for (i = 1; i <=n ; i++) {
    let a = + prompt(`Введите число №${i}`);
    if (a > max) {
        max1 = max
        max = a;
    } else if (a <= max && a > max1) {
            max1 = a;
            
        }
        
};  
console.log(max);
console.log(max1);