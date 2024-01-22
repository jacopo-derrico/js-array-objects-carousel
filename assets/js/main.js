/* 
Dato un array di oggetti letterali con:
 - url dell’immagine
 - titolo
 - descrizione
Creare un carosello come nella foto allegata.
Milestone 0:
Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l'immagine grande in modo da poter stilare lo slider.
Milestone 1:
Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
Al click dell'utente sulle frecce verso sinistra o destra, l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.
Milestone 2:
Aggiungere il **ciclo infinito** del carosello. Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso destra, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso sinistra.
BONUS 1:
Aggiungere le thumbnails (sottoforma di miniatura) ed al click attivare l’immagine corrispondente.
BONUS 2:
Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l’immagine attiva dovrà cambiare alla successiva.
BONUS 3:
Aggiungere bottoni di start/stop e di inversione del meccanismo di autoplay.
*/

const filmArray = [
    {
        title: "Blade Runner 2049",
        description: "A guy in a bad future thinks he is human, meets the guy from the preevious film, but now he has a dog",
        url: "blade-runner-2049.webp"
    },
    {
        title: "007: Spectre",
        description: "A spy that can't maintain a relationship fights against a secret corporation to avoid a therapist",
        url: "james-bond-spectre.webp"
    },
    {
        title: "John Wick 3",
        description: "They killed his dog 2 films ago and he killed them all. They keep on trying because they didn't understand he is the main character",
        url: "john-wick-3.webp"
    },
    {
        title: "Mad Max - Fury Road",
        description: "Rednecks desert random deathly races, they all crazy, only a few girls. The hero doesn't want to be there",
        url: "mad-max.webp"
    },
    {
        title: "Oppenheimer",
        description: "The guy who invented the bomb that convinced Japan to makes mangas. He couldn't play with Barbies",
        url: "oppenheimer.webp"
    },
];

const mainPhoto = document.getElementById('main-photo');
const carousel = document.getElementById('carousel');
const leftArrow = document.getElementById('chevron-left');
const rightArrow = document.getElementById('chevron-right');

let currentFilm = 0;

for (let i = 0; i < filmArray.length; i++) {
    const film = filmArray[i];
    
    let thumbnail = document.createElement('figure');
    thumbnail.classList.add('container-image')
    thumbnail.style.backgroundImage = `url(./assets/img/${film.url})`
    carousel.append(thumbnail)

    let title = document.createElement('h3');
    title.classList.add('hidden')
    title.textContent = `${film.title}`
    mainPhoto.append(title)

    let description = document.createElement('p');
    description.classList.add('hidden')
    description.textContent = `${film.description}`
    mainPhoto.append(description)

    if (i === 0) {
        title.classList.remove('hidden');
        description.classList.remove('hidden');
        mainPhoto.style.backgroundImage = `url(./assets/img/${film.url})`
    }
}


// for (let i = 0; i < filmArray.length; i++) {
//     const film = filmArray[i];

//     // let imgFigure = document.createElement('figure')

//     // imgFigure.classList.add('container-image')

//     // imgFigure.style.backgroundImage = `url(./assets/img/${film.url})`

//     // carousel.append(imgFigure)

//     let thumbnail = document.createElement('img');

//     thumbnail.src = `./assets/img/${film.url}`;

//     thumbnail.addEventListener('click', () => {
//         currentFilm = i;
//         updateActiveImage();
//     });
//     carousel.appendChild(thumbnail);

//     // Create figure for main photo
//     let figure = document.createElement('figure');
//     figure.style.backgroundImage = `url(./assets/img/${film.url})`;
//     if (i === 0) {
//         figure.classList.add('active');
//     }
//     mainPhoto.appendChild(figure);

//     // for (let i = 0; i < filmArray.length; i++) {
//     //     // let mainFigure = document.createElement(`<img src="./assets/img/${film.url}">`)
//     //     film

//     //     if (i === 0) {
//     //         mainPhoto.innerHTML += `<figure class="active">
//     //         <img src="./assets/img/${film.url}">
//     //         </figure>`
//     //         mainFigure.classList.add('active')
//     //     } else {

//     //     }
//     // }
// }




// // rightArrow.addEventListener('click', function () {
// //     if (currentFilm == filmArray.length - 1) {
// //         currentFilm = 0
// //     } else {
// //         currentFilm++
// //     }
// // })