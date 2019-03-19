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
    $("#distFilter").attr('w3-include-html','../_assets/html/catalogo/10000.html');
}
function dist40000(){
    $("#distFilter").attr('w3-include-html','../_assets/html/catalogo/40000.html');
}
function dist50000(){
    $("#distFilter").attr('w3-include-html','../_assets/html/catalogo/50000.html');
}
function dist80000(){
    $("#distFilter").attr('w3-include-html','../_assets/html/catalogo/80000.html');
}
function dist90000(){
    $("#distFilter").attr('w3-include-html','../_assets/html/catalogo/90000.html');
}
function dist110000(){
    $("#distFilter").attr('w3-include-html','../_assets/html/catalogo/110000.html');
}
function dist120000(){
    $("#distFilter").attr('w3-include-html','../_assets/html/catalogo/120000.html');
}
function dist130000(){
    $("#distFilter").attr('w3-include-html','../_assets/html/catalogo/130000.html');
}

//INDUSTRIAS
function indu10000(){
    $("#induFilter").attr('w3-include-html','../_assets/html/catalogo/10000.html');
}
function indu40000(){
    $("#induFilter").attr('w3-include-html','../_assets/html/catalogo/40000.html');
}
function indu50000(){
    $("#induFilter").attr('w3-include-html','../_assets/html/catalogo/50000.html');
}
function indu80000(){
    $("#induFilter").attr('w3-include-html','../_assets/html/catalogo/80000.html');
}
function indu90000(){
    $("#induFilter").attr('w3-include-html','../_assets/html/catalogo/90000.html');
}
function indu110000(){
    $("#induFilter").attr('w3-include-html','../_assets/html/catalogo/110000.html');
}
function indu120000(){
    $("#induFilter").attr('w3-include-html','../_assets/html/catalogo/120000.html');
}
function indu130000(){
    $("#induFilter").attr('w3-include-html','../_assets/html/catalogo/130000.html');
}

//AVIACAO
function avia10000(){
    $("#aviaFilter").attr('w3-include-html','../_assets/html/catalogo/10000.html');
}
function avia20000(){
    $("#aviaFilter").attr('w3-include-html','../_assets/html/catalogo/20000.html');
}
function avia40000(){
    $("#aviaFilter").attr('w3-include-html','../_assets/html/catalogo/40000.html');
}
function avia50000(){
    $("#aviaFilter").attr('w3-include-html','../_assets/html/catalogo/50000.html');
}
function avia60000(){
    $("#aviaFilter").attr('w3-include-html','../_assets/html/catalogo/60000.html');
}
function avia70000(){
    $("#aviaFilter").attr('w3-include-html','../_assets/html/catalogo/70000.html');
}
function avia80000(){
    $("#aviaFilter").attr('w3-include-html','../_assets/html/catalogo/80000.html');
}
function avia90000(){
    $("#aviaFilter").attr('w3-include-html','../_assets/html/catalogo/90000.html');
}
function avia100000(){
    $("#aviaFilter").attr('w3-include-html','../_assets/html/catalogo/100000.html');
}
function avia110000(){
    $("#aviaFilter").attr('w3-include-html','../_assets/html/catalogo/110000.html');
}
function avia120000(){
    $("#aviaFilter").attr('w3-include-html','../_assets/html/catalogo/120000.html');
}
function avia130000(){
    $("#aviaFilter").attr('w3-include-html','../_assets/html/catalogo/130000.html');
}
