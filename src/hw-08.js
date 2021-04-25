import linkImages from './gallery-items.js';

console.log(linkImages);

const refs = {
  listGallery: document.querySelector('.js-gallery'),
  divLightBox: document.querySelector('.js-lightbox'),
  divLightBoxOverlay: document.querySelector('.lightbox__overlay'),
  divLightBoxContent: document.querySelector('.lightbox__content'),
  imgLightbox: document.querySelector('.lightbox__image'),
  buttonClose: document.querySelector('[data-action= close-lightbox]'),
};

console.log(refs.listGallery);
// console.log(refs.divLightBox);
// console.log(refs.divLightBoxOverlay);
// console.log(refs.divLightBoxContent);
// console.log(refs.imgLightbox);
console.log(refs.buttonClose);

const listMarkup = listMarkupImage(linkImages);

refs.listGallery.insertAdjacentHTML('beforeend', listMarkup);

refs.listGallery.addEventListener('click', onListGalleryClick);

refs.buttonClose.addEventListener('click', onButtonClose);

function onListGalleryClick(event) {
  if (event.target.nodeName !== 'IMG') {
    return;
  }

  refs.divLightBox.classList.add('is-open');
}

function onButtonClose() {
  const currentOpenButton = document.querySelector('.is-open');
  if (currentOpenButton) {
    currentOpenButton.classList.remove('is-open');
  }
}

function listMarkupImage(linkImages) {
  return linkImages
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
  <a
    class="gallery__link"
    href="#"
  >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li> `;
    })
    .join('');
}
