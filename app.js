$(document).ready(function () {



    $(".js-scroller").click(function () {

        $(this).prop('disabled', true);
        $('html,body').animate({
            scrollTop: $("." + this.id).offset().top
        }, 600, "swing");
        $(this).prop('disabled', false);
    });
    
});


/*

   $(".js-scroller").mouseenter(function () {
        $(this).children().addClass("btn-hover");

    });
    $(".js-scroller").mouseleave(function () {
        $(this).children().removeClass("btn-hover");


*/