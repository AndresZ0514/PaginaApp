setInterval(function()
{
    tiempo = new Date();
    hora = tiempo.getHours();
    minutos = tiempo.getMinutes();
    segundos = tiempo.getSeconds();
    dia = tiempo.getDate();
    mes = tiempo.getMonth() + 1;
    anio = tiempo.getFullYear();

    if(hora<10)
        hora = "0"+hora;

    if(minutos<10)
        minutos = "0"+minutos;

    if(dia<10)
        dia = "0"+dia;

    if(mes<10)
        mes = "0"+mes;

    document.getElementById("tiempo").innerHTML = dia+"/"+mes+"/"+anio+" "+hora+":"+minutos;
},1000);