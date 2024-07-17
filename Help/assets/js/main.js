/*
    Hyperspace by HTML5 UP
    html5up.net | @ajlkn
    Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function ($) {

    var $window = $(window),
        $body = $('body'),
        $sidebar = $('#sidebar');

    // Hack: Enable IE flexbox workarounds.
    if (browser.name == 'ie')
        $body.addClass('is-ie');

    // Play initial animations on page load.
    $window.on('load', function () {
        window.setTimeout(function () {
            $body.removeClass('is-preload');
        }, 100);
    });

    // Forms.

    // Hack: Activate non-input submits.
    $('form').on('click', '.submit', function (event) {

        // Stop propagation, default.
        event.stopPropagation();
        event.preventDefault();

        // Submit form.
        $(this).parents('form').submit();
    });

    // Sidebar.
    if ($sidebar.length > 0) {

        var $sidebar_a = $sidebar.find('a');

        $sidebar_a
            .addClass('scrolly')
            .on('click', function () {
                var $this = $(this);
                // External link? Bail.
                if ($this.attr('href').charAt(0) != '#')
                    return;

                // Deactivate all links.
                $sidebar_a.removeClass('active');

                // Activate link *and* lock it (so Scrollex doesn't try to activate other links as we're scrolling to this one's section).
                $this
                    .addClass('active')
                    .addClass('active-locked');
            })
            .each(function () {

                var $this = $(this),
                    id = $this.attr('href'),
                    $section = $(id);

                // No section for this link? Bail.
                if ($section.length < 1)
                    return;

                // Scrollex.
                $section.scrollex({
                    mode: 'middle',
                    top: '-20vh',
                    bottom: '-20vh',
                    initialize: function () {
                        // Deactivate section.
                        $section.addClass('inactive');

                    },
                    enter: function () {
                        // Activate section.
                        $section.removeClass('inactive');

                        // No locked links? Deactivate all links and activate this section's one.
                        if ($sidebar_a.filter('.active-locked').length == 0) {
                            $sidebar_a.removeClass('active');
                            $this.addClass('active');
                        }

                        // Otherwise, if this section's link is the one that's locked, unlock it.
                        else if ($this.hasClass('active-locked'))
                            $this.removeClass('active-locked');
                    }
                });

            });

    }

    // Scrolly.
    $('.scrolly').scrolly({
        speed: 1000,
        offset: function () {
            return 0;
        }
    });

    // Spotlights.
    $('.spotlights > section')
        .scrollex({
            mode: 'middle',
            top: '-10vh',
            bottom: '-10vh',
            initialize: function () {
                // Deactivate section.
                $(this).addClass('inactive');
            },
            enter: function () {
                // Activate section.
                $(this).removeClass('inactive');
            }
        })
        .each(function () {

            var $this = $(this),
                $image = $this.find('.image'),
                $img = $image.find('img'),
                x;

            // Assign image.
            $image.css('background-image', 'url(' + $img.attr('src') + ')');

            // Set background position.
            if (x = $img.data('position'))
                $image.css('background-position', x);

            // Hide <img>.
            $img.hide();

        });

    // Features.
    $('.features')
        .scrollex({
            mode: 'middle',
            top: '-20vh',
            bottom: '-20vh',
            initialize: function () {
                // Deactivate section.
                $(this).addClass('inactive');
            },
            enter: function () {
                // Activate section.
                $(this).removeClass('inactive');

            }
        });

})(jQuery);

function webview2postMessage(args) {
    if (typeof window.chrome.webview !== 'undefined')
        window.chrome.webview.postMessage(args);
}
//初始化完成  
window.onload = function (e) {
    webview2postMessage({ Key: "onload" });
}

//覆盖右键菜单
document.addEventListener('contextmenu', function (event) {
    event.preventDefault();
    webview2postMessage({
        Key: 'contextmenu',
        Pos: { X: event.x, Y: event.y, },
        SelectedText: window.getSelection().toString()
    });
});
//后退
function pageBack() {

    var prevPage = window.location.href;
    history.back(-1);
    setTimeout(function () {
        if (window.location.href == prevPage) {
            window.location.href = './index.html';
        }
    }, 500);
}

