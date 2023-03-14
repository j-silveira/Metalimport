//NAV HAMBURGUER

const hamburguer = document.querySelector(".hamburguer-nav");
const navMenu = document.querySelector(".menu");
const language = document.querySelector(".bloco-language")

hamburguer.addEventListener("click", () => {
    hamburguer.classList.toggle("active");
    navMenu.classList.toggle("active");
    language.classList.toggle("active");
})

//Produtos Acordeão

$('.panel-title').click(function() {
    $(this).find('i').toggleClass('fa fa-angle-down fa fa-angle-up');
});

//GALERIA

$(document).on('click', '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
});
