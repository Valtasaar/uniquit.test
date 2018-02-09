/*
* Mmenu
* */
$(document).ready(function() {
    /* Site menu */
    let siteMenu = $(".js-site-menu");
    let siteMenuBtn = $(".js-site-menu-btn");

    siteMenu.mmenu({
        "extensions": [
            "pagedim-black",
            "position-front"
        ],
        navbar: {
            title: `
            Site Menu
            <button class="js-close-btn hamburger hamburger--collapse is-active" type="button">
                <span class="hamburger-box">
                  <span class="hamburger-inner"></span>
                </span>
            </button>
            `
        },
        onClick: {
            close: true
        }
    });

    let API = siteMenu.data( "mmenu" );

    siteMenuBtn.click(function() {
        API.open();
    });

    $(".js-close-btn").click(function () {
        API.close();
    });

    /* User Menu */
    let userMenu = $(".js-user-menu");
    let userMenuBtn = $('.js-user-menu-btn');

    userMenu.mmenu({
        "extensions": [
            "pagedim-black",
            "popup"
        ],
        navbar: {
            title: 'User Menu'
        },
        onClick: {
            close: true
        }
    });

    let userMenuAPI = userMenu.data( "mmenu" );

    userMenuBtn.click(function() {
        userMenuAPI.open();
    });
});

/* Accordion */
let collapse = $('div.collapse');

collapse.on('show.bs.collapse', function () {
    let parent = $(this).parent();

    $.each($('div.main__list-item'), function () {
        $(this).removeClass('open');
    });

    parent.addClass('open');
    parent.find('svg.fa-angle-right').attr('data-fa-transform', 'rotate-90');
});
collapse.on('hide.bs.collapse', function () {
    let parent = $(this).parent();

    parent.removeClass('open');
    parent.find('svg.fa-angle-right').attr('data-fa-transform', 'rotate-0');
});

/*
* Page Loader
* */
$(window).on('load', function () {
    let loader = $('.loader');

    let int = setInterval(function(){
        if(document.readyState === 'complete'){
            loader.addClass('loaded');

            clearInterval(int);
        }
    },10);

    setTimeout(function() {
        loader.hide();
    }, 300);
});

/*
* Main menu mobile
* */
let mainMenuBtn = $(".js-main-menu-btn");

mainMenuBtn.click(function() {
    $('.js-main-menu').toggleClass('open');
    $(this).toggleClass('is-active');
});
