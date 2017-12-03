
//Preloader
$(window).on('load',function(){
    const preloaderFadeOutTime = 500;
    function hidePreloader() {
    const preloader = $('.spinner-wrapper');
    preloader.fadeOut(preloaderFadeOutTime);
    }
    hidePreloader();
});
