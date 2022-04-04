$(window).scroll(function() {

    if ($(window).scrollTop() > 50) {
        $('header').css('border-radius', '0');
        $('header').css('top', '0');
    }
})

$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            400: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    })

});
$(window).on("scroll", function() {
    if ($(this).scrollTop() > 50) {
        $('.header-down').addClass('none');

    } else {
        $('.header-down').removeClass('none');
    }
});
$(".hamburger-inner").click(function() {
    $(".vs-menu-wrapper").toggleClass("vs-body-visible");
});
$(".vs-menu-toggle").click(function() {
    $(".vs-menu-wrapper").removeClass("vs-body-visible");
});

function menuToogle() {
    const toogleMenu = document.querySelector('.menu');
    toogleMenu.classList.toggle('active');
}

function menuToogle2() {
    const toogleMenu2 = document.querySelector('.search-form');
    toogleMenu2.classList.toggle('active');
}

const navToggler = document.querySelector(".button--filled-open");
navToggler.addEventListener("click", toggleNav);


function toggleNav() {
    navToggler.classList.toggle("active");
};


$(document).ready(function() {

    $("#login").click(function() {
        $("#searchbar").css("display", "none");
        $("#login").css("display", "none");
        $("#register").css("display", "none");
        $("#profile").css("display", "flex");
    })
});