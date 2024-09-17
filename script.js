window.onload = function() {
    setTimeout(function() {
        document.querySelector('.treasure-image').style.opacity = '1';
        document.querySelector('.treasure-box::before');
        document.querySelector('.secret-code').classList.add('reveal-message');
        document.querySelector('.treasure-box').classList.add('reveal-background');
    }, 2000);
};
