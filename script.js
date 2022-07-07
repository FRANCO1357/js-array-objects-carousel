// MILESTONE 1
// Per prima cosa, creiamo il markup statico: costruiamo il container e inseriamo l'immagine grande in modo da poter stilare lo slider; avremo così la struttura base e gli stili pronti per poterci poi concentrare solamente sull'aspetto logico.
// MILESTONE 2
// Adesso rimuoviamo tutto il markup statico e inseriamo le immagini dinamicamente servendoci dell'array fornito e un semplice ciclo for. Possiamo concatenare una stringa con un template literal oppure utilizzare gli altri metodi di manipolazione del DOM che abbiamo visto insieme. Al termine di questa fase ci ritroveremo con lo stesso slider, ma costruito dinamicamente attraverso JavaScript.
// MILESTONE 3
// Al click dell'utente sulle frecce, l'immagine attiva cambia e diventa visibile nello slider, prendendo il posto della precedente.

// RECUPERO LA GALLERY
const gallery = document.getElementById("gallery");
const descriptionElement = document.querySelector('.description');

// RECUPERO LA ROW
const row = document.getElementById('row');

// RECUPERO I PULSANTI
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

// RECUPERO LA LISTA DI IMMAGINI
const imageList = [
    {
      url: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg',
      title: 'Svezia',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
    },
  
    {
      url: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg',
      title: 'Perù',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
    },
  
    {
      url: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c',
      title: 'Chile',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
    },
    {
      url: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg',
      title: 'Argentina',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
    },
    {
      url: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop',
      title: 'Colombia',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
    },
  ];

// CREO LA VARIABILE DI APPOGGIO
let imgNumber = 0;

// CICLO FOR PER CREARE LE IMMAGINI
for (let i = 0; i < imageList.length; i++){

    // CREO L'ELEMENTO IMMAHINE
    let images = `<img src="${imageList[i].url}">`;
    let title = `<h2>${imageList[i].title}</h2>`
    let description = `<p>${imageList[i].description}</p>`

    description

    descriptionElement.innerHTML += title + description;

    // STAMPO UN IMMAGINE DIVERSA AD OGNI CICLO
    gallery.innerHTML += images;

    // STAMPO COLONNE E IMMAGINI NELA ROW
    let col = `<div class="col"><img src="${imageList[i].url}"></div>`;
    row.innerHTML += col;
}




// SELEZIONO I TAG IMG DEL CAROSELLO E DO AL PRIMO LA CLASSE ACTIVE
const currentImg = document.querySelectorAll('#gallery img');
currentImg[imgNumber].classList.add('active');

// SELEZIONO I TAG IMG DEL TUMBNAIL E DO AL PRIMO LA CLASSE ACTIVE
const currentTumbnail = document.querySelectorAll('.tumbnail img');
currentTumbnail[imgNumber].classList.add('active');

// LOGICA DEL PULSANTE NEXT
nextButton.addEventListener('click', function(){

    // RIMUOVO LA CLASSE ACTIVE DALLE IMMAGINI CORRENTI
    currentImg[imgNumber].classList.remove('active');
    currentTumbnail[imgNumber].classList.remove('active');

    // CAMBIO IMMAGINE
    imgNumber += 1;
    console.log(imgNumber);

    // TORNO INDIETRO SE SONO ALL'ULTIMA IMMAGINE
    if(imgNumber === imageList.length){
        imgNumber = 0;
    }

    // AGGIUNGO LA CLASSE ACTIVE ALL'IMMAGINE SUCCESSIVA
    currentImg[imgNumber].classList.add('active');
    currentTumbnail[imgNumber].classList.add('active');
})

// LOGICA DEL PULSANTE PREV
prevButton.addEventListener('click', function(){

    // RIMUOVO LA CLASSE ACTIVE DALLE IMMAGINI CORRENTI
    currentImg[imgNumber].classList.remove('active');
    currentTumbnail[imgNumber].classList.remove('active');

    // TORNO ALL'ULTIMA IMMAGINE SE SONO ALLA PRIMA IMMAGINE
    if(imgNumber == 0){
        imgNumber = imageList.length - 1;
        currentImg[imgNumber].classList.add('active');
        currentTumbnail[imgNumber].classList.add('active');
    } 
    
    // ALTRIMENTI VADO ALL'IMMAGINE PRECEDENTE
    else {
        imgNumber -= 1;
        console.log(imgNumber);
        currentImg[imgNumber].classList.add('active');
        currentTumbnail[imgNumber].classList.add('active');
    }
})

// Dato un array di oggetti letterali con:
// - url dell’immagine
// - titolo
// - descrizione
// Creare un carosello ispirandosi alla foto allegata. Potete anche usare come base il carosello dell'esercizio precedente
// ## Milstone 0:
// Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l’immagine grande in modo da poter stilare lo slider.
// ## Milestone 1:
// Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
// Al click dell’utente sulle frecce verso sinistra o destra, l’immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.
// ## Milestone 2:
// Aggiungere il ciclo infinito del carosello. Ovvero se la miniatura attiva è la prima e l’utente clicca la freccia verso destra, la miniatura che deve attivarsi sarà l’ultima e viceversa per l’ultima miniatura se l’utente clicca la freccia verso sinistra.