// Всплывающее меню в секции "menu"
// Syntax:  $(selector).hover(inFunction,outFunction)

$(document).ready(function () {
    $('.catalog').hover(function () {
        $('.catalog img').toggleClass('opens');
        $('.submenu').css({ 'visibility': 'visible', 'opacity': '1' });
    }, function () {
            $('.submenu').css({ 'visibility': 'hidden', 'opacity': '0' });
            $('.catalog img').removeClass('opens');
    });
});

// Переключение языка
$(document).ready(function () {
    $('.EN').click(function () {
        $(this).toggleClass('languageE');
        $('.RU').toggleClass('languageR');

    });
    $('.RU').click(function () {
        $(this).toggleClass('languageR');
        $('.EN').removeClass('languageE');
    });
});

// Появление строки поиска
$(document).ready(function () {
    $('.search-img').click(function () {
        $('.head-search').toggleClass('input');
    });
});


// burger menu
$(document).ready(function () {
    let menuLink = $('.menu-link'); // три палочки
    let active = $('.active'); // крестик
    let menu = $('.menu'); // блок меню при открытии бургера
    let link = $('.link'); // элементы меню
    let contentItem = $('.content-item'); // элементы каталога товаров
    let content = $('.content'); // блок с элементами в каталоге товаров

    menuLink.click(function () { // при клике на три палочки
        menuLink.toggleClass('active'); // добавляем к ним .active(крестик) и три палочки меняются на крестик
        menu.toggleClass('menu_active'); // добавляем к блоку меню в бургере класс, который показывает его (изначально стоит display: block)
        content.removeClass('contents'); // сворачиваем каталог товаров при нажатии на крестик(закрытие меню)
    });
    link.click(function () { // при клмке на элемент меню
        menu.removeClass('menu_active'); // закрываем его, убирая класс, где меню display: flex
        menuLink.removeClass('active'); // меняем крестик на три палочки, убирая класс с крестиком
    });
    contentItem.click(function () { // при клике на элемент каталога товаров
        menu.removeClass('menu_active'); // закрываем меню, убирая класс, где меню display: flex
        menuLink.removeClass('active'); // меняем крестик на три палочки, убирая класс с крестиком
        content.removeClass('contents'); // к элементам каталога товаров добавляем класс, тем самым сворачивая каталог товаров, выбирая категорию при открытии меню в следующий раз
    });
    $('.subcategory1').click(function () {
        menu.removeClass('menu_active');
        menuLink.removeClass('active');
        $('.panel-collapse').removeClass('open');   
    });
});



// Каталог товаров (accordion) в burger menu
$('.panel-head .click').click(function (e) {
    e.stopPropagation();
    var panelCollapse = $(this).children('.panel-collapse');

    if (panelCollapse.hasClass('open')) {
        $(this).find('.panel-collapse').removeClass('open');
    } else {
        panelCollapse.addClass('open');
    }
});
$('.catalogs').click(function () {
    $('.cat-arrow').toggleClass('opens');
});
$('.active').click(function () {
    $('.cat-arrow').removeClass('opens');
    $('.panel-collapse').removeClass('open');
});



// исчезновение нижней границы при открытии "По брендам"
$(document).ready(function () {
    $('.after').click(function () {
        $(this).toggleClass('afterNon');
    });
});

// Каталог товаров в main
$(document).ready(function () {
    $('.panel-show').click(function () {
        $(this).next().slideToggle();
        $(this).find('.show-arrow').toggleClass('rotate');
        $(this).toggleClass('panel-blue');
        // $(this).prevUntil().removeClass('panel-blue');
        // $(this).nextAll().removeClass('panel-blue');
    }); 
});



// Slider в main
$(document).ready(function () {
    $('.slider-main').slick({
        dots: true,
        arrows: false,
        autoplay: false,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1023,
                settings: {
                    infinite: true,
                    dots: false,
                }
            },

        ]
    });
});

// Кнопки с номерами страниц в Subcategory Page

$('.page-number').click(function () {
    $(this).css({ "background": "#02A0FC", "color": "white" });
    $(this).nextAll().css({ "background": "#F6F6F6", "color": "#666666" });
    $(this).prevUntil().css({ "background": "#F6F6F6", "color": "#666666" });
});



// слайдер на странице product
$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav',
    responsive: [
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
            }
        },
    ]
});
$('.slider-nav').slick({
    slidesToShow: 3.79,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    vertical: true,
    arrows: true,
    prevArrow: '<button class="prev"></button>',
    nextArrow: '<button class="next"></button>',
});
$('.prev').css({ "display": "none" });




// descriptions

$(document).ready(function () {
    $('.text-item').click(function () {
        $(this).css({ "font-weight": "600" });
        $(this).prevUntil().css({ "font-weight": "400" });
        $(this).nextAll().css({ "font-weight": "400" });
    });
});


// Табы на странице Card в секции descr

$(document).ready(function () {
    $('.descr p span').click(function () {
        $('.hide').slideToggle().toggleClass('block'); 
        $(this).toggleClass('none');
        $('.cancel').removeClass('none');
    });
    $('.cancel').click(function () {
        $(this).toggleClass('none');
        $('.descr p span').toggleClass('none');
    });
});

// клик на характеристики

$(document).ready(function () {
    $('.spec').click(function () {
        $('.specific').toggleClass('blocks');
    });
    $('.dark, .info').click(function () {
        $('.specific').removeClass('blocks');
    });
});

// плавные переходы по якорным ссылкам
$(document).ready(function () {
    $('a[href^="#"]').click(function (event) {
        event.preventDefault(); // отменяем стандартное действие
        let sc = $(this).attr("href"), //sc - в переменную заносим информацию о том, к какому блоку надо перейти
            dn = $(sc).offset().top; //dn - определяем положение блока на странице

        $('html, body').animate({scrollTop: dn}, 1000); // анимируем
    });
});


// слайдер в витрине при 576px
// $(document).ready(function () {
//     $('.showcase-slider').slick({
//         autoplay: false,
//         autoplaySpeed: 3000,
//         slidesToShow: 1,
//   });
// });


// $(document).ready(function () {
//     if (window.matchMedia("screen and (max-width: 576px)").matches) {
//         $('.showcase-row').addClass('showcase-slider');
//     } else {
//         $('.showcase-row').removeClass('showcase-slider');
//     }
// });


var mql = window.matchMedia('screen and (max-width: 576px)');
if (mql.matches) {
    // размер окна 479px или меньше
    $('.showcase-slider').slick({
        autoplay: false,
        autoplaySpeed: 3000,
        slidesToShow: 1.7,
        arrows: false,
    });
} else {
    // нет, размер окна более 479px 
    $('.showcase-slider').slick('unslick');
}

// $(window).resize(function () {
//     let width = $(this).width(); 

//     if (width >= 558) {
//         $('.showcase-slider').slick('unslick');
//     } 
// });