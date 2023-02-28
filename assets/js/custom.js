(function ($) {
  "use strict";
  // for sticky navbar
  $(window).scroll(function () {
    if ($(window).scrollTop() > 0) {
      $("#navbar_area").addClass("isSticky");
    } else {
      $("#navbar_area").removeClass("isSticky");
    }
  });

  // Screen Width
  $(".mean-menu").meanmenu({
    meanScreenWidth: "1024",
  });

  // Tween Max
  $(".banner-content").mousemove(function (e) {
    var wx = $(window).width();
    var wy = $(window).height();
    var x = e.pageX - this.offsetLeft;
    var y = e.pageY - this.offsetTop;
    var newx = x - wx / 2;
    var newy = y - wy / 2;
    $(".shape1,.shape2,.shape3,.shape4,.shape5").each(function () {
      var speed = $(this).attr("data-speed");
      if ($(this).attr("data-revert")) speed *= -0.4;
      TweenMax.to($(this), 1, { x: 1 - newx * speed, y: 1 - newy * speed });
    });
  });

  // Pages Slider
  var swiper = new Swiper(".swiper-container", {
    effect: "coverflow",
    grabCuarsor: true,
    centeredSlides: true,
    spaceBetween: 100,
    loop: true,
    coverflowEffect: {
      rotate: 40,
      stretch: 2,
      depth: 200,
      modifier: 1,
      slideShadows: false,
    },
    autoplay: {
      delay: 5000,
    },
    breakpoints: {
      500: {
        slidesPerView: 1,
      },
      1400: {
        slidesPerView: 2,
      },
      3000: {
        slidesPerView: 2,
      },
    },
    navigation: {
      nextEl: ".swiper-next",
      prevEl: ".swiper-prev",
    },
  });

  // LayOut Slider
  $(".layoutSlider").slick({
    autoplay: false,
    slidesToShow: 7,
    centerMode: true,
    slidesToScroll: 1,
    asNavFor: ".layoutPreview",
    focusOnSelect: true,
    prevArrow:
      '<iconify-icon class="prev" icon="line-md:arrow-left"></iconify-icon>',
    nextArrow:
      '<iconify-icon class="next" icon="line-md:arrow-right"></iconify-icon>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $(".layoutPreview").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: ".layoutSlider",
  });

//   $("#scroller").simplyScroll({
//     speed: 5,
//     frameRate: 20,
//     pauseOnHover: false
//   });

  // Accordion
  $(".acc__title").click(function (j) {
    var dropDown = $(this).closest(".acc__card").find(".acc__panel");
    $(this).closest(".acc").find(".acc__panel").not(dropDown).slideUp();

    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
    } else {
      $(this).closest(".acc").find(".acc__title.active").removeClass("active");
      $(this).addClass("active");
    }

    dropDown.stop(false, true).slideToggle();
    j.preventDefault();
  });

  // Submit Form
  $("#newsletterForm").on("submit", function (event) {
    event.preventDefault();
    let email = $("#newsletterEmail").val();
    (async () => {
      const rawResponse = await fetch('https://codeshaper.net/api/newsletter-subscription', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': 'https://codeshaper.net'
        },
        body: JSON.stringify({email: email})
      });
      // const content = await rawResponse.json();
    })()
  });
})(jQuery);
