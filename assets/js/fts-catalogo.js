// Desabilita click com botão direito
document.addEventListener('contextmenu', event => event.preventDefault());

//Filtra os segmentos
$("#prodDis").click( function(){
    $("#Aviacao").addClass("fts-hide");
    $("#Industria").addClass("fts-hide");
    $("#Distribuidoras").removeClass("fts-hide");
    $("#Distribuidoras").css({'padding-top':'64px'});
});
$("#prodInd").click( function(){
    $("#Aviacao").addClass("fts-hide");
    $("#Distribuidoras").addClass("fts-hide");
    $("#Industria").removeClass("fts-hide");
    $("#Industria").css({'padding-top':'64px'});
});
$("#prodAvi").click( function(){
    $("#Distribuidoras").addClass("fts-hide");
    $("#Industria").addClass("fts-hide");
    $("#Aviacao").removeClass("fts-hide");
    $("#Aviacao").css({'padding-top':'64px'});
});

// DISTRIBUIDORAS
function dist10000(){
    $("#distFilter").attr('w3-include-html','../assets/html/catalogo/10000.html');
}
function dist30000(){
    $("#distFilter").attr('w3-include-html','../assets/html/catalogo/30000di.html');
}
function dist40000(){
    $("#distFilter").attr('w3-include-html','../assets/html/catalogo/40000.html');
}
function dist50000(){
    $("#distFilter").attr('w3-include-html','../assets/html/catalogo/50000da.html');
}
function dist80000(){
    $("#distFilter").attr('w3-include-html','../assets/html/catalogo/80000di.html');
}
function dist90000(){
    $("#distFilter").attr('w3-include-html','../assets/html/catalogo/90000di.html');
}
function dist100000(){
    $("#distFilter").attr('w3-include-html','../assets/html/catalogo/100000.html');
}
function dist110000(){
    $("#distFilter").attr('w3-include-html','../assets/html/catalogo/110000di.html');
}
function dist120000(){
    $("#distFilter").attr('w3-include-html','../assets/html/catalogo/120000di.html');
}
function dist130000(){
    $("#distFilter").attr('w3-include-html','../assets/html/catalogo/130000di.html');
}
function dist140000(){
    $("#distFilter").attr('w3-include-html','../assets/html/catalogo/140000di.html');
}
function dist150000(){
    $("#distFilter").attr('w3-include-html','../assets/html/catalogo/150000di.html');
}
function dist160000(){
    $("#distFilter").attr('w3-include-html','../assets/html/catalogo/160000di.html');
}
function dist170000(){
    $("#distFilter").attr('w3-include-html','../assets/html/catalogo/170000di.html');
}
function dist180000(){
    $("#distFilter").attr('w3-include-html','../assets/html/catalogo/180000.html');
}
function dist200000(){
    $("#distFilter").attr('w3-include-html','../assets/html/catalogo/200000.html');
}
function dist210000(){
    $("#distFilter").attr('w3-include-html','../assets/html/catalogo/210000.html');
}
function dist220000(){
    $("#distFilter").attr('w3-include-html','../assets/html/catalogo/220000.html');
}
function dist230000(){
    $("#distFilter").attr('w3-include-html','../assets/html/catalogo/230000di.html');
}
function dist240000(){
    $("#distFilter").attr('w3-include-html','../assets/html/catalogo/240000.html');
}
function dist250000(){
    $("#distFilter").attr('w3-include-html','../assets/html/catalogo/250000.html');
}
function dist290000(){
    $("#distFilter").attr('w3-include-html','../assets/html/catalogo/290000.html');
}
function dist310000(){
    $("#distFilter").attr('w3-include-html','../assets/html/catalogo/310000.html');
}

//INDUSTRIAS
function indu10000(){
    $("#induFilter").attr('w3-include-html','../assets/html/catalogo/10000.html');
}
function indu30000(){
    $("#induFilter").attr('w3-include-html','../assets/html/catalogo/30000di.html');
}
function indu40000(){
    $("#induFilter").attr('w3-include-html','../assets/html/catalogo/40000.html');
}
function indu50000(){
    $("#induFilter").attr('w3-include-html','../assets/html/catalogo/50000i.html');
}
function indu80000(){
    $("#induFilter").attr('w3-include-html','../assets/html/catalogo/80000di.html');
}
function indu90000(){
    $("#induFilter").attr('w3-include-html','../assets/html/catalogo/90000di.html');
}
function indu100000(){
    $("#induFilter").attr('w3-include-html','../assets/html/catalogo/100000.html');
}
function indu110000(){
    $("#induFilter").attr('w3-include-html','../assets/html/catalogo/110000di.html');
}
function indu120000(){
    $("#induFilter").attr('w3-include-html','../assets/html/catalogo/120000di.html');
}
function indu130000(){
    $("#induFilter").attr('w3-include-html','../assets/html/catalogo/130000di.html');
}
function indu140000(){
    $("#induFilter").attr('w3-include-html','../assets/html/catalogo/140000di.html');
}
function indu150000(){
    $("#induFilter").attr('w3-include-html','../assets/html/catalogo/150000di.html');
}
function indu160000(){
    $("#induFilter").attr('w3-include-html','../assets/html/catalogo/160000di.html');
}
function indu170000(){
    $("#induFilter").attr('w3-include-html','../assets/html/catalogo/170000di.html');
}
function indu180000(){
    $("#induFilter").attr('w3-include-html','../assets/html/catalogo/180000.html');
}
function indu200000(){
    $("#induFilter").attr('w3-include-html','../assets/html/catalogo/200000.html');
}
function indu210000(){
    $("#induFilter").attr('w3-include-html','../assets/html/catalogo/210000.html');
}
function indu220000(){
    $("#induFilter").attr('w3-include-html','../assets/html/catalogo/220000.html');
}
function indu230000(){
    $("#induFilter").attr('w3-include-html','../assets/html/catalogo/230000di.html');
}
function indu240000(){
    $("#induFilter").attr('w3-include-html','../assets/html/catalogo/240000.html');
}
function indu250000(){
    $("#induFilter").attr('w3-include-html','../assets/html/catalogo/250000.html');
}
function indu290000(){
    $("#induFilter").attr('w3-include-html','../assets/html/catalogo/290000.html');
}
function indu310000(){
    $("#induFilter").attr('w3-include-html','../assets/html/catalogo/310000.html');
}

//AVIACAO
function avia10000(){
    $("#aviaFilter").attr('w3-include-html','../assets/html/catalogo/10000.html');
}
function avia20000(){
    $("#aviaFilter").attr('w3-include-html','../assets/html/catalogo/20000.html');
}
function avia30000(){
    $("#aviaFilter").attr('w3-include-html','../assets/html/catalogo/30000a.html');
}
function avia40000(){
    $("#aviaFilter").attr('w3-include-html','../assets/html/catalogo/40000.html');
}
function avia50000(){
    $("#aviaFilter").attr('w3-include-html','../assets/html/catalogo/50000a.html');
}
function avia60000(){
    $("#aviaFilter").attr('w3-include-html','../assets/html/catalogo/60000.html');
}
function avia70000(){
    $("#aviaFilter").attr('w3-include-html','../assets/html/catalogo/70000.html');
}
function avia80000(){
    $("#aviaFilter").attr('w3-include-html','../assets/html/catalogo/80000a.html');
}
function avia90000(){
    $("#aviaFilter").attr('w3-include-html','../assets/html/catalogo/90000a.html');
}
function avia100000(){
    $("#aviaFilter").attr('w3-include-html','../assets/html/catalogo/100000.html');
}
function avia110000(){
    $("#aviaFilter").attr('w3-include-html','../assets/html/catalogo/110000a.html');
}
function avia120000(){
    $("#aviaFilter").attr('w3-include-html','../assets/html/catalogo/120000a.html');
}
function avia130000(){
    $("#aviaFilter").attr('w3-include-html','../assets/html/catalogo/130000a.html');
}
function avia140000(){
    $("#aviaFilter").attr('w3-include-html','../assets/html/catalogo/140000a.html');
}
function avia150000(){
    $("#aviaFilter").attr('w3-include-html','../assets/html/catalogo/150000a.html');
}
function avia160000(){
    $("#aviaFilter").attr('w3-include-html','../assets/html/catalogo/160000a.html');
}
function avia170000(){
    $("#aviaFilter").attr('w3-include-html','../assets/html/catalogo/170000a.html');
}
function avia180000(){
    $("#aviaFilter").attr('w3-include-html','../assets/html/catalogo/180000.html');
}
function avia190000(){
    $("#aviaFilter").attr('w3-include-html','../assets/html/catalogo/190000.html');
}
function avia200000(){
    $("#aviaFilter").attr('w3-include-html','../assets/html/catalogo/200000.html');
}
function avia210000(){
    $("#aviaFilter").attr('w3-include-html','../assets/html/catalogo/210000.html');
}
function avia220000(){
    $("#aviaFilter").attr('w3-include-html','../assets/html/catalogo/220000.html');
}
function avia230000(){
    $("#aviaFilter").attr('w3-include-html','../assets/html/catalogo/230000a.html');
}
function avia240000(){
    $("#aviaFilter").attr('w3-include-html','../assets/html/catalogo/240000.html');
}
function avia250000(){
    $("#aviaFilter").attr('w3-include-html','../assets/html/catalogo/250000.html');
}
function avia270000(){
    $("#aviaFilter").attr('w3-include-html','../assets/html/catalogo/270000.html');
}
function avia290000(){
    $("#aviaFilter").attr('w3-include-html','../assets/html/catalogo/290000.html');
}
function avia300000(){
    $("#aviaFilter").attr('w3-include-html','../assets/html/catalogo/300000.html');
}
function avia310000(){
    $("#aviaFilter").attr('w3-include-html','../assets/html/catalogo/310000.html');
}
