import linkImages from './gallery-items.js';

const refs = {
  ulGallery: document.querySelector('.js-gallery'),
  divModal: document.querySelector('.js-lightbox'),
  divOverlay: document.querySelector('.lightbox__overlay'),
  imgOriginal: document.querySelector('.lightbox__image'),
  buttonClose: document.querySelector('[data-action= close-lightbox]'),
};

const imageMarcup = listMarkupImage(linkImages);

const galleryContainer = document.querySelector('.js-gallery');
galleryContainer.insertAdjacentHTML('beforeend', imageMarcup);
galleryContainer.addEventListener('click', onGalleryContainerClick);

refs.buttonClose.addEventListener('click', removeClassModal);

refs.divOverlay.addEventListener('click', onCloseMauseModal);

const lightBox = document.querySelector('.lightbox__image');

window.addEventListener('keydown', onCloseKeyModal);
window.addEventListener('keydown', nextImageLeft);
window.addEventListener('keydown', nextImageRight);

function listMarkupImage(linkImages) {
  return linkImages
    .map(({ preview, original, description }, i) => {
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

function onCloseMauseModal(e) {
  if (e.target === e.currentTarget) {
    removeClassModal();
  }
}

function onCloseKeyModal(e) {
  if (e.key === 'Escape') {
    removeClassModal();
  }
}

function nextImageLeft(e) {
  if (e.code !== 'ArrowLeft') {
    return;
  }

  let currentImageIndex = linkImages.findIndex(
    element => element.original === lightBox.getAttribute('src'),
  );

  if (currentImageIndex === 0) {
    currentImageIndex = linkImages.length;
  }

  const prevImageUrl = linkImages[currentImageIndex - 1].original;

  lightBox.setAttribute('src', prevImageUrl);
}

function nextImageRight(e) {
  if (e.code !== 'ArrowRight') {
    return;
  }

  let currentImageIndex = linkImages.findIndex(
    element => element.original === lightBox.getAttribute('src'),
  );

  if (currentImageIndex === linkImages.length - 1) {
    currentImageIndex = -1;
  }

  const nextImageUrl = linkImages[currentImageIndex + 1].original;

  lightBox.setAttribute('src', nextImageUrl);
}
