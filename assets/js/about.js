$(document).ready(function(){

    if($(window).width() >= 768){

        $('.achievements-item p').matchHeight({
            byRow: false
        });

    }

    $('body').css({
        'padding-top': $('header').height(),
    });

})

$(window).resize(function(){

    $('body').css({
        'padding-top': $('header').height(),
    });
    
});