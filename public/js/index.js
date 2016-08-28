$(document).ready(function () {

    $('.user-settings').click(function () {
        $('.user-settings .dropdown-menu').animate({
            height: "toggle",
            'padding-top': 'toggle',
            'padding-bottom': 'toggle',
            opacity: "toggle"
        }, "slow");

    });

    $('.sidebar-nav li.dropdown').click(function () {

        $('.sidebar-nav li.dropdown .dropdown-menu').animate({
            height: "toggle",
            'padding-top': 'toggle',
            'padding-bottom': 'toggle',
            opacity: "toggle"
        }, "slow");

    });

    $("body").on("click", function (event) {

        if (!$(event.target).parents('.user-settings').length) {
            $('.user-settings .dropdown-menu').hide();
        }
    });

    var trigger = $('.hamburger'),
        overlay = $('.overlay'),
        isClosed = false;

    trigger.click(function () {
        hamburger_cross();
    });

    function hamburger_cross() {

        if (isClosed == true) {
            overlay.hide();
            trigger.removeClass('is-open');
            trigger.addClass('is-closed');
            isClosed = false;
        } else {
            overlay.show();
            trigger.removeClass('is-closed');
            trigger.addClass('is-open');
            isClosed = true;
        }
    }

    $('[data-toggle="offcanvas"]').click(function () {
        $('#wrapper').toggleClass('toggled');
    });

    $("#open_btn").click(function () {
        $.FileDialog({
            accept: "*",
            cancel_button: "Close",
            drag_message: "Drop files here",
            dropheight: 400,
            error_message: "An error occured while loading file",
            multiple: !0,
            ok_button: "Upload",
            readAs: "DataURL",
            remove_message: "Remove&nbsp;file",
            title: "Upload file(s)"
        });
    });
    // For keeping track of movement
    var divider2storage = $("#editor-1").width();

    $(".divider").draggable({

        // restrict the movement to only horizontal
        axis: "x",

        // restrict the movement to the row
        containment: $(".top-boxes"),

        drag: function (e, ui) {

            // divider-1
            if (ui.helper[0].id === "divider-1") {
                //
                //// fix 3 how it is
                //$("#editor-3").css("flex", "0 1 " + $("#editor-3").width() + "px");

                // let 2 flow
                $("#editor-2").css("flex", "1");

                // let 1 move
                $("#editor-1").css("flex", "0 1 " + (ui.offset.left - 20) + "px");

                // divider-2
            } else {
                //
                //// fix 1 how it is.
                //$("#editor-1").css("flex", "0 1 " + $("#editor-1").width() + "px");
                //
                //// let 3 flow
                //$("#editor-3").css("flex", "1");
                //
                //// let 2 move
                //$("#editor-2").css("flex", "0 1 " + (divider2storage + ui.position.left) + "px");

                /* Changed */

                // let 2 flow
                $("#editor-2").css("flex", "1");

                // let 1 move
                $("#editor-1").css("flex", "0 1 " + (ui.offset.left - 20) + "px");

            }
        },

        stop: function (e, ui) {

            // jQuery UI starts over at 0 when you move again
            // (WHYYY, doesn't seem to in demos)
            // So, storing it ourselves to use

            // If divider-2 moves, keep track of where it moved
            if (ui.helper[0].id === "divider-2") {
                divider2storage = divider2storage + ui.position.left;

                // If divider-1 moves, use this value so any further movement of divider-2 starts where it should
            } else {
                divider2storage = $("#editor-2").width();
            }

        }

    });

    $("input").on("change", function () {
        if ($(this).is(":checked")) {
            $($(this).val()).removeClass("off");
        } else {
            $($(this).val()).addClass("off");
        }
    });

});

