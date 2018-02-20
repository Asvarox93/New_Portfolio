$(document).ready(function () {
    const nav_menu = $('.navigation_menu');
    const nav_bar = $('.navigation_bar');
    //hamburger
    nav_bar.click(function(){
        $(this).toggleClass('navigation_bar--open');
        nav_menu.toggle();
    });
    
    onResize();
    $(window).on('resize',onResize)
    $(document).on("scroll", onScroll);
    
    //smoothscroll
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        onResize();
        nav_bar.removeClass('navigation_bar--open');
        $('a').each(function () {
            $(this).removeClass('active');
            $(this).parent().removeClass('active');
        })
        $(this).addClass('active');
        $(this).parent().addClass('active');
      
        let target = this.hash;
        let $target = $(target).offset().top - 70;
    
        $('html, body').stop().animate({
            'scrollTop': $target
        }, 500,'swing', function () {
            
            $(document).on("scroll", onScroll);
        });
    });

});

function onResize(event){
    const width = $(window).width();
    const nav_bar = $('.navigation_bar');
    const nav_menu = $('.navigation_menu');
    
    if(width< 800){
        nav_menu.hide();
        nav_bar.show();
    }else{
        nav_menu.show();
        nav_bar.hide();
    }
}

function onScroll(event){
    let scrollPos = $(document).scrollTop();
    $('.navigation_items a').each(function () {
        let currLink = $(this);
        let refElement = $(currLink.attr("href"));
        if (refElement.position().top-70 <= scrollPos && (refElement.position().top) + refElement.height() >= scrollPos) {
            $('.navigation_items ul li a').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}