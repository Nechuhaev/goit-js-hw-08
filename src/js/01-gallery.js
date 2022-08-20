// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// Change code below this line
const galleryContainer = document.querySelector(".gallery");
const imageMarkup = createImagesCardMarkup(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", imageMarkup);

function createImagesCardMarkup(galleryItems) {
    return galleryItems.map(({original, preview, description}) => {
        return `
        
            <a href="${original}" class="gallery__item">
                <img 
                class="gallery__image"
                src="${preview}"
                alt="${description}"
                ></img>
            </a>
        `;
    }).join('');
}

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
  captionType: "alt",
});