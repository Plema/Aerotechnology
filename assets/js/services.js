$(document).ready(function(){

    $('.title-item').matchHeight({
        byRow: false
    });

    $('body').css({
        'padding-top': $('header').height(),
    });

    $('.item-slider').slick({
        dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        nextArrow: '<button class="slick-arrow next"><i class="icon-arrow-next"></i></button>',
        prevArrow: '<button class="slick-arrow prev"><i class="icon-arrow-prev"></i></button>',
        responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            },
        ]
    });

    if($(window).width() >= 1024){

        $('.item-slider').slick('unslick');
  
    }

    if($('.item-content').find('.text').height() <= 280){
        $(this).parents('.services-item').addClass('on');   
    }

    var flag = 0;

    function clickCounter() {
        return flag;
    }

    $('.learn-more.open').on('click', function(){

        if (clickCounter() == 0){
            flag = 1;
            var textHeight = $(this).prev('.item-content').find('.text').height();
            console.log(textHeight);
            $(this).addClass('active');
            $(this).prev('.item-content').animate({
               "height": textHeight
            }, 1000 );

        } else {
            flag = 0;
            $(this).removeClass('active');
            $(this).prev('.item-content').animate({
                "height": 310
             }, 1000 );
        }
        
    });

    $('.title-item').on('click', function(){
        if (clickCounter() == 0){
            flag = 1;
            $('.tab').removeClass('active');
            var tabData = $(this).data('tab');
            $('.' + tabData).toggleClass('active');
            $('.item-slider').get(0).slick.setPosition();
            $('.item-slider').get(1).slick.setPosition();
            $('.item-slider').get(2).slick.setPosition();
        } else {
            flag = 0;
            $('.tab').removeClass('active');
        }
    });

})

$(window).resize(function(){

    $('body').css({
        'padding-top': $('header').height(),
    });
    
});