function ftsHead() {
    if ( document.location.href.indexOf('produtos') > -1 ) {
        $("#fts-css-variavel").attr("href", "../_assets/css/fts-catalogo.css");
        $("title").html("FTS | Conheça Nossos Produtos");
    }
    else if ( document.location.href.indexOf('segmentos') > -1 ) {
        $("#fts-css-variavel").attr("href", "../_assets/css/fts-segmentos.css");
        $("title").html("FTS | Distribuidoras, Indústrias e Aviação");
    }
    else {
        $("#fts-css-variavel").attr("href", "/_assets/css/fts-home.css");
        $("title").html("FTS | Solução na Hora Que Você Precisa");
    }
};