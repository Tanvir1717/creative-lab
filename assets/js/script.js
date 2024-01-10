// loader
jQuery(document).ready(function() {
     setTimeout(() => {
      jQuery('#loading').fadeOut('slow'), function() {
        $(this).remove();
      };
    },2000);
});
// scroll-nav-start
var num = 500; //number of pixels before modifying styles

$(window).bind("scroll", function() {
    if ($(window).scrollTop() > num) {
        $(".navbar").addClass("fixed");
        $(".navbar").addClass("bg-white");
        $(".navbar").removeClass("mt-5");
    } else {
        $(".navbar").removeClass("bg-white");
        $(".navbar").removeClass("fixed");
        $(".navbar").addClass("mt-5");
    }
});
// scroll-nav-end
//slider-
$(document).ready(function(){
$('.autoplay-testimonial').slick({
  slidesToShow: 3,
  slidesToScroll: 3,
  prevArrow:'<span class="prev_arrow"><i class="bi bi-chevron-left"></i></span>',
  nextArrow:'<span class="next_arrow"><i class="bi bi-chevron-right"></i></span>',
  dots:true,
  autoplay: true,
  autoplaySpeed: 2000,
   responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 530,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
   ]
});
$('.center').slick({
  centerMode: true,
  centerPadding: '100px',
  slidesToShow: 1,
  dots:true,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 1000,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '130px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});
});
// AOS initialized
AOS.init();
$(window).on("scroll",function(){
  AOS.init({
    offset:300,
  });
})