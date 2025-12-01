import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import images from "./images.js";

const galleryList = document.querySelector('.gallery');

function createGalleryMarkup(items) {
  return items
    .map(
      ({ preview, original, description }) => `
      <li class="gallery-item">
        <a class="gallery-link" href="${original}">
          <img
            class="gallery-image"
            src="${preview}"
            alt="${description}"
          />
        </a>
      </li>`
    )
    .join('');
}

// Перевіряємо, що елемент існує
if (galleryList) {
  galleryList.innerHTML = createGalleryMarkup(images);

  new SimpleLightbox('.gallery a', {
    captionsData: 'alt',     
    captionPosition: 'bottom', 
    captionDelay: 250,        
  });
} else {
  console.error('Елемент .gallery не знайдено у DOM!');
}