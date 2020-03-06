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
{"id_ev":"dnl202003", "name":"Test event 3", "desc":"description of event asdf asdf asdf asdf asdf asdf asdfsa ", "fecha":2020030052280, "status":100},
{"id_ev":"dnl202003", "name":"Test event 3", "desc":"description of event asdf asdf asdf asdf asdf asdf asdfsa ", "fecha":2020030052280, "status":100},
{"id_ev":"dnl202003", "name":"Test event 3", "desc":"description of event asdf asdf asdf asdf asdf asdf asdfsa ", "fecha":2020030052280, "status":100},
{"id_ev":"dnl202003", "name":"Test event 3", "desc":"description of event asdf asdf asdf asdf asdf asdf asdfsa ", "fecha":2020030052280, "status":100},
{"id_ev":"dnl202003", "name":"Test event 3", "desc":"description of event asdf asdf asdf asdf asdf asdf asdfsa ", "fecha":2020030052280, "status":100},
{"id_ev":"dnl202003", "name":"Test event 3", "desc":"description of event asdf asdf asdf asdf asdf asdf asdfsa ", "fecha":2020030052280, "status":100},
{"id_ev":"dnl202003", "name":"Test event 3", "desc":"description of event asdf asdf asdf asdf asdf asdf asdfsa ", "fecha":2020030052280, "status":100}];


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
    }if(vId=='mOrg'){        
        hideDivs();
        $("#dvOrgs").show();
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
    $("#dvOrgs").hide();    
    $("#dvCalendr").hide();
    $("#dvFavs").hide();
    $("#dvMyOrg").hide();
    
    
}

function getGPS(){
    strHtml = "";    
                    
    $("#dvOrgs").html(strHtml);
    for(i=0;i<arrGPS.length;i++){
        console.log(arrGPS[i].name);

        
        vobj = drawListItem1(arrGPS[i].name, arrGPS[i].det, 'img/gps_clr.png', 0);

        /*strHtml = "<div class=\"item_list1\">";
        strHtml += "<table width=\"100%\">";
        strHtml += "<tr>";
        strHtml += "<td width=\"70px\"><img src=\"img/gps_clr.png\" width=\"50px\" style=\"max-height:60px\"/></td>";
        strHtml += "<td><b>"+ arrGPS[i].name +"</b><br>"+ arrGPS[i].det +"</td>";
        strHtml += "</tr>";
        strHtml += "</table>";
        strHtml += "</div>";*/
        $("#dvOrgs").append(vobj);
    }    
}

function getCalendar(){
    strHtml = "";
        
    $("#dvCalendr").html(strHtml);
    vobj = drawListItem2('06-Mar-2020');
    $("#dvCalendr").append(vobj);

    for(i=0;i<arrEvents.length;i++){
        console.log(arrEvents[i].name);
        vobj = drawListItem1(arrEvents[i].name, arrEvents[i].desc, 'img/calendar_cls.png', 0);
        $("#dvCalendr").append(vobj);
        if(i==3){                
            vobj = drawListItem2('07-Mar-2020');
            $("#dvCalendr").append(vobj);
        }
    }    
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


function drawListItem1(vTitle, vDesc, vImg, vId){

    strHtml = '';

    strHtml = "<div class=\"item_list1\" id=\"" + vId + "\">";
    strHtml += "<table width=\"100%\">";
    strHtml += "<tr>";
    strHtml += "<td width=\"70px\"><img src=\""+ vImg +"\" width=\"50px\" style=\"max-height:60px\"/></td>";
    strHtml += "<td><b>"+ vTitle +"</b><br>"+ vDesc +"</td>";
    strHtml += "</tr><tr><td></td><td>";
    strHtml += "<ul class=\"smenu_intr\">";
    strHtml += "<li><a href=\"#\"  id=\"smLike\"><img src=\"img/like_gr.png\" width=\"18px\" height=\"20x\"/></a></li>";
    strHtml += "<li><a href=\"#\" id=\"smFav\"><img src=\"img/star_gr.png\" width=\"18x\" height=\"20px\"/></a></li>";
    strHtml += "<li><a href=\"#\" id=\"smDet\"><img src=\"img/show_gr.png\" width=\"18px\" height=\"20px\"/></a></li>";
    strHtml += "</ul></td></tr>";
    strHtml += "</table>";
    strHtml += "</div>";
    
    return strHtml;
}

function drawListItem2(vTitle, vDesc, vId){

    strHtml = '';

    strHtml = "<div class=\"item_list2\" id=\"" + vId + "\">";
    strHtml += "<table width=\"100%\">";
    strHtml += "<tr>";
    strHtml += "<td><b>"+ vTitle +"</b></td>";
    strHtml += "</tr>";
    strHtml += "</table>";
    strHtml += "</div>";
    
    return strHtml;
}