$(document).ready(function() {


    $(window).scroll(function() {
        if ($(this).scrollTop() > 0) {
            $('.header-style-1').addClass('header2');
        } else {
            $('.header-style-1').removeClass('header2');
        }
    });

    $(window).scroll(function() {
        if ($(this).width() < 700) {
            $('header-style-1').addClass('header2');
            // $('header').removeClass('header2');
        }
    });
});