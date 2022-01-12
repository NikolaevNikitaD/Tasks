let user = [
{
    name: "John", 
    age: 30
},
{
    name: "Bob",
    age: 21
},
{
    name: "Anna",
    age: 19
}
];
let obj = "";

for (let i = 0; i < user.length; i++) {
    if (user[i].name == "Bob") {
        obj = user[i];
    }
}
console.log(obj.age)