$(document).ready(function(){

    $('body').css({
        'padding-top': $('header').height(),
    });

    jcf.replaceAll();

})

$(window).resize(function(){

    $('body').css({
        'padding-top': $('header').height(),
    });
    
});