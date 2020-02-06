$(function(){
    $(window).scroll(function(){

        if($(document).scrollTop() > 100) {
            $('.navbar').addClass('bg-white');
            $('.navbar-brand').addClass('text-dark');
            $('.nav-link').addClass('text-dark');
        }
        else
        {
            $('.navbar').removeClass('bg-white');
            $('.navbar-brand').removeClass('text-dark');
            $('.nav-link').removeClass('text-dark');
        }

    })
})