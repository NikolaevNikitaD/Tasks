const a=+(prompt("Vvedite 1 chislo"));
const b=+(prompt("Vvedite 2 chislo"));
const c=prompt("Vvedite operaciu");

let rez;

if (b==0 && c=='/') {
    alert('NA 0 DELIT NELZYA');
}
else {
    switch (c)
    //ТУТ РЕШИЛ ПРОСТО ПРОЭКСПЕРЕМЕНТИРОВТАЬ СО СВИТЧ
{
        case '/':
            rez=a/b;
        break;
        case '*':
            rez=a*b;
        break;
        case '+':
            rez=a+b;
        break;
        case '-':
            rez=a-b;
        break;
        default:
            alert('Nevernaya operacia');
}
    alert(`${a}${c}${b}=${rez}`)
};


    