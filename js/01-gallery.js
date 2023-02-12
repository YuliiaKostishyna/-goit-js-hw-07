import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryItemMarkup = createGallery(galleryItems);

const galleryContainer = document.querySelector('.gallery');

function createGallery(items) {
    return items.map(item => `<div class="gallery__item">
  <a class="gallery__link" href="${item.original}" onclick="return false;" rel="noreferrer noopener">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>`).join('');
}
galleryContainer.innerHTML = galleryItemMarkup;

galleryContainer.addEventListener('click', onParentClick);

function onParentClick(evt) {
  evt.preventDefault();
  
  if (evt.target.nodeName !== "IMG") {
    return;
  }
    const instance = basicLightbox.create(`
        <img src= "${evt.target.dataset.source}">
`)

instance.show()
}



