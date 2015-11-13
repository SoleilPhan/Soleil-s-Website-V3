var num = 30; //number of pixels before modifying styles

$(window).bind('scroll', function () {
    if ($(window).scrollTop() > num) {
        $('.nav').addClass('navscroll');
    } else {
        $('.nav').removeClass('navscroll');
    }
});

console.log($(window).scrollTop())
