// sticky-menu
$(window).scroll(function () {
    if ($(window).scrollTop() > 100) {
        $(".menu").addClass("fixedmenu")
    } else {
        $(".menu").removeClass("fixedmenu")
    }
})
// BANNER-PART  JS START

$('.banner-slider').slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 3000,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 400,
    prevArrow: '<i class="fas fa-arrow-left prev"></i>',
    nextArrow: '<i class="fas fa-arrow-right next"></i>',
    responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});
// BANNER-PART JS END

// CLINET-PART JS START
$('.client-slider').slick({
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});
// CLIENT-PART JS END

// TYPE JS

var typed = new Typed('.element', {
    /**
     * @property {array} strings strings to be typed
     * @property {string} stringsElement ID of element containing string children
     */
    strings: [
        'I AM A Photographer.',
        'I AM A Graphic Designer.',
        'I AM A Web developer.',
    ],
    stringsElement: null,

    /**
     * @property {number} typeSpeed type speed in milliseconds
     */
    typeSpeed: 100,
    backSpeed: 40,
    loop: true,
    showCursor: false,

});
var typed = new Typed('.element1', {
    /**
     * @property {array} strings strings to be typed
     * @property {string} stringsElement ID of element containing string children
     */
    strings: [
        'I AM A Photographer.',
        'I AM A Graphic Designer.',
        'I AM A Web developer.',
    ],
    stringsElement: null,

    /**
     * @property {number} typeSpeed type speed in milliseconds
     */
    typeSpeed: 100,
    backSpeed: 40,
    loop: true,
    showCursor: false,

});
var typed = new Typed('.element2', {
    /**
     * @property {array} strings strings to be typed
     * @property {string} stringsElement ID of element containing string children
     */
    strings: [
        'I AM A Photographer.',
        'I AM A Graphic Designer.',
        'I AM A Web developer.',
    ],
    stringsElement: null,

    /**
     * @property {number} typeSpeed type speed in milliseconds
     */
    typeSpeed: 100,
    backSpeed: 40,
    loop: true,
    showCursor: false,

});