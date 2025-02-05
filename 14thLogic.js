let titulo = ["Felíz San Valentín amor!❤️", "Felíz aniversario bba!❤️", "Feliz 5 años juntos bba!❤️"];

let message = document.getElementById('typingText');

let indiceTitulo = 0;


let writing = () => {
    let indiceLetra = 0;

    let escritura = setInterval(() => {
        if (indiceLetra === titulo[indiceTitulo].length) {
            clearInterval(escritura);
            setTimeout(erasing, 1500);
        } else {
            message.textContent += titulo[indiceTitulo][indiceLetra];
            indiceLetra++
        }
    },100);
}

let erasing = () => {
    let indiceLetra2 = titulo[indiceTitulo].length;

     let borrando = setInterval(() => {
        if (indiceLetra2 >= 0) {
            message.textContent = titulo[indiceTitulo].slice(0, indiceLetra2);
            indiceLetra2--
        } else {
            clearInterval(borrando);
            indiceTitulo = (indiceTitulo + 1) % titulo.length;  // Aquí está el cambio
            writing();
        }
     }, 50);
}

writing();

let btnBonus = document.getElementById('boton-bonus');
let cardBonus = document.getElementById('card-bonus');

btnBonus.addEventListener('click', () => {
    cardBonus.classList.toggle("visible");
    btnBonus.classList.toggle("rotado");
});
