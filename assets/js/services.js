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

    var flag = 0;

    function clickCounter() {
        return flag;
    }

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
        if($(window).width() < 768 ){

            $('.text').readmore({
                speed: 500,
                lessLink: '<a class="show-more active" href="#"><span>Свернуть <i class="icon-arrow"></i></span></a>',
                moreLink: '<a class="show-more" href="#"><span>Узнать больше <i class="icon-arrow"></i></span></a>',
                collapsedHeight: 310,
            });
    
        }
    });

    

})

$(window).resize(function(){

    $('body').css({
        'padding-top': $('header').height(),
    });
    
});