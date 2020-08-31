$(document).ready(function(){

    $('.gallere-lict li').matchHeight({
        byRow: false
    });

    $('body').css({
        'padding-top': $('header').height(),
    });

})

$(window).resize(function(){

    $('body').css({
        'padding-top': $('header').height(),
    });
    
});