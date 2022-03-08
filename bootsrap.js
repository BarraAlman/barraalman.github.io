jQuery(window).scroll(function () {
    var top = jQuery(document).scrollTop();
    var height = 200;

    if (top > height) {
        //sticky-top or fixed-top
        jQuery('.sticky-top').addClass('bg-opacity-75');
    } else {
        jQuery('.sticky-top').removeClass('bg-opacity-75');
    }
});