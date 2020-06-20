// current page
$(function() {
    $('a').each(function() {
        if ($(this).prop('href') == window.location.href) {
            $(this).addClass('active');
            $(this).parents('li').addClass('active');
        }
    });
});

// show burger menu
// function myFunction() {
//     var x = document.getElementById('ynk-burger-nav');
//     if (x.style.display === 'block') {
//         x.style.display = 'none';
//     } else {
//         x.style.display = 'block';
//     }
// }

const navSlide = () => {
    const burger = document.querySelector('.ynk-burger');
    const nav = document.querySelector('.ynk-nav');

    burger.addEventListener('click', () => {
        nav.classList.toggle('toggle');
    });
};

navSlide();