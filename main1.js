
var fim = new Date("jan 26, 2023 11:30:00").getTime();
var x = setInterval(function(){

var agora = new Date().getTime();
var diff = fim - agora;
var dia = Math.floor(diff/(1000*60*60*24));
var hora = Math.floor(diff %(1000*60*60*24)/(1000*60*60));
var min = Math.floor(diff %(1000*60*60)/(1000*60));
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
myh1.innerHTML = `T- ${hora}:${min}:${sec}`

if (diff < 0){
    diff = agora - fim;
    var dia = Math.floor(diff/(1000*60*60*24));
    var hora = Math.floor(diff %(1000*60*60*24)/(1000*60*60));
    var min = Math.floor(diff %(1000*60*60)/(1000*60));
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
    myh1.innerHTML = `T+ ${hora}:${min}:${sec}`
}

},1000);


























//const timeH = document.querySelector('h1');
//let timeSecond = 600;//

////timeH.innerHTML = `00:${timeSecond}`;//

//const countDown =  setInterval (()=>{
//    timeSecond--;
//    displayTime(timeSecond);
//    if (timeSecond <= 0 || timeSecond < 1){
//        clearInterval(countDown)
//    }
//},1000)//

//function displayTime(second){
//    const min = Math.floor(second / 60);
//    const sec = Math.floor(second % 60);
//    timeH.innerHTML=`${min<10 ? '0': ''}${min}:${sec<10 ? '0': ''}${sec}`
//}