const menuHamb = document.querySelector("#menuHamb");
const menuHambAb = document.querySelector("#menuHambAbierto");
const btnMenuHambAb = document.querySelector("menuHambAb");

function abrirMenuHam(){
    menuHambAb.style.display = "flex";
}

function cerrarMenuHamb() {
    menuHambAb.style.display = "none";
}

menuHamb.addEventListener("click", abrirMenuHam);
menuHambAb.addEventListener("click", cerrarMenuHamb);