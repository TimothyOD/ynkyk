// Current Page
$(function() {
    $('a').each(function() {
        if ($(this).prop('href') == window.location.href) {
            $(this).addClass('active');
            $(this).parents('li').addClass('active');
        }
    });
});



const logo = document.querySelectorAll("#ynk-home path");

for (let i = 0; i < logo.length; i++) {
    console.log(`Letter ${i} is ${logo[i].getTotalLength()}`);
}