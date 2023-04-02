const imgUpload = document.querySelector('.img-upload__overlay');
const fileInput = document.querySelector('.img-upload__input');
const closeImgUploadButton = document.querySelector('.img-upload__cancel');
const body = document.body;

function escapeKeyHandler(ev) {
  if (ev.key === 'Escape') {
    closeImgUpload();
  }
}

function closeImgUpload() {
  imgUpload.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', escapeKeyHandler);
}

function openImgUpload() {
  imgUpload.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', escapeKeyHandler);
}

fileInput.addEventListener('change', openImgUpload);
closeImgUploadButton.addEventListener('click', closeImgUpload);
