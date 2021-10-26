const a=+(prompt("Vvedite 1 storonu"));
const b=+(prompt("Vvedite 2 storonu"));
const c=+(prompt("Vvedite 3 storonu"));

if (a-b==0 || b-c==0 || a-c==0) {
    if (a-b==0 && b-c==0) {
    alert("RAVNOSTORONNI");
}
    else {
    alert('RAVNOBEDRENNI');
    }
}
else {
    alert('RAZNOSTORONNI');
};


    