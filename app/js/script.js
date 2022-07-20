let block = document.querySelector(".services-popup");
let btnClosePopup = document.querySelector(".j-close-popup");
let content = document.querySelector(".services-popup-content");
let btn = document.querySelectorAll(".b-open");

btnClosePopup.addEventListener('click', function () {
    block.classList.remove("open");
});

function plus () {
    for (let i = 0; i < btn.length; i++) {
        btn[i].addEventListener("click", function () {
            content.innerHTML = this.parentElement.querySelector(".services-popup-text").innerHTML;
            if (block.classList.contains("open")){
                block.classList.remove("open");
            } else {
                block.classList.add("open");
            }
        })
    }
}
plus();

$('a[href^="#"]').on('click', function (e) {
    let id = $(this).attr('href');
    if (id !== "#" && $(id).length) {
        e.preventDefault();
        if ($(window).width() <= 1024 && $menu.length && $menu.is('.open')) {
            $menu.slideUp();
        }
        $('html, body').stop(true).animate({
            scrollTop: $(id).offset().top
        }, 800);
    }
});