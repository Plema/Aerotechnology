$(document).ready(function(){

    $('header ul li ul').parent().addClass('drop');

    $('footer ul li ul').parent().addClass('drop');

    $('.open-menu').on('click', function(){
        $('.mobile-menu').fadeIn();
    });

    $('.close').on('click', function(){
        $('.mobile-menu').fadeOut();
    });

});