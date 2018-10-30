$(function() {

    $('.reviews-slider').slick({
        infinite: true,
        slidesToShow: 1,
        appendArrows: ".reviews-slider",
        nextArrow: '<a class="arrow arrow--right">',
        prevArrow: '<a class="arrow arrow--left">',
        slidesToScroll: 1
    });

    $(".header-nav, .header-nav--mobile, .reviews-button, .reasons, .advantages").on("click", "a", function(event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({
            scrollTop: top
        }, 1500);
    });
});


$(function() {
    $('.header__phone').on("click", function() {
        $('.header__secphone').slideToggle("slow");
    });
});

$(document).ready(function() {
    $("#headbox").on("click", function() {
        if ($('#headbox').is(":checked")) {
            $('#headbtn').removeAttr('disabled');
        } else {
            $('#headbtn').attr('disabled', 'disabled');
        }
    })
    $("#middlebox").on("click", function() {
        if ($('#middlebox').is(":checked")) {
            $('#middlebtn').removeAttr('disabled');
        } else {
            $('#middlebtn').attr('disabled', 'disabled');
        }
    })
    $("#footerbox").on("click", function() {
        if ($('#footerbox').is(":checked")) {
            $('#footerbtn').removeAttr('disabled');
        } else {
            $('#footerbtn').attr('disabled', 'disabled');
        }
    })
    $("#costbox").on("click", function() {
        if ($('#costbox').is(":checked")) {
            $('#costbtn').removeAttr('disabled');
        } else {
            $('#costbtn').attr('disabled', 'disabled');
        }
    })
    $("#giftbox").on("click", function() {
        if ($('#giftbox').is(":checked")) {
            $('#giftbtn').removeAttr('disabled');
        } else {
            $('#giftbtn').attr('disabled', 'disabled');
        }
    })
});

$(function() {
    $(".form__phone, .calc-form__phone").mask("38099 9999999");
});

$(function Video() {
    btn = $('.works-column--price'),
        vid = $('.modal--video, .content--video');

    btn.on('click', function() {
        vid.fadeIn();
    });

    $('.modal--video').on('click', function(event) {
        var select = $('.content');
        if ($(event.target).closest(select).length)
            return;
        vid.fadeOut();
    });
});

$(function Price() {
    btn = $('#getPrice'),
        price = $('.cover, .modal--price, .content--price');

    btn.on('click', function() {
        price.fadeIn();
    });
    $('.close_btn').on('click', function() {
        price.fadeOut();
    });

    $('.cover').click(function() {
        $('.cover').on('click', function(event) {
            var select = $('.content');
            if ($(event.target).closest(select).length)
                return;
            price.fadeOut();
        });
    });
});

$(function Gift() {
    btn = $('#getGift'),
        gift = $('.cover, .modal--gift, .content--gift');

    btn.on('click', function() {
        gift.fadeIn();
    });
    $('.close_btn').on('click', function() {
        gift.fadeOut();
    });

    $('.cover').click(function() {
        $('.cover').on('click', function(event) {
            var select = $('.content');
            if ($(event.target).closest(select).length)
                return;
            gift.fadeOut();
        });
    });
});

$(document).ready(function() {
    $('#calcSelect').select2({
        placeholder: "Качество записи видео",
        minimumResultsForSearch: '10'
    });
});

$(document).ready(function() {
    $('#calcNumber1').number_plugin({
        width: '80px',
        height: '35px'
    });
});

$(document).ready(function() {
    $('#calcNumber2').number_plugin({
        width: '80px',
        height: '35px'
    });
});

$(document).ready(function() {
    $('#calcSelect').change(function() {
        $selectPrice = $('#calcSelect').val();
        $radioPrice = $('.checkbox-wrapper--input:checked').val()
        $numberOnePrice = $('#calcNumber1').val()
        $numberTwoPrice = $('#calcNumber2').val()
        $('#finalPrice').text(parseInt($selectPrice) + parseInt($radioPrice) + parseInt($numberOnePrice) + parseInt($numberTwoPrice));
    })

    $('.checkbox-wrapper--input').change(function() {
        $selectPrice = $('#calcSelect').val();
        $radioPrice = $('.checkbox-wrapper--input:checked').val()
        $numberOnePrice = $('#calcNumber1').val()
        $numberTwoPrice = $('#calcNumber2').val()
        $('#finalPrice').text(parseInt($selectPrice) + parseInt($radioPrice) + parseInt($numberOnePrice) + parseInt($numberTwoPrice));
    })

    $('#calcNumber1').bind('keyup mouseup click', function() {
        $selectPrice = $('#calcSelect').val();
        $radioPrice = $('.checkbox-wrapper--input:checked').val()
        $numberOnePrice = $('#calcNumber1').val()
        $numberTwoPrice = $('#calcNumber2').val()
        $('#finalPrice').text(parseInt($selectPrice) + parseInt($radioPrice) + parseInt($numberOnePrice) + parseInt($numberTwoPrice));
    })

    $('#calcNumber2').bind('keyup change click', function() {
        $selectPrice = $('#calcSelect').val();
        $radioPrice = $('.checkbox-wrapper--input:checked').val()
        $numberOnePrice = $('#calcNumber1').val()
        $numberTwoPrice = $('#calcNumber2').val()
        $('#finalPrice').text(parseInt($selectPrice) + parseInt($radioPrice) + parseInt($numberOnePrice) + parseInt($numberTwoPrice));
    })
});

$(function() {
    $('.menu__icon').on('click', function() {
        $(this).closest('.menu').toggleClass('menu_state_open');
        $('.header-nav--mobile').toggleClass('show');
    });
});

$(function() {
    $('.header-nav--close').on('click', function() {
        $(this).closest('.menu').toggleClass('menu_state_open');
        $('.header-nav--mobile').removeClass('show');
    });
});


$('.politics__link').magnificPopup({
    type: 'inline',
    preloader: false,
    focus: '#username',
});