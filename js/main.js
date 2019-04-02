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

// OWL с иконками
$(document).ready(function () {
    var bigimage = $("#big");
    var thumbs = $("#thumbs");
    //var totalslides = 10;
    var syncedSecondary = true;

    bigimage
        .owlCarousel({
            items: 1,
            slideSpeed: 2000,
            nav: false,
            autoplay: true,
            dots: false,
            loop: true,
            responsiveRefreshRate: 200,
            navText: [
                '<i class="fa fa-arrow-left" aria-hidden="true"></i>',
                '<i class="fa fa-arrow-right" aria-hidden="true"></i>'
            ]
        })
        .on("changed.owl.carousel", syncPosition);

    thumbs
        .on("initialized.owl.carousel", function () {
            thumbs
                .find(".owl-item")
                .eq(0)
                .addClass("current");
        })
        .owlCarousel({
            items: 4,
            dots: false,
            nav: false,
            navText: [
                '<i class="fa fa-arrow-left" aria-hidden="true"></i>',
                '<i class="fa fa-arrow-right" aria-hidden="true"></i>'
            ],
            smartSpeed: 200,
            slideSpeed: 500,
            slideBy: 4,
            responsiveRefreshRate: 100
        })
        .on("changed.owl.carousel", syncPosition2);

    function syncPosition(el) {
        //if loop is set to false, then you have to uncomment the next line
        //var current = el.item.index;

        //to disable loop, comment this block
        var count = el.item.count - 1;
        var current = Math.round(el.item.index - el.item.count / 2 - 0.5);

        if (current < 0) {
            current = count;
        }
        if (current > count) {
            current = 0;
        }
        //to this
        thumbs
            .find(".owl-item")
            .removeClass("current")
            .eq(current)
            .addClass("current");
        var onscreen = thumbs.find(".owl-item.active").length - 1;
        var start = thumbs
            .find(".owl-item.active")
            .first()
            .index();
        var end = thumbs
            .find(".owl-item.active")
            .last()
            .index();

        if (current > end) {
            thumbs.data("owl.carousel").to(current, 100, true);
        }
        if (current < start) {
            thumbs.data("owl.carousel").to(current - onscreen, 100, true);
        }
    }

    function syncPosition2(el) {
        if (syncedSecondary) {
            var number = el.item.index;
            bigimage.data("owl.carousel").to(number, 100, true);
        }
    }

    thumbs.on("click", ".owl-item", function (e) {
        e.preventDefault();
        var number = $(this).index();
        bigimage.data("owl.carousel").to(number, 300, true);
    });
});


// Плавный скролл
jQuery(function ($) {
    $('.flowing-scroll').on('click', function () {
        var el = $(this);
        var dest = el.attr('href'); // получаем направление
        if (dest !== undefined && dest !== '') { // проверяем существование
            $('html').animate({
                    scrollTop: $(dest).offset().top // прокручиваем страницу к требуемому элементу
                }, 1500 // скорость прокрутки
            );
        }
        return false;
    });
});


jQuery(function ($) {
    $(document).ready(function () {
        var s = $(".nav__scroll");
        var pos = s.position();
        $(window).scroll(function () {
            var windowpos = $(window).scrollTop();
            if (windowpos >= pos.top & windowpos >= 100) {
                s.addClass("stick fadeInDown");
            } else {
                s.removeClass("stick fadeInDown");
            }
        });
    });
});

// Инициализация WoW
new WOW().init();
