let user = {
    name: "John", 
    age: 30
};
let sum = 0;

for (let key in user) {
    if (user[key] || user[key] === 0 ) {
        sum += 1;
    }
}
console.log(sum)