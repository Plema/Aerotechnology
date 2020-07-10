$(document).ready(function(){

    $('.product .img').matchHeight({
        byRow: false
    });

    $('.product .name').matchHeight({
        byRow: false
    });

    $('.product-tabs li').on('click', function(){
        var productActive = $(this).data('tabs');
        $('.product-tabs li').removeClass('active');
        $(this).addClass('active');
        $('.product-slider').removeClass('active');
        $('#' + productActive).addClass('active');
        console.log(productActive);
    });

    if($(window).width() >= 768){
        $('.product .product-item').matchHeight({
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