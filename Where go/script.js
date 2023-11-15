const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");
const closeMenuButton = document.getElementById("close-menu-button");

menuToggle.addEventListener("click", () => {
    mobileMenu.classList.toggle("open");
});

closeMenuButton.addEventListener("click", () => {
    mobileMenu.classList.remove("open");
});

console.log("Largura da tela: " + largura + "px");
console.log("Altura da tela: " + altura + "px");

