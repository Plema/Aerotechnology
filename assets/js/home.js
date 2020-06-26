$(document).ready(function(){

    $('.banner').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: false,
        nextArrow: '<button class="slick-arrow next"><i class="icon-arrow-next"></i></button>',
        prevArrow: '<button class="slick-arrow prev"><i class="icon-arrow-prev"></i></button>',
    });

    var flag = 0;

    function clickCounter() {
        return flag;
    }

    $('.learn-more.open').on('click', function(){

        if (clickCounter() == 0){
            flag = 1;
            var textHeight = $('.text-open').height();
            $('.learn-more').addClass('active');
            $('.about').find('.text').animate({
               "height": textHeight
            }, 1000 );

        } else {
            flag = 0;
            $('.learn-more').removeClass('active');
            $('.about').find('.text').animate({
               "height": 340
            }, 1000 );
        }
    });

    $('.product .img').matchHeight({
        byRow: false
    });

    $('.product-tabs li').on('click', function(){
        $('.product-tabs li').removeClass('active');
        $(this).addClass('active');
    });

    $('.product-slider').slick({
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: '<button class="slick-arrow next"><i class="icon-arrow-next"></i></button>',
        prevArrow: '<button class="slick-arrow prev"><i class="icon-arrow-prev"></i></button>',
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
              }
            },
        ]
    });

    $('.missions-slider').slick({
        dots: true,
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
              breakpoint: 1280,
              settings: {
                arrows: false,
                slidesToShow: 3,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 1024,
              settings: {
                arrows: true,
                slidesToShow: 2,
                slidesToScroll: 1,
                nextArrow: '<button class="slick-arrow next"><i class="icon-arrow-next"></i></button>',
                prevArrow: '<button class="slick-arrow prev"><i class="icon-arrow-prev"></i></button>',
              }
            },
            {
              breakpoint: 768,
              settings: {
                arrows: true,
                slidesToShow: 3,
                slidesToScroll: 1,
                nextArrow: '<button class="slick-arrow next"><i class="icon-arrow-next"></i></button>',
                prevArrow: '<button class="slick-arrow prev"><i class="icon-arrow-prev"></i></button>',
              }
            },
        ]
    });

    if($(window).width() >= 1024){

        $('.product-slider').slick('unslick');
  
    }

})

$(window).resize(function(){

    if($(window).width() < 1024){

        $('.product-slider').slick({
            dots: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            nextArrow: '<button class="slick-arrow next"><i class="icon-arrow-next"></i></button>',
            prevArrow: '<button class="slick-arrow prev"><i class="icon-arrow-prev"></i></button>',
            responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                  }
                },
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                  }
                },
            ]
        });
  
    }

});