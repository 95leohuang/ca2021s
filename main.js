function playVideo1(d) {
    $('#video1_' + d).removeClass("hidden")
    $('#video2_' + d).addClass("hidden")
    if (d == '3')
        $('#link_' + d).addClass("hidden")
}

function playVideo2(d) {
    $('#video2_' + d).removeClass("hidden")
    $('#video1_' + d).addClass("hidden")
    if (d == '3')
        $('#link_' + d).addClass("hidden")
}

function playLink(d) {
    $('#link_' + d).removeClass("hidden")
    $('#video1_' + d).addClass("hidden")
    $('#video2_' + d).addClass("hidden")
}

function randomColor() {
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += Math.floor(Math.random() * 10);
    }
    return color;
}
// $(document).ready(function() {
for (var i = 1; i < 6; i++) {
    // alert('#lab' + i)
    $('#lab0' + i).css('background-color', randomColor());
}
// })

(function($) {
    $.fn.arctic_scroll = function(options) {
        var defaults = {
            elem: $(this),
            speed: 500
        };
        var options = $.extend(defaults, options);

        options.elem.click(function(event) {
            event.preventDefault();
            var offset = $(this).attr("data-offset") ?
                $(this).attr("data-offset") :
                false,
                position = $(this).attr("data-position") ?
                $(this).attr("data-position") :
                false;
            if (offset) {
                var toMove = parseInt(offset);
                $("html,body")
                    .stop(true, false)
                    .animate({ scrollTop: $(this.hash).offset().top + toMove }, options.speed);
            } else if (position) {
                var toMove = parseInt(position);
                $("html,body")
                    .stop(true, false)
                    .animate({ scrollTop: toMove }, options.speed);
            } else {
                $("html,body")
                    .stop(true, false)
                    .animate({ scrollTop: $(this.hash).offset().top }, options.speed);
            }
        });
    };
})(jQuery);

$(function() {
    $(".scroller").arctic_scroll({
        speed: 600
    });
});