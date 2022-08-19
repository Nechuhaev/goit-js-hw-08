// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import '../css/common.css';
import '../css/01-gallery.css';

// Change code below this line
const galleryContainer = document.querySelector(".gallery");
const imageMarkup = createImagesCardMarkup(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", imageMarkup);

function createImagesCardMarkup(galleryItems) {
    return galleryItems.map(({original, preview, description}) => {
        return `
        <div class="gallery__item">
            <a href="${original.value}" class="gallery__link">
                <img 
                class="gallery__image"
                src="${preview}"
                alt="${description}"
                data-source="${original}"
                ></img>
            </a>
        </div>
        `;
    }).join('');
}
let lightbox = new SimpleLightbox('.gallery a', {
  scrollZoom: false,
  captionDelay: 250,
  captionsData: 'alt',
  doubleTapZoom: 1,
});

const onGalleryContainerClick = (evt) => { 
    evt.preventDefault();

    if (evt.target.classList.contains("gallery")) return;
    const source = evt.target.dataset.source;
    
    const instance = basicLightbox.create(`
    <img src="${source}"width="800" height="600">`);

  instance.show();
};

galleryContainer.addEventListener("click", onGalleryContainerClick);
console.log(galleryItems);
