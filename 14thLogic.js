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
    clearInterval(intervalo)
}

typeLyrics = (text) => {
    let i = 0
    let inverval = setInterval(() => {
        if (i <= text.length) {
            lyricsLetra.textContent += text[i];
            i++
        } else {
            clearInterval(inverval);
        }
    }, 80)
}

// Array con los títulos del header
const titulo = ["Felíz San Valentín amor!❤️", "Felíz aniversario bba!❤️", "Feliz 5 años juntos bba!❤️"];

// Objeto con el tiempo y la letra de la canción
let letras = [
    { time: 0.2, text: "no con cualquiera\n quiero despertar, solo\n con usted, con usted, \n yo bailo con usted"},
    { time: 6.8, text: "na ma con usted, un \nbeso donde estes, \ndonde estes bbe"},
    { time: 11.4, text: "no, no te puedo borrar, \ntu, me enseñaste a \nquerer, me enseñaste a \nbailar"},
]

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

let indexPartes = 0;
let intervalId = null;

audio.addEventListener("play", () => {
    if (!intervalId) { // Evita múltiples intervalos
        intervalId = setInterval(() => {
            let currentTime = audio.currentTime;
            let part = letras[indexPartes];

            if (part && currentTime >= part.time) {
                lyricsLetra.textContent = part.text;
                indexPartes++;
            }

            if (indexPartes >= letras.length) {
                clearInterval(intervalId);
                intervalId = null;
            }
        }, 100);
    }
});

audio.addEventListener("pause", () => {
    if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
    }
});

audio.addEventListener("ended", () => {
    indexPartes = 0;
    lyricsLetra.textContent = "";
    clearInterval(intervalId);
    intervalId = null;
});


// audio.addEventListener('timeupdate', () => {
//     if (indexPartes < letras.length && audio.currentTime >= letras[indexPartes].time) {
//         lyricsLetra.textContent = "";
//         typeLyrics(letras[indexPartes].text);
//         indexPartes++
//     }
// })

// audio.addEventListener('ended', () => {
//     lyricsLetra.textContent = "";
//     indexPartes = 0;  
// })