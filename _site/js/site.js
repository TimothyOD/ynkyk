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
function myFunction() {
    var x = document.getElementById('ynk-burger-nav');
    if (x.style.display === 'block') {
        x.style.display = 'none';
    } else {
        x.style.display = 'block';
    }
}