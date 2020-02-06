$(function(){
    $(window).scroll(function () { 

        if($(document).scrollTop() > 10){
            $('.navbar').addClass('bg-white');
            $('.navbar-brand').addClass('text-orange');
            $('.nav-link').addClass('change-color');
            $('.navbar .btn').addClass('text-white');

            $('.scrollTop').addClass('show');
        }
        else {
            $('.navbar').removeClass('bg-white');
            $('.navbar-brand').removeClass('text-orange');
            $('.nav-link').removeClass('change-color');
            $('.navbar .btn').removeClass('text-white');

            $('.scrollTop').removeClass('show');
        };
    })

    $('.scrollTop').click(function (e) {
        e.preventDefault();
        $('body, html').animate({scrollTop: 0}, 500);
        return false;
    });
})