setInterval(function () {
    tiempo = new Date();
    hora = tiempo.getHours();
    minutos = tiempo.getMinutes();
    segundos = tiempo.getSeconds();
    sufijo = 'AM';

    if (hora > 12) {
        hora = hora - 12;
        sufijo = 'PM'
    }

    if (hora < 10) {
        hora = "0" + hora;
    }

    if (minutos < 10) {
        minutos = "0" + minutos;
    }

    if (segundos < 10) {
        segundos = "0" + segundos;
    }

    document.getElementById("tiempo").innerHTML = hora + ":" + minutos + ":" + segundos + " " + sufijo;
}, 1000);

setInterval(function () {
    tiempo = new Date();
    numDia = tiempo.getDay();
    fecha = tiempo.getDate();
    numMes = tiempo.getMonth();
    anio = tiempo.getFullYear();

    if (fecha < 10) {
        fecha = "0" + fecha;
    }

    const mes = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    const dia = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

    document.getElementById("fecha").innerHTML = dia[numDia] + " " + fecha + " de " + mes[numMes];
}, 1000);