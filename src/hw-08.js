import linkImages from './gallery-items.js';

const refs = {
  ulGallery: document.querySelector('.js-gallery'),
  divModal: document.querySelector('.js-lightbox'),
  divContent: document.querySelector('.lightbox__content'),
  imgOriginal: document.querySelector('.lightbox__image'),
  buttonClose: document.querySelector('[data-action= close-lightbox]'),
};

const imageMarcup = listMarkupImage(linkImages);

const galleryContainer = document.querySelector('.js-gallery');
galleryContainer.insertAdjacentHTML('beforeend', imageMarcup);
galleryContainer.addEventListener('click', onGalleryContainerClick);

refs.buttonClose.addEventListener('click', removeClassModal);

function listMarkupImage(linkImages) {
  return linkImages
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
  <a
    class="gallery__link"
    href="${original}"
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

function onGalleryContainerClick(e) {
  e.preventDefault();

  const isGalleryImageElement = e.target.classList.contains('gallery__image');

  if (!isGalleryImageElement) {
    return;
  }

  const imageElement = e.target;
  const imageLink = imageElement.dataset.source;
  const imageAlt = imageElement.alt;

  const imageOriginal = document.querySelector('.lightbox__image');
  imageOriginal.src = `${imageLink}`;
  imageOriginal.alt = `${imageAlt}`;

  removeClassModal();
  addClassOpenModal();
}

function removeClassModal() {
  const currentActiveClassModal = document.querySelector(
    '.js-lightbox.is-open',
  );

  if (currentActiveClassModal) {
    currentActiveClassModal.classList.remove('is-open');

    const imageOriginal = document.querySelector('.lightbox__image');
    imageOriginal.src = '';
    imageOriginal.alt = '';
  }
}

function addClassOpenModal() {
  refs.divModal.classList.add('is-open');
}
