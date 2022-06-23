function minusclick(par) {
    var valor = document.getElementById(par).value;
    if (valor == 1) {
        document.getElementById(par).value = valor
    }
    else {
        document.getElementById(par).value = valor - 1;
    }
}

function plusclick(par) {
    var valor = document.getElementById(par).value;
    document.getElementById(par).value = Number(valor) + 1;
}