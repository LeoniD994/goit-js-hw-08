// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line


const galleryEl = document.querySelector('.gallery');

const imagesListTemplate = ({preview, original, description}) => {
    return `
    <a class="gallery__item" href="${original}">
    <img class="gallery__image"
    src="${preview}" 
    title="${description}" 
    alt="${description}" />
    </a>`;
};

const addImg = galleryItems.map(imagesListTemplate).join('');
galleryEl.insertAdjacentHTML("afterbegin", addImg);



galleryEl.addEventListener('click', galleryImgClick );

function galleryImgClick (evt){
    const imageSelected = evt.target.getAttribute("data-source");

    evt.preventDefault();

    if (!imageSelected){return;}

};

new SimpleLightbox(".gallery a", {captionDelay: 250, showCounter:false});
