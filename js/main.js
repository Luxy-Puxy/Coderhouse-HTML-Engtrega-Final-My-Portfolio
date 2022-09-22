const preloaderWrapper = document.querySelector('.preloader-wrapper');
window.addEventListener('load',function(){
    preloaderWrapper.classList.add('fade-out-Animation');

})

function showNav(){
    document.getElementsByClassName("navigation")
    [0].classList.toggle("active");
}

$(document).ready(function() {
    $('.youtube,.gallery-item.popup-vimeo, .popup-gmaps').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,

        fixedContentPos: false
    });
});