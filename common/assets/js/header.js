// SCROLLING EFFECT
$(window).scroll(function () {
    let ypos = window.pageYOffset;

    if (ypos > 0) {
        let navbar = $(".navbar")

        navbar.removeClass("transparent");
        navbar.addClass("solid");
    }
    else {
        let navbar = $(".navbar")

        navbar.removeClass("solid");
        navbar.addClass("transparent");
    }
});

// OVERLAY MENU CLICKED
$(document).ready(function () {

    function switchMenuVisibility() {
        let overlayMenu = $(".overlay-menu")

        if (overlayMenu.hasClass("collapsed")) {

            overlayMenu.removeClass("collapsed");
            overlayMenu.addClass("expanded");

        }
        else if (overlayMenu.hasClass("expanded")) {

            overlayMenu.removeClass("expanded");
            overlayMenu.addClass("collapsed");

        }
    }

    $(".hamburger").click(function () { switchMenuVisibility(); })
    $(".times").click(function () { switchMenuVisibility(); })
    $("#overlay-home").click(function () { switchMenuVisibility(); })
    $("#overlay-about").click(function () { switchMenuVisibility(); })
    $("#overlay-contacts").click(function () { switchMenuVisibility(); })
})