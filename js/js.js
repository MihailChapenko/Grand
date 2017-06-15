$(document).ready(function() {

    $(".btn-show-popup").click(function(event) {
        event.preventDefault();
        $(".popup").fadeIn(100);
    });

    $('a.close-btn').click(function(event) {
        event.preventDefault();
        $(".popup").fadeOut(0);
    });

    $('a[href^="#site-header"]').bind('click.smoothscroll', function(e) {
        e.preventDefault();

        var target = this.hash,
            $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 500, 'swing', function() {
            window.location.hash = target;
        });
    });

});
