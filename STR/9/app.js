const date = prompt("Введите дату");

if (+date.substr(0,4) === 0 || +date.substr(5,2) === 0 || +date.substr(8,2) === 0) {
    alert(0);
} else {
    alert(date.substr(8,2) + "." +  date.substr(5,2) + "." + date.substr(0,4));
}