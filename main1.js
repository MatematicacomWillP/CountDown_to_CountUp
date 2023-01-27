
var fim = new Date("jan 26, 2023 11:30:00").getTime(); //colocando o tempo futuro
var x = setInterval(function(){

var agora = new Date().getTime();
var diff = fim - agora; //para usar com o contador regrassivo
var dia = Math.floor(diff/(1000*3600*24));
var hora = Math.floor(diff %(1000*3600*24)/(1000*3600));
var min = Math.floor(diff %(1000*3600)/(1000*60));
var sec = Math.floor(diff %(1000*60)/1000);

if (hora < 10) {
    hora = '0' + hora;
}
if (min < 10) {
    min = '0' + min;
}
if (sec < 10) {
    sec = '0' + sec;
}



myh1 = document.getElementById("container");
myh1.innerHTML = `${hora}:${min}:${sec}`//contador regressivo

if (diff < 0){ //usando if para trocar de contador
    diff = agora - fim; //para usar com o contador progressivo
    var dia = Math.floor(diff/(1000*3600*24));
    var hora = Math.floor(diff %(1000*3600*24)/(1000*3600));
    var min = Math.floor(diff %(1000*3600)/(1000*60));
    var sec = Math.floor(diff %(1000*60)/1000);
    if (hora < 10) {
    hora = '0' + hora;
    }
    if (min < 10) {
        min = '0' + min;
    }
    if (sec < 10) {
        sec = '0' + sec;
    }
    myh1.innerHTML = `${hora}:${min}:${sec}` //contador progressivo
}

},1000);
