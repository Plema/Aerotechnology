$(document).ready(function(){

    $('body').css({
        'padding-top': $('header').height(),
    });

})

$(window).resize(function(){

    $('body').css({
        'padding-top': $('header').height(),
    });
    
});