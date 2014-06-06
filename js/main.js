// Rotator tekstu

(function($) {
    $.fn.rotator = function(settings) {
        settings = jQuery.extend({
            interval: 4000,
            speed: 1000
        }, settings);

        return this.each(function() {
            var $t = $(this),
                $item = $t.children().addClass('item').hide();

            $t.addClass('rotator');

            if ($item.length > 1) {
                $item.first().addClass('current').fadeIn(settings.speed);
                setInterval(function() {
                    var c = $t.find('.current');
                    if (c.next().length === 0) {
                        c.removeClass('current').fadeOut(settings.speed);
                        $item.first().addClass('current').fadeIn(settings.speed);
                    } else {
                        c.removeClass('current').fadeOut(settings.speed).next().addClass('current').fadeIn(settings.speed);
                    }
                }, settings.interval);
            }
        });
    };
})(jQuery);

$(function() {
    $('.rotacja1').rotator();
    $('.rotacja2').rotator({speed:700});
    $('.rotacja3').rotator({speed:400,interval:1000});
});



//Scrolowanie
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});