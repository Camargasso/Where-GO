const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");
const closeMenuButton = document.getElementById("close-menu-button");

menuToggle.addEventListener("click", () => {
    mobileMenu.classList.toggle("open");
});

closeMenuButton.addEventListener("click", () => {
    mobileMenu.classList.remove("open");
});
//----------------------------------------------------------
const cardContainer = document.querySelector(".card-container");
let scrollAmount = 0;

function handleCarousel(direction) {
    const cardWidth = 320; // Largura de cada card (ajuste conforme necessário)
    scrollAmount += direction * cardWidth;
    if (scrollAmount < 0) scrollAmount = 0;
    if (scrollAmount > cardContainer.scrollWidth - cardContainer.clientWidth) {
        scrollAmount = cardContainer.scrollWidth - cardContainer.clientWidth;
    }
    cardContainer.style.transform = `translateX(-${scrollAmount}px)`;
}

// Botões para controlar o carrossel
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

prevButton.addEventListener("click", () => {
    handleCarousel(-1);
});

nextButton.addEventListener("click", () => {
    handleCarousel(1);
});

var largura = screen.width;
var altura = screen.height;

console.log("Largura da tela: " + largura + "px");
console.log("Altura da tela: " + altura + "px");


