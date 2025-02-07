// Variables GLOBALES
const message = document.getElementById('typingText');
// HEADER
const audio = document.getElementById('music');
const botonPlay = document.getElementById('btn-play');
const botonStop = document.getElementById('btn-pause');
const lyricsLetra = document.getElementById('lyrics');
// REPRODUCTOR DE MÚSICA
const btnBonus = document.getElementById('boton-bonus');
const cardBonus = document.getElementById('card-bonus');
// CARD QUE APARECE Y DESAPARECE

// FUNCIONES
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

playMusic = () => {
    audio.play();
    startLyrics();
}

pauseMusic = () => {
    audio.pause();
    clearInterval(interval)
}

startLyrics = () => {

}

// Array con los títulos del header
const titulo = ["Felíz San Valentín amor!❤️", "Felíz aniversario bba!❤️", "Feliz 5 años juntos bba!❤️"];

// Objeto con el tiempo y la letra de la canción
let letras = [
    { time: 2, text: "Esta es la primera línea de la canción..."},
    { time: 5, text: "segunda fraseeeeeeee..."},
    { time: 10, text: "tercera frase de la musica"}
]

let indexLetra = 0;

writing();

btnBonus.addEventListener('click', () => {
    cardBonus.classList.toggle("visible");
    btnBonus.classList.toggle("rotado");
});

botonPlay.addEventListener('click', () => {
    playMusic();
})

botonStop.addEventListener('click', () => {
    pauseMusic();
})

audio.addEventListener('timeupdate', () => {
    if (indexLetra < letras.length && audio.currentTime >= letras[indexLetra].time) {
        lyricsLetra.innerHTML += `<p>${letras[indexLetra].text}</p>`;
        indexLetra++
    }
});