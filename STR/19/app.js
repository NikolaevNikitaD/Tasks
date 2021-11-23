let str = prompt("Введите строку");
let A = 0;
let G = 0;
let C = 0;
let T = 0;

str = str.toLowerCase();
for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === "а") {
        A += 1;
    } else if (str.charAt(i) === "г") {
        G += 1;
    } else if (str.charAt(i) === "ц") {
        C += 1;
    } else if (str.charAt(i) === "т") {
        T += 1;
    }
}
alert(`A:${A} \nГ:${G} \nЦ:${C} \nT:${T}`);