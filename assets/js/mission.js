$(document).ready(function(){

    $('.mission-tabs').responsiveTabs({
        startCollapsed: 'accordion',
    });

    $('.slider-tab').slick({
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

        $('.slider-tab').slick('unslick');
  
    }


    var flag = 0;

    function clickCounter() {
        return flag;
    }

    $('.learn-more.open').on('click', function(){

        if (clickCounter() == 0){
            flag = 1;
            var textHeight = $(this).prev('.text-content').find('.text').height();
            console.log(textHeight);
            $(this).addClass('active');
            $(this).prev('.text-content').animate({
               "height": textHeight
            }, 1000 );

        } else {
            flag = 0;
            $(this).removeClass('active');
            $(this).prev('.text-content').animate({
                "height": 310
             }, 1000 );
        }
    });

    $('.r-tabs-anchor').on('click', function(){
        $('.slider-tab').get(0).slick.setPosition();
        $('.slider-tab').get(1).slick.setPosition();
        $('.slider-tab').get(2).slick.setPosition();
        $('.slider-tab1').get(0).slick.setPosition();
        $('.slider-tab2').get(0).slick.setPosition();
        $('.slider-tab3').get(0).slick.setPosition();
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