let arr = [
    "Alan",
    "Cloe",
    "David",
    "Diana",
    "Felix",
    "Hanna",
    "Ian",
    "Jack",
    "Jane",
    "John",
    "Kelly",
    "Mary",
    "Mark",
    "Peter",
    "Sophie",
    "Samuel",
    "William",
];
function binary_search(arr, name) {
    if (arr.length == 1) return 0;
    else {
        let arr_half = arr.slice(0, Math.floor(arr.length / 2));
        if (i = arr_half.includes(name)) {
            binary_search(arr_half, name) 
        } else {
            binary_search(arr.slice(Math.floor(arr.length / 2)), name) +
            arr_half.length;
        }
        console.log(arr_half, i);
        return i;
    }
}

let name = prompt("какое имя искать");
while (!name || !name.trim() || name.match(/[0-9]/)) {
    alert("неверные данные");
    name = prompt("какое имя искать");
}
console.log(arr.includes(name) ? binary_search(arr, name) : "такого нет");