const derBtn = document.querySelector("#scroll-btn-derecha")
const izqBtn = document.querySelector("#scroll-btn-izquierda")

const content = document.querySelector(".juegos")

const maxScrollIzq = content.scrollWidth - content.clientWidth;
function actualizarFlechas() {
    if (content.scrollLeft <= 0) {
        izqBtn.classList.add("flecha-oculta");
    } else {
        izqBtn.classList.remove("flecha-oculta");
    }
    if (Math.ceil(content.scrollLeft) >= Math.ceil(maxScrollIzq)) {
        derBtn.classList.add("flecha-oculta");
    } else {
        derBtn.classList.remove("flecha-oculta");
    }
}

actualizarFlechas();

derBtn.addEventListener("click", () => {
    content.scrollLeft += 1147;
    setTimeout(actualizarFlechas, 400);
});

izqBtn.addEventListener("click", () => {
    content.scrollLeft -= 1147; 
    setTimeout(actualizarFlechas, 400); 
});

content.addEventListener("scroll", actualizarFlechas);