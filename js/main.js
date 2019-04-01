// Инициализация owlCarousel
jQuery(function ($) {
    $('.slide-1').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            }
        }
    });
    $('.slide-2').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            }
        }
    });
});

// Инициализация jQueryFormStyler
// Для активации плагина примените метод .styler к тегам, которые хотите стилизовать
// флажок <input type="checkbox">;
// переключатель <input type="radio">;
// поле для выбора файла <input type="file">.
// поле для ввода чисел <input type="number">.
// раскрывающийся список <select>;
(function ($) {
    $(function () {
        $('input, select').styler();
    });
})(jQuery);

// Инициализация Fancybox
$().fancybox({
    selector: '[data-fancybox="gallery"]',
    loop: true
});

//Инициализация маски ввода телефона
jQuery(function ($) {
    $(".maskedinput").mask("+38 ( 999 ) 999-99-99");
});

$('#pills-profile-tab').click(function () {
    $('.beef-2').addClass("ivi");
    $('.beef-1').removeClass("ivi");
});

$('#pills-home-tab').click(function () {
    $('.beef-2').removeClass("ivi");
    $('.beef-1').addClass("ivi");
});

//
jQuery(function ($) {
    $('[data-fancybox]').fancybox({
        protect: true
    });
});
