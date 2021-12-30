let obj = {
    name: "",
    age: "",
    birthday: "",
    status: ""
};
while (obj.name.trim().length === 0 || obj.age.trim().length === 0 || obj.birthday.trim().length === 0 || obj.status.trim().length === 0) {
    obj.name = prompt("Введите имя");
    obj.age = prompt("Введите возраст");
    obj.birthday = prompt("Введите ДР");
    obj.status = prompt("Введите статус");
}
console.log(obj.name);
console.log(obj.age);
console.log(obj.birthday);
console.log(obj.status);