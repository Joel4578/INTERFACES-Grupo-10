document.querySelectorAll(".categoria-con-juegos").forEach(categoria => {
    const derBtn = categoria.querySelector(".flecha-der");
    const izqBtn = categoria.querySelector(".flecha-izq");
    const content = categoria.querySelector(".juegos");
    
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
});


function configurarCarrusel(izqBtn, derBtn, content) {
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
}

document.querySelectorAll(".categoria-con-juegos").forEach(categoria => {
    const derBtn = categoria.querySelector(".flecha-der");
    const izqBtn = categoria.querySelector(".flecha-izq");
    const content = categoria.querySelector(".juegos");

    configurarCarrusel(izqBtn, derBtn, content);
});

const derBtnDest = document.querySelector("#scroll-btn-derecha-Dest");
const izqBtnDest = document.querySelector("#scroll-btn-izquierda-Dest");
const contentDestacados = document.querySelector(".juegos-destacados");

configurarCarrusel(izqBtnDest, derBtnDest, contentDestacados);
