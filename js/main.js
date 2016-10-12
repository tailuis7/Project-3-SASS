$(document).ready(function() {
    $(".navbar-default .navbar-collapse .nav > li > a").mouseover(function() {
        var scrollTop = $(window).scrollTop();
        var menuOffset = $("nav").offset().top;
        var distance = (menuOffset - scrollTop);
        console.log(distance);
        /*console.log(menuOffset);
        console.log(scrollTop);*/
        $(this).siblings(".dropdown-menu").css({
                "display": "inline-block",
                "top": distance + 48
            },
            "slow");
        $(this).mouseout(function() {
            $(this).siblings(".dropdown-menu").css({ "display": "none" }, "slow");
        });
        $(this).siblings(".dropdown-menu").mouseover(function() {
            $(this).css({ "display": "inline-block" }, "slow");
        });
    });
    $(".dropdown-menu").mouseout(function() {
        $(this).css({ "display": "none" }, "slow");
    });
});
