var offTime = 61200;
var interval = null;

window.onload = function(){
    timeInterval();
    interval = setInterval(function(){timeInterval()},100);
    canvasSize();
    $(".dial").knob();
    canvasLocation();
    $(".end_time").text(humanReadable(offTime));
}

function timeInterval(){
    var ts = getTime();
    var percent = Math.trunc((ts/offTime)*100);
    $(".dial").val(percent).trigger("change");
    if(offTime <= ts){
       clearInterval(interval);
    }
}

function getTime(){
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    return (((h * 60)*60) + (m*60) + s) - 32400;
}

function canvasSize(){
    var width = $("#progress_container").width();
    $(".dial").data("width",width - 150);
    $(".dial").data("height",width - 150);
}

function canvasLocation(){
 $(".dial").parent("div").css({
     position:"absolute",
     top : "40%",
     left : "50%",
     transform : "translate(-50%, -50%)"
 })
}

function humanReadable(seconds) {
    var pad = function(x) { 
        return (x < 10) ? "0"+x : x; 
    }
    var option12 = function(x){
        return (x > 12) ? x-12 : x;
    }
    return pad(option12(parseInt(seconds / (60*60))))
        + ":" +
        pad(parseInt(seconds / 60 % 60))
}