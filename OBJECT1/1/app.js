let user = {
    name: "John", 
    age: 30
};
let res = "pustoi"; 
for (let key in user) {
    res = "ne pustoi";
}

console.log(res);
console.log("age" in user)