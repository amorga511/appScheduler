//alert('hello world');
var strFile;
var arrFileStr = [];
var arrFileForms = [];

var arrGPS = [{"id":101, "name":"Catedral Inmaculada Concepcion", "det":"Cronograma de actividades semana santa 2020 <br />Del 4-apr al 11-apr", "state":1},
{"id":102, "name":"Location B dnl", "det":"Location main church at down town central park", "state":1},
{"id":103, "name":"Location C dnl", "det":"Location main church at down town central park", "state":1},
{"id":104, "name":"Location D dnl", "det":"Location main church at down town central park", "state":1},
{"id":201, "name":"Location A tgu", "det":"Location main church at down town central park", "state":1},
{"id":202, "name":"Location B tgu", "det":"Location main church at down town central park", "state":1}];


var arrEvents = [{"id_ev":"dnl202001", "name":"Test event 1", "desc":"description of event", "fecha":2020030051780, "status":100},
{"id_ev":"dnl202002", "name":"Test event 2", "desc":"description of event", "fecha":2020030052080, "status":100},
{"id_ev":"dnl202003", "name":"Test event 3", "desc":"description of event", "fecha":2020030052280, "status":100}];


document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    console.log(device.cordova);
    setTimeout(function(){navigator.vibrate(1000);}, 1000);
}

$(document).ready(function(){  
    switch_menu('mHome');
    $("#mHome").css('border-top', 'solid 3px red');

    $(".menubar a").on('click', function(e){
        console.log(e.currentTarget.id);
        $(".menubar a").css('border-top','solid 3px black');
        $(this).css('border-top', 'solid 3px red');

        switch_menu(e.currentTarget.id);
    });
});


function switch_menu(vId){
    if(vId=='mHome'){ 
        hideDivs();
        $("#dvHome").show();
    }
    if(vId=='mMenu'){        
        hideDivs();
        $("#dvMenu").show();
    }if(vId=='mGPS'){        
        hideDivs();
        $("#dvGPS").show();
        getGPS();
    }if(vId=='mCalendr'){        
        hideDivs();
        $("#dvCalendr").show();
        getCalendar();
    }if(vId=='mFavs'){        
        hideDivs();
        $("#dvFavs").show();
    }if(vId=='mMyOrg'){        
        hideDivs();
        $("#dvMyOrg").show();
    }
}

function hideDivs(){        
    $("#dvMenu").hide();
    $("#dvHome").hide();
    $("#dvGPS").hide();    
    $("#dvCalendr").hide();
    $("#dvFavs").hide();
    $("#dvMyOrg").hide();
    
    
}

function getGPS(){
    strHtml = "";    
                    
    $("#dvGPS").html(strHtml);
    for(i=0;i<arrGPS.length;i++){
        console.log(arrGPS[i].name);
        strHtml=    "<div class=\"border_dv\"><div class=\"row\"><div class=\"col-3\">";
        strHtml+=  "<img src=\"img/gps_clr.png\" width=\"100%\" /></div><div class=\"col-9\">";
        //strHtml+=   "<button id=\""+ arrGPS[i].id +"\" type=\"button\" class=\"btn btn-link\" style=\"float:right; top:0px\" onclick=\"showdetGPS(this)\">Ver</button>";
        strHtml+=   "<h5>"+ arrGPS[i].name +"</h5>";
        strHtml+=   "<p>"+ arrGPS[i].det +"</p><button type=\"button\" class=\"btn btn-outline-info\">Info</button></div></div>";
        strHtml+=   "</div>";
        $("#dvGPS").append(strHtml);
    }    
    $("#dvGPS").append('<br />');
}

function getCalendar(){
    strHtml = "";
        
    $("#dvCalendr").html(strHtml);
    for(i=0;i<arrEvents.length;i++){
        console.log(arrEvents[i].name);
        strHtml=    "<div class=\"border_dv\"><div class=\"row\"><div class=\"col-3\">";
        strHtml+=  "<img src=\"img/calendar_cls.png\" width=\"100%\" /></div><div class=\"col-9\">";
        //strHtml+=   "<button id=\""+ arrEvents[i].id +"\" type=\"button\" class=\"btn btn-link\" style=\"float:right; top:0px\" onclick=\"showdetGPS(this)\">Ver</button>";
        strHtml+=   "<h5>"+ arrEvents[i].name +"</h5>";
        strHtml+=   "<p>"+ arrEvents[i].desc +"</p></div></div>";
        strHtml+=   "</div>";
        $("#dvCalendr").append(strHtml);
    }    
    $("#dvCalendr").append('<br />');
}

function showdetGPS(event){
    console.log(event);
}


function getYMD(vDays){
    var vToday = new Date();
    var time = vToday.getTime();
    var milsecs = parseInt(vDays*24*60*60*1000);
    vToday.setTime(time + milsecs);

    var strDate = '';
    strDate = vToday.getFullYear();

    if(parseInt(vToday.getMonth() + 1) < 10 ){
        strDate += '0' + (vToday.getMonth()+1);
    }else{
        strDate += '' + (vToday.getMonth()+1);
    }
    if(parseInt(vToday.getDate()) < 10 ){
        strDate += '0' + vToday.getDate();
    }else{
        strDate += '' + vToday.getDate();
    }
    return strDate;
}

function getHMS(){
    var vToday = new Date();
    var time = vToday.getTime();
    //var milsecs = parseInt(vDays*24*60*60*1000);
    vToday.setTime(time);
    var strDate = '';

    if(parseInt(vToday.getHours()) < 10 ){
        strDate += '0' + (vToday.getHours());
    }else{
        strDate += '' + (vToday.getHours());
    }
    if(parseInt(vToday.getMinutes()) < 10 ){
        strDate += '0' + vToday.getMinutes();
    }else{
        strDate += '' + vToday.getMinutes();
    }
    if(parseInt(vToday.getSeconds()) < 10 ){
        strDate += '0' + vToday.getSeconds();
    }else{
        strDate += '' + vToday.getSeconds();
    }

    return strDate;
}

