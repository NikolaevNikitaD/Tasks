let user = {
    name: "John", 
    age: 30 
};
let sum = 0;

for (let key in user) {
    if (typeof(user[key]) == "number") {
        sum += 1;
    }
}
console.log(sum)