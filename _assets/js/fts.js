$(document).ready(function(){
    $('.fts-home__header').slick({
        adaptiveHeight: true,
        arrows: false,
//        fade: true,
        autoplay: true,
        autoplaySpeed: 5000,
    });
    
    window.onscroll = function() {stickyBar()};
    var header = document.getElementById("fts-menu");
    var logo = document.getElementById("fts-logo");
    var sticky = header.offsetTop;
    function stickyBar() {
        if (window.pageYOffset > sticky) {
            header.classList.add("fts-sticky");
            logo.classList.add("fts-logo--position");
        } else {
            header.classList.remove("fts-sticky");
            logo.classList.remove("fts-logo--position");
        }
    }
});