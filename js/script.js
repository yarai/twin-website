(function($) {
    "use strict";
    new WOW().init();
    $('a.page-scroll').bind('click', function(event) {
        var $ele = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($ele.attr('href')).offset().top - 20)
        }, 1450, 'easeInOutExpo');
        event.preventDefault();
    });
})(jQuery);